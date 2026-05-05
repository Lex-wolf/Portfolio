# Cursor Migration Prompt — alex.curiel Portfolio Redesign

**Paste this entire file into Cursor as one instruction.**
**Attach these three files alongside it:**
1. `portfolio.html` (the source of truth)
2. `handoff/portfolio-styles.css` (the full stylesheet, ready to drop in)
3. `handoff/tailwind.config.js` (token mappings)

---

## YOUR TASK

You are migrating the visual design from `portfolio.html` into this React + Vite + Tailwind codebase. The current implementation does not match. Your job is to make it match exactly.

## ABSOLUTE RULES — DO NOT BREAK THESE

1. **Do not change a single word of copy.** Every headline, paragraph, project description, and bullet stays exactly as written.
2. **Do not change any `href`, route, or link value.**
3. **Do not change component file names.**
4. **The project drawer / side-panel interaction must keep working.** Clicking a project card opens the existing drawer with full project details. The state and logic for this drawer already exist — only restyle the trigger card and the drawer panel.
5. **Do not modify `entry-server.jsx`, SEO meta tags, Vite config, or Vercel config.**

## ONE NON-NEGOTIABLE: do step 1 first

If fonts and tokens are not loading, NOTHING else will look right. Verify Step 1 in DevTools before moving on.

---

## STEP 1 — Fonts & global stylesheet

### 1a. Add Google Fonts to `index.html`

Inside `<head>`, before the closing `</head>`, add exactly:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
```

### 1b. Replace your global stylesheet

Open `src/index.css`. Delete its current content. Paste the entire contents of `handoff/portfolio-styles.css` into it. This file contains:
- Both `:root, [data-theme="dark"]` and `[data-theme="light"]` token blocks (Alpine/Ocean dark, Alone/Teal light)
- Light-mode overrides for every component class (navbar, chips, cards, technologies teal block, etc.)
- Base body, `.container`, `section`, `.eyebrow`
- Every component class used below (`.navbar`, `.hero`, `.proj-card`, `.tech-section`, etc.)

### 1c. Replace `tailwind.config.js`

Use the contents of `handoff/tailwind.config.js`. After this, the Tailwind utilities `font-display`, `font-mono`, `text-accent`, `bg-bg-surface`, `bg-bg-primary`, `text-text-primary`, etc. all resolve to design tokens.

### 1d. VERIFY before continuing

1. Restart the Vite dev server.
2. Open the page, inspect any `<h1>` in DevTools.
3. Confirm `font-family: Syne, sans-serif` is applied. If you see `Inter`, `system-ui`, or `Times New Roman` — STOP. Fix the font import or CSS variable wiring before doing anything else.
4. Inspect `<body>`, confirm `font-family: 'DM Sans', system-ui, sans-serif`.
5. Set `<html data-theme="dark">` manually and confirm the page background goes to `#08171E`.

---

## STEP 2 — Theme toggle

In `Navbar.jsx`:

1. Add a sun/moon pill button on the right side of the nav.
2. Use class `theme-toggle` (already styled in the global stylesheet).
3. On click: read `localStorage.theme`, flip between `"dark"` and `"light"`, write back, and set `document.documentElement.dataset.theme = newValue`.
4. On mount: read `localStorage.theme`, default to `"dark"` if absent, apply it to `document.documentElement.dataset.theme`.
5. Show a sun SVG when current theme is `dark` (clicking will switch to light), moon SVG when current theme is `light`.
6. Do NOT remove the existing language toggle — both coexist in `nav-right`.

JSX skeleton:

```jsx
<button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
  {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
  <span>{theme === 'dark' ? 'LIGHT' : 'DARK'}</span>
</button>
```

---

## STEP 3 — Apply the container globally

Every `<section>` in the page MUST have an inner `<div className="container">` to constrain content to 1100px centered with 2.5rem side padding. The current implementation has content stretching nearly full-width — that is the root cause of the "too much side spacing compared to your design" complaint. You need to flip it: cap content at 1100px.

Pattern for every section:

```jsx
<section id="about" className="about">
  <div className="container">
    {/* content */}
  </div>
</section>
```

---

## STEP 4 — Per-component reskin (in this order)

For each component below, keep all existing logic, state, and props. Only change the JSX structure and class names. Reference `portfolio.html` for the exact HTML structure of each section.

### 4a. `Navbar.jsx`

- Root `<nav className="navbar">` with inner `<div className="nav-inner">`
- Left: `<div className="logo">alex<span className="dot">.</span>curiel</div>`
- Center: `<div className="nav-links">` with `<a className="nav-link">` for each link
- Right: `<div className="nav-right">` containing the theme toggle, language toggle, and hamburger
- Sticky, blurred backdrop comes from the `.navbar` class — do not redeclare in Tailwind

### 4b. `Hero.jsx`

Mandatory structure:

```jsx
<section className="hero">
  <div className="hero-orb"></div>
  <div className="hero-orb b"></div>
  <div className="container hero-inner">
    <div className="hero-grid">
      <div>
        <div className="eyebrow hero-eyebrow">PORTFOLIO · 2025</div>
        <h1>Alejandro Curiel</h1>
        <div className="audience-toggle">
          <button className="active">For QA Hires</button>
          <button>For Web Clients</button>
        </div>
        <p className="hero-subtitle">{/* subtitle copy */}</p>
        <p className="hero-body">{/* body copy */}</p>
        <div className="chips">
          <span className="chip">Playwright</span>
          {/* etc. — NO .accent modifier on any chip */}
        </div>
        <div className="cta-row">
          <a className="btn btn-primary" href="#contact">Get in touch</a>
          <a className="btn btn-secondary" href="#projects">See projects</a>
        </div>
      </div>
      <div className="portrait">
        <img src="/headshot.jpg" alt="Alejandro Curiel" className="portrait-img" />
        <div className="portrait-meta">
          <span><span className="blink"></span>AVAILABLE</span>
          <span>MX · REMOTE</span>
        </div>
      </div>
    </div>
    <div className="hero-stats">
      <div><div className="stat-num">10+</div><div className="stat-label">YEARS IN QA</div></div>
      <div><div className="stat-num">100+</div><div className="stat-label">PROJECTS SHIPPED</div></div>
      <div><div className="stat-num">CPACC</div><div className="stat-label">CERTIFIED</div></div>
    </div>
  </div>
</section>
```

The hero MUST be `min-height: 100vh`. If yours is short, the `.hero` class isn't applying — confirm the global stylesheet loaded.

### 4c. `About.jsx`

```jsx
<section id="about" className="about">
  <div className="container">
    <div className="section-head">
      <div>
        <div className="eyebrow">01 / About</div>
        <h2>{/* heading copy */}</h2>
      </div>
      <p>{/* short descriptor */}</p>
    </div>
    <div className="about-grid">
      <div className="about-body">
        <p>{/* paragraph 1 */}</p>
        <p>{/* paragraph 2 */}</p>
        <div className="about-meta">
          <div><span className="k">BASED</span><strong>MEXICO CITY</strong></div>
          <div><span className="k">FOCUS</span><strong>QA + WEB DEV</strong></div>
        </div>
      </div>
      <div className="skill-list">
        {skills.map(s => (
          <div className="skill" key={s.name}>
            <span className="label">{s.name}</span>
            <span className="pct">{s.pct}%</span>
            <div className="bar"><span style={{width: `${s.pct}%`}}></span></div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
```

### 4d. `ProjectsNew.jsx`

CRITICAL: Keep your existing `selectedProject` state and the drawer. Only change the JSX of the trigger card and the section wrapper.

```jsx
<section id="projects" className="projects">
  <div className="container">
    <div className="section-head">
      <div>
        <div className="eyebrow">02 / Projects</div>
        <h2>Selected work</h2>
      </div>
      <div className="proj-tabs">
        <button className={filter==='all' ? 'active':''}>All</button>
        <button className={filter==='built' ? 'active':''}>Built</button>
        <button className={filter==='qa' ? 'active':''}>QA</button>
      </div>
    </div>
    <div className="projects-grid">
      {filteredProjects.map(p => (
        <button
          key={p.id}
          className="proj-card"
          onClick={() => setSelectedProject(p)}   /* KEEP existing drawer trigger */
        >
          <div className="proj-thumb">
            <img src={p.thumbnail} alt={p.title} />
            <div className="proj-arrow">↗</div>
          </div>
          <div className="proj-body">
            <div className="proj-icon-row">
              <div className="proj-icon">{p.icon}</div>
              <div className="proj-cat">{p.category}</div>
            </div>
            <h3 className="proj-title">{p.title}</h3>
            <p className="proj-desc">{p.shortDescription}</p>
            <div className="proj-tags">
              {p.tags.map(t => <span className="proj-tag" key={t}>{t}</span>)}
            </div>
          </div>
        </button>
      ))}
    </div>
  </div>
</section>
```

Include EVERY QA project from `projectsData.js`: Pearl Jam, Eric Church Website, Eric Church App, Thomas Rhett Website, Thomas Rhett Home Team App, Brandi Carlile, ACE Parking, Pride Study, Obagi Events, ASPIRE Galderma, Eric Church Forums, To The Stars, Our Rescue.

### 4e. `Technologies.jsx`

This is the section that goes teal in light mode. Wrapper class `tech-section` is what triggers the teal background.

```jsx
<section id="technologies" className="tech-section">
  <div className="container">
    <div className="section-head">
      <div>
        <div className="eyebrow">03 / Technologies</div>
        <h2>Stack & tooling</h2>
      </div>
      <p>What I reach for, organized by purpose.</p>
    </div>
    {categories.map(cat => (
      <div key={cat.name}>
        <div className="tech-cat">{cat.name}</div>
        <div className="tech-grid">
          {cat.items.map(item => (
            <div className="tech-item" key={item.name}>
              <div className="tech-icon">{item.abbr}</div>
              <div className="tech-label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>
```

Categories: Development, QA & Automation, Accessibility, Backend.

### 4f. `Experience.jsx`

```jsx
<section id="experience" className="experience">
  <div className="container">
    <div className="section-head">
      <div>
        <div className="eyebrow">04 / Experience</div>
        <h2>Track record</h2>
      </div>
    </div>
    <div className="exp-list">
      {entries.map(e => (
        <div className="exp-row" key={e.id}>
          <div className="exp-year">{e.year}</div>
          <div>
            <h3 className="exp-title">{e.title}</h3>
            <div className="exp-company">{e.company}</div>
            <ul className="exp-bullets">
              {e.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
```

### 4g. `ContactForm.jsx`

Keep your existing `fetch('/api/contact', ...)` call — do not change the network logic. Only restyle.

```jsx
<section id="contact" className="contact">
  <div className="container">
    <div className="contact-inner">
      <div className="eyebrow">05 / Contact</div>
      <h2>Have a project in mind?</h2>
      <p>{/* descriptor copy */}</p>
      {state === 'success' ? (
        <div className="contact-success">
          <div className="success-check">{/* checkmark svg */}</div>
          <h3>Thanks for reaching out!</h3>
          <p>I'll get back to you as soon as possible.</p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="field">
              <label>NAME <span className="req">*</span></label>
              <input required name="name" />
            </div>
            <div className="field">
              <label>EMAIL <span className="req">*</span></label>
              <input required type="email" name="email" />
            </div>
          </div>
          <div className="field">
            <label>MESSAGE <span className="req">*</span></label>
            <textarea required name="message" rows={5}></textarea>
          </div>
          {error && <div className="form-error">{error}</div>}
          <button className="btn btn-primary contact-submit" disabled={loading}>
            {loading ? <span className="spinner"></span> : 'Send message'}
          </button>
        </form>
      )}
      <div className="socials">
        <a className="social-btn" href="...">{/* svg */}</a>
        {/* etc */}
      </div>
    </div>
  </div>
</section>
```

### 4h. Footer

```jsx
<footer className="footer">
  <div className="container footer-row">
    <div>alex.curiel · 2025</div>
    <div>{/* center links */}</div>
    <div className="right">{/* socials/stack */}</div>
  </div>
</footer>
```

---

## STEP 5 — Hero entrance animation

Only the hero animates on page load. Add to the top of the hero JSX:

```jsx
useEffect(() => {
  const els = document.querySelectorAll('.hero [data-stagger]');
  els.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    setTimeout(() => {
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100 + i * 100);
  });
}, []);
```

Add `data-stagger` to: hero eyebrow, h1, audience toggle, subtitle, body, chips, cta-row, hero-stats. In that order.

## STEP 6 — Scroll reveals on every other section

```jsx
useEffect(() => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('reveal-in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  return () => io.disconnect();
}, []);
```

Add `className="reveal"` to each `<section>` except `.hero`. The `.reveal` and `.reveal-in` classes are already defined in the global stylesheet.

---

## STEP 7 — Verification checklist

Before considering this done, manually verify each item:

- [ ] DevTools shows `font-family: Syne` on H1, `font-family: 'DM Sans'` on `<p>`, `font-family: 'JetBrains Mono'` on `.eyebrow`
- [ ] Page content is capped at 1100px wide on desktop, NOT full viewport
- [ ] Every section has visible `2.5rem` left/right padding before the content edge
- [ ] Hero is full viewport height with the orb gradients pulsing in the background
- [ ] Hero h1 is huge — clamp(3rem, 7vw, 6rem). On a 1440px viewport this is ~100px font-size
- [ ] All sections have a small monospace eyebrow with a 28px accent line before the text (`01 / About`, `02 / Projects`, etc.)
- [ ] Project cards have rounded corners (14px), border, and lift on hover with crimson border + glow
- [ ] Project cards still open the drawer on click — drawer content unchanged
- [ ] Theme toggle in nav top-right flips the page; preference persists across reload
- [ ] In light mode, the Technologies section background is solid teal `#164346`
- [ ] In light mode, the rest of the page is warm stone `#D8D7D2`
- [ ] Crimson `#9E291E` only appears on: CTAs, eyebrows, active tabs/nav, focus rings, hover borders. Never as a large background fill.
- [ ] Playwright drawer test still passes: `npx playwright test`
- [ ] No horizontal scroll on mobile widths (test at 375px)
- [ ] All copy strings are byte-for-byte identical to before (no rewrites)

If any checkbox fails, it's a real regression — fix it before merging.

---

## DEBUGGING

If after Step 1 the fonts still don't load, the most likely cause is:
1. The Google Fonts `<link>` is in the wrong file (must be `index.html`, not a React component)
2. CSS module scoping is stripping global classes — make sure `src/index.css` is imported at the top of `src/main.jsx` with `import './index.css'`
3. A previous `:root` or `body` rule is overriding — search the codebase for other `body { font-family` declarations and remove them

If the layout is still too wide after Step 3, search the codebase for `max-w-` or `max-width` rules on parent containers and remove them. The only width cap should be `.container` at 1100px.
