import { useEffect, useId, useRef, useState } from "react";
import WebsitesQuoteForm from "./WebsitesQuoteForm";
import { projects } from "../data/projectsData";
import {
  heroSwapPhrases,
  websitePrices,
  websitesPlaceholders,
  websitesSeo,
} from "../data/websitesContent";
import chicanaImage from "../assets/chicana2.webp";
import roseAutoImage from "../assets/roseauto.webp";
import tacoGarageImage from "../assets/taco-garage.webp";
import alejandroPortrait from "../assets/headshot-2026.png";

const audiences = [
  {
    title: "Restaurants & cafés",
    text: "People pick where to eat from their phone. A menu stuck in Facebook posts is easy to skip.",
  },
  {
    title: "Clinics & practices",
    text: "Patients want hours, services, and a way to book before they dial.",
  },
  {
    title: "Local shops",
    text: "If the only thing online is an old post, you can look closed when the door is open.",
  },
  {
    title: "Tradespeople",
    text: "Plumbers, electricians, cleaners, contractors — people search Google and call whoever shows up clearly.",
  },
];

const packages = [
  {
    name: "Launch",
    price: websitePrices.launch,
    timeline: websitesPlaceholders.timelines.launch,
    summary: "One solid page. Who you are, what you do, how to reach you.",
    items: [
      "Services, hours, and location",
      "Call, email, or message button",
      "Looks right on a phone",
      "Plain words a stranger gets fast",
      "Checked for keyboard and screen readers",
    ],
    cta: "Start with Launch",
    featured: false,
  },
  {
    name: "Business",
    price: websitePrices.business,
    timeline: websitesPlaceholders.timelines.business,
    summary: "A full site with room for each service and an easy way to get in touch.",
    items: [
      "Home, services, about, contact",
      "Form that lands in your inbox",
      "A page for each service",
      "Photos and wording that sound like you",
      "Same phone and accessibility checks",
    ],
    cta: "Start with Business",
    featured: true,
    badge: "Most picked",
  },
  {
    name: "Custom",
    price: websitePrices.custom,
    timeline: websitesPlaceholders.timelines.custom,
    summary: "A bigger build. More pages, more than one language, or a shop that takes payment.",
    items: [
      "Scope and price agreed up front",
      "Several pages, or an online shop",
      "English and Spanish, if you need both",
      "Booking, payments, or an admin to update it",
      "You still own the site outright",
    ],
    cta: "Start with Custom",
    featured: false,
  },
  {
    name: "Care Plan",
    price: websitePrices.care,
    interval: websitePrices.careInterval,
    timeline: websitesPlaceholders.timelines.care,
    optionalNote: websitesPlaceholders.careOptionalNote,
    summary: "I keep it online and handle the small changes you’d rather not fight with.",
    items: [
      "Hosting so the site stays up",
      "Updates for hours, menus, services",
      "Backups if something goes wrong",
      "Small text and photo changes",
      "A real person to email",
    ],
    cta: "Add Care Plan",
    featured: false,
    optionalLabel: "Optional",
  },
];

const steps = [
  {
    title: "We talk",
    text: "A short call about your business and what the site needs to do. You leave knowing the price before any work starts.",
  },
  {
    title: "You see a draft",
    text: "Within a week you get a real page to click through — not a slide of ideas. It already says what you do and how to reach you.",
  },
  {
    title: "You say what’s off",
    text: "Words, photos, order — tell me in plain English. I’ll change it. You don’t need design vocabulary.",
  },
  {
    title: "It goes live",
    text: "The site launches. You own it: the words, the design, the files. If you ever want to move it, you can.",
  },
];

const proofTags = {
  "Axe Thro Co": "Venue",
  "GOLD Events": "Events",
  "Neuroplasticity Lab": "Experiment",
  "The Taco Garage": "Restaurant",
  "Astro Reminder Website": "Coaching",
  "Rose Auto Service": "Auto repair",
  "Axe Thro Co's Pizza Bar": "Restaurant",
  "Nonprofit Tree Planting Community": "Community",
  "Geodesic Brasil Website": "Architecture",
  "Chicana Hummingbird": "Artist · Shop",
  "Weather App": "App",
  "To Do App": "App",
};

const proofLast = ["Weather App", "To Do App"];

const proofProjects = projects
  .filter((project) => project.category === "built" && project.title !== "Portfolio Website")
  .slice()
  .sort((a, b) => {
    const aLast = proofLast.includes(a.title);
    const bLast = proofLast.includes(b.title);
    if (aLast !== bLast) return aLast ? 1 : -1;
    if (aLast && bLast) return proofLast.indexOf(a.title) - proofLast.indexOf(b.title);
    return b.id - a.id;
  })
  .map((project) => ({
    title: project.title,
    tag: proofTags[project.title] ?? "Built",
    text: project.description,
    image: project.image,
    alt: `Homepage of ${project.title}`,
    href: project.website,
  }));

const heroShots = [
  {
    image: chicanaImage,
    alt: "Chicana Hummingbird website",
    url: "chicanahummingbird.com",
  },
  {
    image: roseAutoImage,
    alt: "Rose Auto Service website",
    url: "roseautoservice.com",
  },
  {
    image: tacoGarageImage,
    alt: "The Taco Garage website",
    url: "thetacogarage.com",
  },
];

const marqueeItems = [
  "Restaurants",
  "Cafés",
  "Taquerías",
  "Clinics",
  "Barbershops",
  "Auto shops",
  "Plumbers",
  "Electricians",
  "Artists",
  "Boutiques",
  "Cleaners",
  "Contractors",
];

const faqs = [
  {
    question: "How long does it take?",
    answer:
      "A Launch page is usually about two weeks. A full Business site is about three to four. A Custom build takes longer — the quote says how long. Most of the waiting is on photos and wording — I’ll help with both.",
  },
  {
    question: "How much does it cost?",
    answer: `Launch starts at ${websitePrices.launch.replace("From ", "")}, Business at ${websitePrices.business.replace("From ", "")}, and Custom at ${websitePrices.custom.replace("From ", "")} for a bigger site. The Care Plan is ${websitePrices.care}${websitePrices.careInterval} and optional. Your free quote gives the exact number before any work starts.`,
  },
  {
    question: "Do I own the site?",
    answer:
      "Yes. The words, the design, the files, and the domain are yours. If you ever want to move it somewhere else, you can.",
  },
  {
    question: "What do you need from me?",
    answer:
      "Your logo if you have one, a few photos, your hours, and a list of what you offer. If you don’t have some of it, we’ll figure it out together.",
  },
  {
    question: "Can you update it after launch?",
    answer:
      "Yes — the Care Plan covers small changes like hours, menus, and photos. Without it, I’ll quote changes as they come up.",
  },
  {
    question: "¿Hablas español?",
    answer:
      "Sí. We can work in English, Spanish, or both — and your site can be in both languages too.",
  },
];

const { beforeAfter, testimonials, testimonialsIntro } = websitesPlaceholders;

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function priceParts(price) {
  const from = price.startsWith("From ");
  return {
    from,
    amount: price.replace(/^From\s/, ""),
  };
}

const Websites = () => {
  const [swapIndex, setSwapIndex] = useState(0);
  const [shotIndex, setShotIndex] = useState(0);
  const [compareX, setCompareX] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [railProgress, setRailProgress] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState("Help me pick");
  const [careSelected, setCareSelected] = useState(false);
  const [qaCount, setQaCount] = useState(0);
  const [releaseCount, setReleaseCount] = useState(0);
  const [countsDone, setCountsDone] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const compareRef = useRef(null);
  const stepsRef = useRef(null);
  const statsRef = useRef(null);
  const stageRef = useRef(null);
  const browserRef = useRef(null);
  const blobRef = useRef(null);
  const heroRef = useRef(null);
  const draggingRef = useRef(false);
  const faqId = useId();

  useEffect(() => {
    setReduceMotion(prefersReducedMotion());
  }, []);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = websitesSeo.title;

    let description = document.querySelector('meta[name="description"]');
    const created = !description;
    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }
    const previousDescription = description.getAttribute("content");
    description.setAttribute("content", websitesSeo.description);

    return () => {
      document.title = previousTitle;
      if (created) {
        description.remove();
      } else if (previousDescription != null) {
        description.setAttribute("content", previousDescription);
      }
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const id = window.setInterval(() => {
      setSwapIndex((i) => (i + 1) % heroSwapPhrases.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const id = window.setInterval(() => {
      setShotIndex((i) => (i + 1) % heroShots.length);
    }, 4000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const updateRail = () => {
      const stepsEl = stepsRef.current;
      if (!stepsEl) return;
      const r = stepsEl.getBoundingClientRect();
      const p = Math.max(0, Math.min(1, (window.innerHeight * 0.75 - r.top) / (r.height + window.innerHeight * 0.2)));
      setRailProgress(p);
    };
    updateRail();
    window.addEventListener("scroll", updateRail, { passive: true });
    window.addEventListener("resize", updateRail);
    return () => {
      window.removeEventListener("scroll", updateRail);
      window.removeEventListener("resize", updateRail);
    };
  }, []);

  useEffect(() => {
    const el = statsRef.current;
    if (!el || countsDone) return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        io.disconnect();
        if (prefersReducedMotion()) {
          setQaCount(10);
          setReleaseCount(100);
          setCountsDone(true);
          return;
        }
        const t0 = performance.now();
        const tick = (t) => {
          const k = Math.min(1, (t - t0) / 1400);
          const eased = 1 - (1 - k) ** 3;
          setQaCount(Math.round(10 * eased));
          setReleaseCount(Math.round(100 * eased));
          if (k < 1) {
            requestAnimationFrame(tick);
          } else {
            setCountsDone(true);
          }
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [countsDone]);

  useEffect(() => {
    const cmp = compareRef.current;
    if (!cmp || prefersReducedMotion()) return undefined;
    let cancelled = false;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || draggingRef.current) return;
        io.disconnect();
        let t = 0;
        const animate = () => {
          if (cancelled || draggingRef.current) return;
          t += 0.02;
          const x = 50 + Math.sin(t * 3) * 22 * Math.max(0, 1 - t / 2.2);
          setCompareX(x);
          if (t < 2.2) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      },
      { threshold: 0.55 },
    );
    io.observe(cmp);
    return () => {
      cancelled = true;
      io.disconnect();
    };
  }, []);

  const setCompareFromClientX = (clientX) => {
    const cmp = compareRef.current;
    if (!cmp) return;
    const r = cmp.getBoundingClientRect();
    const next = Math.max(3, Math.min(97, ((clientX - r.left) / r.width) * 100));
    setCompareX(next);
  };

  const onComparePointerDown = (event) => {
    draggingRef.current = true;
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
    setCompareFromClientX(event.clientX);
  };

  const onComparePointerMove = (event) => {
    if (!draggingRef.current) return;
    setCompareFromClientX(event.clientX);
  };

  const onComparePointerUp = () => {
    draggingRef.current = false;
    setDragging(false);
  };

  const onHeroMouseMove = (event) => {
    if (prefersReducedMotion()) return;
    const hero = heroRef.current;
    const blob = blobRef.current;
    const stage = stageRef.current;
    const browser = browserRef.current;
    if (!hero || !blob || !stage || !browser) return;
    const r = hero.getBoundingClientRect();
    blob.style.transform = `translate(${event.clientX - r.left - 160}px, ${event.clientY - r.top - 160}px)`;
    const s = stage.getBoundingClientRect();
    const x = (event.clientX - s.left) / s.width - 0.5;
    const y = (event.clientY - s.top) / s.height - 0.5;
    browser.style.transform = `rotateY(${x * 14 - 4}deg) rotateX(${-y * 10 + 3}deg)`;
  };

  const onHeroMouseLeave = () => {
    if (browserRef.current) browserRef.current.style.transform = "";
  };

  const selectPlan = (planName) => {
    if (planName === "Care Plan") {
      setCareSelected(true);
      return;
    }
    setSelectedPlan(planName);
  };

  const shot = heroShots[shotIndex];
  const marqueeLoop = [...marqueeItems, ...marqueeItems];

  return (
    <div className="websites">
      <header
        className="ws-hero"
        ref={heroRef}
        onMouseMove={onHeroMouseMove}
        onMouseLeave={onHeroMouseLeave}
        aria-labelledby="websites-heading"
      >
        <div className="ws-blob ws-blob-a" aria-hidden="true" />
        <div className="ws-blob ws-blob-b" aria-hidden="true" />
        <div className="ws-blob ws-blob-c" ref={blobRef} aria-hidden="true" />
        <div className="container ws-hero-grid">
          <div className="ws-hero-copy">
            <div className="ws-meta">
              <span className="ws-pill">
                <i className="ws-dot" aria-hidden="true" />
                Taking new projects
              </span>
              <span className="ws-pill">English · Español</span>
            </div>
            <h1 id="websites-heading" className="ws-disp">
              <span className="ws-line">
                <span>Your business</span>
              </span>
              <span className="ws-line">
                <span>deserves better</span>
              </span>
              <span className="ws-line">
                <span>than a</span>
              </span>
              <span className="ws-line">
                <span className="ws-swap" aria-live="polite">
                  {heroSwapPhrases.map((phrase, i) => (
                    <span
                      key={phrase}
                      className={
                        i === swapIndex ? "" : i === (swapIndex + heroSwapPhrases.length - 1) % heroSwapPhrases.length ? "out" : "in"
                      }
                      aria-hidden={i !== swapIndex}
                    >
                      {phrase}
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            <p className="ws-lede">
              A clear site so people find you on Google, trust what they see, and know how to call, book, or walk in — without you learning to build websites.
            </p>
            <div className="ws-actions">
              <a className="ws-btn" href="#quote">
                <span>Get a free quote</span>
                <span className="ws-arr" aria-hidden="true">
                  →
                </span>
              </a>
              <a className="ws-ghost" href="#pricing">
                See pricing
              </a>
            </div>
            <p className="ws-fine">Takes about two minutes · No pitch deck</p>
          </div>

          <div className="ws-stage" ref={stageRef}>
            <div className="ws-browser" ref={browserRef}>
              <div className="ws-chrome" aria-hidden="true">
                <i />
                <i />
                <i />
                <div className="ws-url">
                  <b>●</b>
                  <span>{shot.url}</span>
                </div>
              </div>
              <div className="ws-shot">
                {heroShots.map((item, i) => (
                  <img
                    key={item.url}
                    src={item.image}
                    alt={item.alt}
                    className={i === shotIndex ? "on" : undefined}
                    width={1200}
                    height={650}
                    decoding="async"
                    fetchPriority={i === 0 ? "high" : "low"}
                  />
                ))}
              </div>
            </div>
            <div className="ws-float ws-f1" aria-hidden="true">
              <span className="ws-ic">98</span>
              <div>
                Loads fast on phones
                <small>Lighthouse checked</small>
              </div>
            </div>
            <div className="ws-float ws-f2" aria-hidden="true">
              <span className="ws-ic">A11y</span>
              <div>
                Screen-reader tested
                <small>WCAG 2.2</small>
              </div>
            </div>
            <div className="ws-float ws-f3" aria-hidden="true">
              <span className="ws-ic">G</span>
              <div>
                Shows up on Google
                <small>Maps + search</small>
              </div>
            </div>
            <p className="ws-caption">
              <span>
                {String(shotIndex + 1).padStart(2, "0")} / 03 — Live client site
              </span>
              <span className="ws-bar" aria-hidden="true">
                <i />
              </span>
            </p>
          </div>
        </div>
      </header>

      <div className="ws-marquee" aria-hidden="true">
        <div className="ws-track">
          {marqueeLoop.map((item, i) => (
            <span key={`${item}-${i}`}>{item}</span>
          ))}
        </div>
      </div>

      <section className="ws-s" aria-labelledby="who-heading">
        <div className="container">
          <div className="ws-head reveal">
            <div>
              <p className="ws-eyebrow">01 / Who it’s for</p>
              <h2 id="who-heading" className="ws-disp">
                Built for owners who just need people to find them.
              </h2>
            </div>
            <p>
              If customers search, find nothing useful, and call someone else — this is for you. You don’t need a big brand. You need a page that answers the obvious questions.
            </p>
          </div>
          <ul className="ws-who reveal">
            {audiences.map((item, index) => (
              <li key={item.title} className="ws-who-row">
                <span className="ws-n">{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="ws-go" aria-hidden="true">
                  →
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ws-s ws-s-tight" aria-labelledby="compare-heading">
        <div className="container">
          <div className="ws-head reveal">
            <div>
              <p className="ws-eyebrow">02 / The difference</p>
              <h2 id="compare-heading" className="ws-disp">
                {beforeAfter.heading}
              </h2>
            </div>
            <p>{beforeAfter.lede}</p>
          </div>
          <div
            className="ws-compare reveal"
            id="compare"
            ref={compareRef}
            style={{ "--x": `${compareX}%` }}
            role="slider"
            aria-label={`${beforeAfter.before.alt}. ${beforeAfter.after.alt}`}
            tabIndex={0}
            onPointerDown={onComparePointerDown}
            onPointerMove={onComparePointerMove}
            onPointerUp={onComparePointerUp}
            onPointerCancel={onComparePointerUp}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                setCompareX((x) => Math.max(3, x - 4));
              }
              if (event.key === "ArrowRight") {
                event.preventDefault();
                setCompareX((x) => Math.min(97, x + 4));
              }
            }}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(compareX)}
            aria-valuetext={`${Math.round(compareX)} percent showing the after website`}
          >
            <div className="ws-pane ws-before">
              <div className="ws-fb">
                <div className="ws-fb-hd">
                  <div className="ws-fb-av" />
                  <div>
                    <div className="ws-fb-nm">Your Business</div>
                    <div className="ws-fb-tm">3 weeks ago · 🌐</div>
                  </div>
                </div>
                <div>Open today!! 🎉 msg us for prices. new hours soon, check back</div>
                <div className="ws-fb-ph" />
                <div className="ws-fb-cm">
                  <div>are you open sunday?</div>
                  <div>do you guys have a website</div>
                  <div>what’s the address?</div>
                </div>
              </div>
            </div>
            <div className="ws-pane ws-after">
              <div className="ws-site-mock">
                <div className="ws-sn">
                  <b>Your Business</b>
                  <span>Menu · Hours · Book</span>
                </div>
                <h4>Open today until 9pm. Two blocks from the trolley.</h4>
                <div className="ws-row">
                  <span>Call (619) 555-0148</span>
                  <span>Get directions</span>
                  <span>Book a table</span>
                </div>
                <div className="ws-info">
                  <div>
                    <small>Hours</small>Mon–Sun · 8a–9p
                  </div>
                  <div>
                    <small>Where</small>North Park, SD
                  </div>
                  <div>
                    <small>Pricing</small>Right on the page
                  </div>
                </div>
              </div>
            </div>
            <div className="ws-handle" aria-hidden="true" />
            <span className="ws-tag ws-tag-l">Before · social page</span>
            <span className="ws-tag ws-tag-r">After · real site</span>
          </div>
          <div className="ws-cmp-notes reveal">
            <div>
              <b>Questions in the comments</b>
              Hours, address, prices — buried or missing. Every unanswered question is a customer who calls someone else.
            </div>
            <div>
              <b>Answers on the first screen</b>
              What you do, when you’re open, and one tap to call, book, or get directions. On any phone.
            </div>
          </div>
          {dragging ? <span className="sr-only">Comparison slider active</span> : null}
        </div>
      </section>

      <section className="ws-s ws-s-tight" id="pricing" aria-labelledby="packages-heading">
        <div className="container">
          <div className="ws-head reveal">
            <div>
              <p className="ws-eyebrow">03 / Pricing</p>
              <h2 id="packages-heading" className="ws-disp">
                A starting point for every size.
              </h2>
            </div>
            <p>Pick what fits. The free quote is the real number for your business — no surprise line items later.</p>
          </div>
          <div className="ws-plans">
            {packages.map((pkg) => {
              const { from, amount } = priceParts(pkg.price);
              return (
                <article key={pkg.name} className={`ws-plan reveal${pkg.featured ? " feat" : ""}`}>
                  <div className="ws-kind">
                    <span>{pkg.name}</span>
                    {pkg.badge ? <span className="ws-badge">{pkg.badge}</span> : null}
                    {pkg.optionalLabel ? <span>{pkg.optionalLabel}</span> : null}
                  </div>
                  <p className="ws-price">
                    {from ? <span className="ws-from">from</span> : null}
                    <span className="ws-amount">{amount}</span>
                    {pkg.interval ? <small>{pkg.interval}</small> : null}
                  </p>
                  <p className="ws-timeline">{pkg.timeline}</p>
                  {pkg.optionalNote ? <p className="ws-opt">{pkg.optionalNote}</p> : null}
                  <p className="ws-desc">{pkg.summary}</p>
                  <ul>
                    {pkg.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a className="ws-cta" href="#quote" onClick={() => selectPlan(pkg.name)}>
                    {pkg.cta} <span aria-hidden="true">→</span>
                  </a>
                </article>
              );
            })}
          </div>
          <p className="ws-fineprint">Not required to own your site · Cancel the care plan any time</p>
        </div>
      </section>

      <section className="ws-s ws-about" aria-labelledby="why-heading">
        <div className="container ws-about-grid">
          <div className="reveal">
            <p className="ws-eyebrow ws-eyebrow-on-dark">04 / Who builds it</p>
            <h2 id="why-heading" className="ws-disp">
              I’m Alejandro<span className="ws-em">.</span>
            </h2>
            <p className="ws-sub">I make sites that people can actually use.</p>
            <p>
              Ten years testing software before real people had to rely on it — for apps serving 350K+ users — plus a{" "}
              <strong>CPACC credential</strong> in making websites usable for people with disabilities.
            </p>
            <p>
              Your site gets built so more people can use it: phone, keyboard, or screen reader. Then it’s checked the way software gets checked — links, forms, and the path from “I found you” to “I’m contacting you.”
            </p>
            <p>
              <strong>English, Spanish, or both. Your call.</strong>
            </p>
            <div className="ws-stats" ref={statsRef}>
              <div>
                <b>
                  {qaCount}
                  {countsDone || reduceMotion ? "+" : ""}
                </b>
                <span>Years in QA</span>
              </div>
              <div>
                <b>
                  {releaseCount}
                  {countsDone || reduceMotion ? "+" : ""}
                </b>
                <span>Releases shipped</span>
              </div>
              <div>
                <b>CPACC</b>
                <span>Certified</span>
              </div>
            </div>
          </div>
          <div className="ws-pwrap reveal">
            <svg className="ws-ring" viewBox="0 0 160 160" aria-hidden="true">
              <defs>
                <path id="ws-ring-path" d="M80,80 m-62,0 a62,62 0 1,1 124,0 a62,62 0 1,1 -124,0" />
              </defs>
              <text>
                <textPath href="#ws-ring-path">Worldwide remote · Hablo español · Remote ·</textPath>
              </text>
            </svg>
            <figure className="ws-portrait">
              <img
                src={alejandroPortrait}
                alt={websitesPlaceholders.portraitAlt}
                width={480}
                height={600}
                loading="lazy"
                decoding="async"
              />
              <figcaption className="ws-lab">
                <span>Alejandro Curiel</span>
                <span>Worldwide remote</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="ws-s" aria-labelledby="process-heading">
        <div className="container">
          <div className="ws-head reveal">
            <div>
              <p className="ws-eyebrow">05 / How it works</p>
              <h2 id="process-heading" className="ws-disp">
                Getting a site should feel easy.
              </h2>
            </div>
            <p>Four short steps. You always know what’s next, and you own the finished site.</p>
          </div>
          <div className="ws-steps" ref={stepsRef}>
            <div className="ws-rail" aria-hidden="true">
              <i style={{ transform: `scaleX(${railProgress})` }} />
            </div>
            <ol className="ws-steps-list">
              {steps.map((step, index) => (
                <li
                  key={step.title}
                  className={`ws-step${railProgress >= index / steps.length + 0.05 ? " lit" : ""}`}
                >
                  <span className="ws-n">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="ws-s ws-work" aria-labelledby="proof-heading">
        <div className="container">
          <div className="ws-head reveal">
            <div>
              <p className="ws-eyebrow">06 / Proof</p>
              <h2 id="proof-heading" className="ws-disp">
                Real sites, already live.
              </h2>
            </div>
            <p>Client sites you can open and click through.</p>
          </div>
          <ul className="ws-proj">
            {proofProjects.map((project) => (
              <li key={project.title}>
                <a href={project.href} target="_blank" rel="noreferrer" className="ws-card reveal">
                  <div className="ws-im">
                    <img
                      src={project.image}
                      alt={project.alt}
                      width={800}
                      height={500}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="ws-view">Visit ↗</span>
                  </div>
                  <div className="ws-bd">
                    <span className="ws-t">{project.tag}</span>
                    <h3>{project.title}</h3>
                    <p>{project.text}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ws-s" aria-labelledby="testimonials-heading">
        <div className="container">
          <div className="ws-head reveal">
            <div>
              <p className="ws-eyebrow">Clients</p>
              <h2 id="testimonials-heading" className="ws-disp">
                What clients say.
              </h2>
            </div>
            <p>{testimonialsIntro}</p>
          </div>
          <ul className="ws-testimonials">
            {testimonials.map((item) => (
              <li key={`${item.name}-${item.business}`}>
                <figure className="ws-testimonial">
                  <blockquote>
                    <p>{item.quote}</p>
                  </blockquote>
                  <figcaption>
                    {item.photoSrc ? (
                      <span className="ws-testimonial-photo">
                        <img
                          src={item.photoSrc}
                          alt={item.photoAlt}
                          width={48}
                          height={48}
                          loading="lazy"
                          decoding="async"
                        />
                      </span>
                    ) : (
                      <span className="ws-testimonial-photo-empty" role="img" aria-label={item.photoAlt} />
                    )}
                    <span className="ws-testimonial-meta">
                      <cite className="ws-testimonial-name">{item.name}</cite>
                      <span className="ws-testimonial-biz">{item.business}</span>
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ws-s" aria-labelledby="faq-heading">
        <div className="container ws-faq-grid">
          <div>
            <p className="ws-eyebrow">07 / FAQ</p>
            <h2 id="faq-heading" className="ws-disp">
              Quick answers.
            </h2>
          </div>
          <div className="ws-faq reveal">
            {faqs.map((item, index) => (
              <details key={item.question} name={faqId}>
                <summary>
                  {item.question}
                  <span className="ws-pm" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="ws-ans" id={`${faqId}-${index}`}>
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="ws-s ws-contact" id="quote" aria-labelledby="quote-heading">
        <div className="ws-blob ws-blob-a ws-blob-contact" aria-hidden="true" />
        <div className="container ws-contact-grid">
          <div className="reveal">
            <p className="ws-eyebrow">08 / Free quote</p>
            <h2 id="quote-heading" className="ws-disp">
              Ready? Tell me about the business.
            </h2>
            <p className="ws-lede">
              A few lines is enough. I’ll reply within a day with a price and what the first version would include. Or just call — that’s often easier.
            </p>
            <ul className="ws-direct">
              <li>
                <a href="mailto:info@alexcuriel.com">
                  <span>
                    <small>Email</small>
                    info@alexcuriel.com
                  </span>
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a href="tel:+16197928464">
                  <span>
                    <small>Call or text</small>
                    (619) 792-8464
                  </span>
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            </ul>
          </div>
          <WebsitesQuoteForm
            selectedPlan={selectedPlan}
            careSelected={careSelected}
            onPlanChange={setSelectedPlan}
            onCareChange={setCareSelected}
            launchPrice={websitePrices.launch.replace("From ", "")}
            businessPrice={websitePrices.business.replace("From ", "")}
            customPrice={websitePrices.custom.replace("From ", "")}
          />
        </div>
      </section>
    </div>
  );
};

export default Websites;
