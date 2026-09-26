import { useEffect, useId, useMemo, useRef, useState } from "react";
import WebsitesQuoteForm from "./WebsitesQuoteForm";
import { useLanguage } from "../context/LanguageContext";
import { projects } from "../data/projectsData";
import { websitePrices, websitesPlaceholders } from "../data/websitesContent";
import { getWebsitesCopy } from "../data/websitesCopy";
import chicanaImage from "../assets/chicana2.webp";
import roseAutoImage from "../assets/roseauto.webp";
import tacoGarageImage from "../assets/taco-garage.webp";
import alejandroPortrait from "../assets/headshot-2026.png";

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
    tag: project.title,
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
  const { lang } = useLanguage();
  const copy = useMemo(() => getWebsitesCopy(lang), [lang]);
  const packages = copy.packages;
  const steps = copy.steps;
  const audiences = copy.audiences;
  const faqs = copy.faqs;
  const marqueeItems = copy.marquee;

  useEffect(() => {
    setReduceMotion(prefersReducedMotion());
  }, []);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = copy.seoTitle;

    let description = document.querySelector('meta[name="description"]');
    const created = !description;
    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }
    const previousDescription = description.getAttribute("content");
    description.setAttribute("content", copy.seoDescription);

    return () => {
      document.title = previousTitle;
      if (created) {
        description.remove();
      } else if (previousDescription != null) {
        description.setAttribute("content", previousDescription);
      }
    };
  }, [copy.seoTitle, copy.seoDescription]);

  useEffect(() => {
    setSwapIndex(0);
  }, [lang]);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const id = window.setInterval(() => {
      setSwapIndex((i) => (i + 1) % copy.phrases.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, [copy.phrases.length]);

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
                {copy.pillStatus}
              </span>
              <span className="ws-pill">{copy.pillLang}</span>
            </div>
            <h1 id="websites-heading" className="ws-disp">
              {copy.heroLines.map((line) => (
                <span className="ws-line" key={line}>
                  <span>{line}</span>
                </span>
              ))}
              <span className="ws-line">
                <span className="ws-swap" aria-live="polite">
                  {copy.phrases.map((phrase, i) => (
                    <span
                      key={phrase}
                      className={
                        i === swapIndex ? "" : i === (swapIndex + copy.phrases.length - 1) % copy.phrases.length ? "out" : "in"
                      }
                      aria-hidden={i !== swapIndex}
                    >
                      {phrase}
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            <p className="ws-lede">{copy.lede}</p>
            <div className="ws-actions">
              <a className="ws-btn" href="#quote">
                <span>{copy.quoteCta}</span>
                <span className="ws-arr" aria-hidden="true">
                  →
                </span>
              </a>
              <a className="ws-ghost" href="#pricing">
                {copy.seePricing}
              </a>
            </div>
            <p className="ws-fine">{copy.fine}</p>
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
                {copy.floatFast}
                <small>{copy.floatFastSmall}</small>
              </div>
            </div>
            <div className="ws-float ws-f2" aria-hidden="true">
              <span className="ws-ic">A11y</span>
              <div>
                {copy.floatA11y}
                <small>WCAG 2.2</small>
              </div>
            </div>
            <div className="ws-float ws-f3" aria-hidden="true">
              <span className="ws-ic">G</span>
              <div>
                {copy.floatGoogle}
                <small>{copy.floatGoogleSmall}</small>
              </div>
            </div>
            <p className="ws-caption">
              <span>
                {String(shotIndex + 1).padStart(2, "0")} / 03 — {copy.shotCaption}
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
              <p className="ws-eyebrow">{copy.whoEyebrow}</p>
              <h2 id="who-heading" className="ws-disp">
                {copy.whoHeading}
              </h2>
            </div>
            <p>{copy.whoLede}</p>
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
              <p className="ws-eyebrow">{copy.compareEyebrow}</p>
              <h2 id="compare-heading" className="ws-disp">
                {copy.compareHeading}
              </h2>
            </div>
            <p>{copy.compareLede}</p>
          </div>
          <div
            className="ws-compare reveal"
            id="compare"
            ref={compareRef}
            style={{ "--x": `${compareX}%` }}
            role="slider"
            aria-label={`${copy.beforeAlt}. ${copy.afterAlt}`}
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
            aria-valuetext={`${Math.round(compareX)} ${copy.compareValue}`}
          >
            <div className="ws-pane ws-before">
              <div className="ws-fb">
                <div className="ws-fb-hd">
                  <div className="ws-fb-av" />
                  <div>
                    <div className="ws-fb-nm">{copy.fbName}</div>
                    <div className="ws-fb-tm">{copy.fbTime}</div>
                  </div>
                </div>
                <div>{copy.fbPost}</div>
                <div className="ws-fb-ph" />
                <div className="ws-fb-cm">
                  {copy.fbComments.map((comment) => (
                    <div key={comment}>{comment}</div>
                  ))}
                </div>
              </div>
            </div>
            <div className="ws-pane ws-after">
              <div className="ws-site-mock">
                <div className="ws-sn">
                  <b>{copy.fbName}</b>
                  <span>{copy.mockNav}</span>
                </div>
                <h4>{copy.mockHeading}</h4>
                <div className="ws-row">
                  {copy.mockActions.map((action) => (
                    <span key={action}>{action}</span>
                  ))}
                </div>
                <div className="ws-info">
                  <div>
                    <small>{copy.mockHoursLabel}</small>
                    {copy.mockHours}
                  </div>
                  <div>
                    <small>{copy.mockWhereLabel}</small>
                    {copy.mockWhere}
                  </div>
                  <div>
                    <small>{copy.mockPriceLabel}</small>
                    {copy.mockPrice}
                  </div>
                </div>
              </div>
            </div>
            <div className="ws-handle" aria-hidden="true" />
            <span className="ws-tag ws-tag-l">{copy.tagBefore}</span>
            <span className="ws-tag ws-tag-r">{copy.tagAfter}</span>
          </div>
          <div className="ws-cmp-notes reveal">
            <div>
              <b>{copy.noteBeforeTitle}</b>
              {copy.noteBefore}
            </div>
            <div>
              <b>{copy.noteAfterTitle}</b>
              {copy.noteAfter}
            </div>
          </div>
          {dragging ? <span className="sr-only">{copy.sliderActive}</span> : null}
        </div>
      </section>

      <section className="ws-s ws-s-tight" id="pricing" aria-labelledby="packages-heading">
        <div className="container">
          <div className="ws-head reveal">
            <div>
              <p className="ws-eyebrow">{copy.priceEyebrow}</p>
              <h2 id="packages-heading" className="ws-disp">
                {copy.priceHeading}
              </h2>
            </div>
            <p>{copy.priceLede}</p>
          </div>
          <div className="ws-plans">
            {packages.map((pkg) => {
              const { from, amount } = priceParts(pkg.price);
              return (
                <article key={pkg.id} className={`ws-plan reveal${pkg.featured ? " feat" : ""}`}>
                  <div className="ws-kind">
                    <span>{pkg.name}</span>
                    {pkg.badge ? <span className="ws-badge">{pkg.badge}</span> : null}
                    {pkg.optionalLabel ? <span>{pkg.optionalLabel}</span> : null}
                  </div>
                  <p className="ws-price">
                    {from ? <span className="ws-from">{copy.from}</span> : null}
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
                  <a className="ws-cta" href="#quote" onClick={() => selectPlan(pkg.id)}>
                    {pkg.cta} <span aria-hidden="true">→</span>
                  </a>
                </article>
              );
            })}
          </div>
          <p className="ws-fineprint">{copy.fineprint}</p>
        </div>
      </section>

      <section className="ws-s ws-about" aria-labelledby="why-heading">
        <div className="container ws-about-grid">
          <div className="reveal">
            <p className="ws-eyebrow ws-eyebrow-on-dark">{copy.aboutEyebrow}</p>
            <h2 id="why-heading" className="ws-disp">
              {copy.aboutHeading}
              <span className="ws-em">.</span>
            </h2>
            <p className="ws-sub">{copy.aboutSub}</p>
            <p>
              {copy.aboutP1} <strong>{copy.aboutCred}</strong> {copy.aboutP1b}
            </p>
            <p>{copy.aboutP2}</p>
            <p>
              <strong>{copy.aboutLang}</strong>
            </p>
            <div className="ws-stats" ref={statsRef}>
              <div>
                <b>
                  {qaCount}
                  {countsDone || reduceMotion ? "+" : ""}
                </b>
                <span>{copy.statYears}</span>
              </div>
              <div>
                <b>
                  {releaseCount}
                  {countsDone || reduceMotion ? "+" : ""}
                </b>
                <span>{copy.statReleases}</span>
              </div>
              <div>
                <b>CPACC</b>
                <span>{copy.statCertified}</span>
              </div>
            </div>
          </div>
          <div className="ws-pwrap reveal">
            <svg className="ws-ring" viewBox="0 0 160 160" aria-hidden="true">
              <defs>
                <path id="ws-ring-path" d="M80,80 m-62,0 a62,62 0 1,1 124,0 a62,62 0 1,1 -124,0" />
              </defs>
              <text>
                <textPath href="#ws-ring-path">{copy.ring}</textPath>
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
                <span>{copy.location}</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="ws-s" aria-labelledby="process-heading">
        <div className="container">
          <div className="ws-head reveal">
            <div>
              <p className="ws-eyebrow">{copy.processEyebrow}</p>
              <h2 id="process-heading" className="ws-disp">
                {copy.processHeading}
              </h2>
            </div>
            <p>{copy.processLede}</p>
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
              <p className="ws-eyebrow">{copy.proofEyebrow}</p>
              <h2 id="proof-heading" className="ws-disp">
                {copy.proofHeading}
              </h2>
            </div>
            <p>{copy.proofLede}</p>
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
                    <span className="ws-view">{copy.visit}</span>
                  </div>
                  <div className="ws-bd">
                    <span className="ws-t">{copy.tags[project.title] ?? project.tag}</span>
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
              <p className="ws-eyebrow">{copy.clientsEyebrow}</p>
              <h2 id="testimonials-heading" className="ws-disp">
                {copy.clientsHeading}
              </h2>
            </div>
            <p>{copy.clientsIntro}</p>
          </div>
          <ul className="ws-testimonials">
            {copy.clients.map((item) => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noreferrer" className="ws-testimonial reveal">
                  <p>{item.text}</p>
                  <span className="ws-testimonial-foot">
                    <span className="ws-testimonial-mark" aria-hidden="true">
                      {item.mark}
                    </span>
                    <span className="ws-testimonial-meta">
                      <span className="ws-testimonial-name">{item.name}</span>
                      <span className="ws-testimonial-biz">{item.business}</span>
                    </span>
                    <span className="ws-testimonial-open">{copy.visit}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ws-s" aria-labelledby="faq-heading">
        <div className="container ws-faq-grid">
          <div>
            <p className="ws-eyebrow">{copy.faqEyebrow}</p>
            <h2 id="faq-heading" className="ws-disp">
              {copy.faqHeading}
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
            <p className="ws-eyebrow">{copy.quoteEyebrow}</p>
            <h2 id="quote-heading" className="ws-disp">
              {copy.quoteHeading}
            </h2>
            <p className="ws-lede">{copy.quoteLede}</p>
            <ul className="ws-direct">
              <li>
                <a href="mailto:info@alexcuriel.com">
                  <span>
                    <small>{copy.emailLabel}</small>
                    info@alexcuriel.com
                  </span>
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a href="tel:+16197928464">
                  <span>
                    <small>{copy.callLabel}</small>
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
            copy={copy.form}
          />
        </div>
      </section>
    </div>
  );
};

export default Websites;
