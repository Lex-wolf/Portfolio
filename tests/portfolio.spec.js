// @ts-check
const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://alexcuriel.com';

// ─────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────
test.describe('Navigation', () => {
  test('page title is correct', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page).toHaveTitle(/Alejandro Curiel/i);
  });

  test('nav links are visible', async ({ page }) => {
    await page.goto(BASE_URL);
    const links = ['#projects', '#about', '#technologies', '#experience', '#contact'];
    for (const href of links) {
      const link = page.locator(`nav a[href="${href}"]`);
      await expect(link).toBeVisible();
    }
  });

  test('nav Work link scrolls to Projects section', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.click('nav a[href="#projects"]');
    await page.waitForTimeout(1000);
    const section = page.locator('#projects');
    await expect(section).toBeInViewport({ ratio: 0.05 });
  });

  test('nav About link scrolls to About section', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.click('nav a[href="#about"]');
    const section = page.locator('#about');
    await expect(section).toBeInViewport({ ratio: 0.2 });
  });

  test('nav Contact link scrolls to Contact section', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.click('nav a[href="#contact"]');
    const section = page.locator('#contact');
    await expect(section).toBeInViewport({ ratio: 0.2 });
  });

  test('logo/brand link returns to top', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.click('a[href="#top"]');
    await expect(page.locator('h1')).toBeInViewport();
  });
});

// ─────────────────────────────────────────────
// HERO SECTION
// ─────────────────────────────────────────────
test.describe('Hero Section', () => {
  test('hero heading renders name', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.locator('h1')).toContainText('Alejandro Curiel');
  });

  test('hero subheadings contain QA and Web Development', async ({ page }) => {
    await page.goto(BASE_URL);
    const body = await page.textContent('body');
    expect(body).toContain('QA');
    expect(body).toContain('Web Development');
  });

  test('headshot image loads without error', async ({ page }) => {
    await page.goto(BASE_URL);
    const img = page.locator('img[alt="Alejandro Curiel"]');
    await expect(img).toBeVisible();
    const src = await img.getAttribute('src');
    expect(src).toBeTruthy();

    const response = await page.request.get(src.startsWith('http') ? src : `${BASE_URL}${src}`);
    expect(response.status()).toBe(200);
  });

  test('"Explore My Work" CTA is visible and links to #projects', async ({ page }) => {
    await page.goto(BASE_URL);
    const cta = page.locator('a[href="#projects"]').first();
    await expect(cta).toBeVisible();
  });

  test('"Contact Me" CTA is visible and links to #contact', async ({ page }) => {
    await page.goto(BASE_URL);
    const cta = page.locator('a[href="#contact"]').first();
    await expect(cta).toBeVisible();
  });

  test('availability badge is visible', async ({ page }) => {
    await page.goto(BASE_URL);
    const body = await page.textContent('body');
    expect(body).toMatch(/AVAILABLE/i);
  });

  test('stats display experience years and CPACC', async ({ page }) => {
    await page.goto(BASE_URL);
    const body = await page.textContent('body');
    expect(body).toContain('10+');
    expect(body).toContain('CPACC');
  });
});

// ─────────────────────────────────────────────
// ABOUT SECTION
// ─────────────────────────────────────────────
test.describe('About Section', () => {
  test('About section is present', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.locator('#about')).toBeVisible();
  });

  test('skill bars are rendered', async ({ page }) => {
    await page.goto(BASE_URL);
    const body = await page.textContent('body');
    expect(body).toContain('Playwright Automation');
    expect(body).toContain('Mobile QA');
    expect(body).toContain('WCAG 2.2');
  });

  test('location and language info is present', async ({ page }) => {
    await page.goto(BASE_URL);
    const body = await page.textContent('body');
    expect(body).toMatch(/MEXICO CITY/i);
    expect(body).toMatch(/EN · ES · PT/i);
  });
});

// ─────────────────────────────────────────────
// PROJECTS SECTION
// ─────────────────────────────────────────────
test.describe('Projects Section', () => {
  test('Projects section heading is visible', async ({ page }) => {
    await page.goto(BASE_URL);
    const section = page.locator('#projects');
    await expect(section).toBeVisible();
    await expect(section.locator('h2')).toContainText('Projects');
  });

  test('filter tabs All / Built / QA are present', async ({ page }) => {
    await page.goto(BASE_URL);
    const body = await page.textContent('body');
    expect(body).toContain('All');
    expect(body).toContain('Built');
    expect(body).toContain('QA');
  });

  test('at least 10 project cards are rendered', async ({ page }) => {
    await page.goto(BASE_URL);
    // Cards identified by project image wrappers
    const cards = page.locator('#projects img');
    await expect(cards).toHaveCount(await cards.count());
    const count = await cards.count();
    expect(count).toBeGreaterThanOrEqual(10);
  });

  test('Pearl Jam project card is visible', async ({ page }) => {
    await page.goto(BASE_URL);
    const body = await page.textContent('body');
    expect(body).toContain('Pearl Jam');
  });

  test('project card images load without 404', async ({ page }) => {
    await page.goto(BASE_URL);
    const images = page.locator('#projects img');
    const count = await images.count();

    // Check first 5 images to keep test fast
    for (let i = 0; i < Math.min(5, count); i++) {
      const src = await images.nth(i).getAttribute('src');
      if (src) {
        const url = src.startsWith('http') ? src : `${BASE_URL}${src}`;
        const response = await page.request.get(url);
        expect(response.status()).toBeLessThan(400);
      }
    }
  });
});

// ─────────────────────────────────────────────
// TECHNOLOGIES SECTION
// ─────────────────────────────────────────────
test.describe('Technologies Section', () => {
  test('Technologies section is present', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.locator('#technologies')).toBeVisible();
  });

  test('key tools are listed', async ({ page }) => {
    await page.goto(BASE_URL);
    const body = await page.textContent('body');
    const expectedTools = ['Playwright', 'Postman', 'GitHub Actions', 'React', 'Tailwind', 'WCAG 2.2'];
    for (const tool of expectedTools) {
      expect(body).toContain(tool);
    }
  });
});

// ─────────────────────────────────────────────
// EXPERIENCE SECTION
// ─────────────────────────────────────────────
test.describe('Experience Section', () => {
  test('Experience section is present', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.locator('#experience')).toBeVisible();
  });

  test('Analog Republic role is listed', async ({ page }) => {
    await page.goto(BASE_URL);
    const body = await page.textContent('body');
    expect(body).toContain('Analog Republic');
  });

  test('Bison Digital role is listed', async ({ page }) => {
    await page.goto(BASE_URL);
    const body = await page.textContent('body');
    expect(body).toContain('Bison Digital');
  });

  test('date ranges are present', async ({ page }) => {
    await page.goto(BASE_URL);
    const body = await page.textContent('body');
    expect(body).toContain('2024');
    expect(body).toContain('2017');
  });
});

// ─────────────────────────────────────────────
// CONTACT FORM
// ─────────────────────────────────────────────
test.describe('Contact Form', () => {
  test('contact form fields are present', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('#contact').scrollIntoViewIfNeeded();

    await expect(page.locator('input[name="name"], input[placeholder*="Name" i]').first()).toBeVisible();
    await expect(page.locator('input[name="email"], input[type="email"]').first()).toBeVisible();
    await expect(page.locator('select, [role="combobox"]').first()).toBeVisible();
    await expect(page.locator('textarea').first()).toBeVisible();
  });

  test('submit button is present and labeled', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('#contact').scrollIntoViewIfNeeded();
    const btn = page.locator('button[type="submit"], button:has-text("Send")').first();
    await expect(btn).toBeVisible();
  });

  test('required field validation fires on empty submit', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('#contact').scrollIntoViewIfNeeded();
    const btn = page.locator('button[type="submit"], button:has-text("Send")').first();
    await btn.click();

    // Native HTML5 validation or custom error — at least one should appear
    const nameInput = page.locator('input[name="name"], input[placeholder*="Name" i]').first();
    const isInvalid = await nameInput.evaluate(el => !el.validity.valid);
    expect(isInvalid).toBeTruthy();
  });

  test('email field rejects non-email input', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('#contact').scrollIntoViewIfNeeded();

    const emailInput = page.locator('input[type="email"]').first();
    await emailInput.fill('not-an-email');

    const btn = page.locator('button[type="submit"], button:has-text("Send")').first();
    await btn.click();

    const isInvalid = await emailInput.evaluate(el => !el.validity.valid);
    expect(isInvalid).toBeTruthy();
  });

  test('contact dropdown changes conditional fields', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('#contact').scrollIntoViewIfNeeded();

    const dropdown = page.locator('select').first();
    await dropdown.selectOption('Employment Opportunity');

    // Employment path should show Position Title field
    const positionField = page.locator('input[placeholder*="Senior QA" i]').first();
    await expect(positionField).toBeVisible();
  });
});

// ─────────────────────────────────────────────
// FOOTER & SOCIAL LINKS
// ─────────────────────────────────────────────
test.describe('Footer', () => {
  test('GitHub link is present in footer', async ({ page }) => {
    await page.goto(BASE_URL);
    const link = page.locator('footer a[href*="github"], a[href="https://github.com"]').first();
    await expect(link).toBeVisible();
  });

  test('LinkedIn link is present in footer', async ({ page }) => {
    await page.goto(BASE_URL);
    const link = page.locator('footer a[href*="linkedin"], a[href="https://linkedin.com"]').first();
    await expect(link).toBeVisible();
  });

  test('email link resolves to correct address', async ({ page }) => {
    await page.goto(BASE_URL);
    const mailto = page.locator('a[href^="mailto:"]').first();
    const href = await mailto.getAttribute('href');
    expect(href).toContain('info@alexcuriel.com');
  });
});

// ─────────────────────────────────────────────
// ACCESSIBILITY BASELINE
// ─────────────────────────────────────────────
test.describe('Accessibility Baseline', () => {
  test('page has a single H1', async ({ page }) => {
    await page.goto(BASE_URL);
    const h1s = page.locator('h1');
    await expect(h1s).toHaveCount(1);
  });

  test('all images have alt attributes', async ({ page }) => {
    await page.goto(BASE_URL);
    const images = page.locator('img');
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute('alt');
      // alt must exist (can be empty string for decorative, but must be present)
      expect(alt).not.toBeNull();
    }
  });

  test('page lang attribute is set', async ({ page }) => {
    await page.goto(BASE_URL);
    const lang = await page.locator('html').getAttribute('lang');
    expect(lang).toBeTruthy();
  });

  test('nav landmark is present', async ({ page }) => {
    await page.goto(BASE_URL);
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
  });

  test('focus is reachable on nav links via keyboard', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.keyboard.press('Tab');
    const focused = await page.evaluate(() => document.activeElement?.tagName);
    expect(['A', 'BUTTON', 'INPUT']).toContain(focused);
  });
});

// ─────────────────────────────────────────────
// PERFORMANCE / LOAD
// ─────────────────────────────────────────────
test.describe('Performance', () => {
  test('page loads under 5 seconds', async ({ page }) => {
    const start = Date.now();
    await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });
    const elapsed = Date.now() - start;
    expect(elapsed).toBeLessThan(5000);
  });

  test('no console errors on load', async ({ page }) => {
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');
    expect(errors).toHaveLength(0);
  });

  test('no broken network requests (4xx/5xx)', async ({ page }) => {
    const failed = [];
    page.on('response', response => {
      if (response.status() >= 400) {
        failed.push(`${response.status()} ${response.url()}`);
      }
    });
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    expect(failed).toHaveLength(0);
  });
});

// ─────────────────────────────────────────────
// RESPONSIVE / VIEWPORT
// ─────────────────────────────────────────────
test.describe('Responsive Layout', () => {
  test('renders correctly on mobile (375px)', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(BASE_URL);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('renders correctly on tablet (768px)', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto(BASE_URL);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('renders correctly on desktop (1440px)', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(BASE_URL);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('no horizontal overflow on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(BASE_URL);
    const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    expect(scrollWidth).toBeLessThanOrEqual(viewportWidth + 5); // 5px tolerance
  });
});
