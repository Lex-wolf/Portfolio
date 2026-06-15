import project1 from "../assets/weather.webp";
import project2 from "../assets/todo.webp";
import project3 from "../assets/profile2.webp";
import ftp2Image from "../assets/FTP2.webp";
import project6 from "../assets/geobrasil.webp";
import PizzaBar from "../assets/PizzaBar.webp";
import RoseAuto from "../assets/roseauto.webp";
import ecWebsite from "../assets/ec-website.webp";
import ecApp from "../assets/ec-app.webp";
import thomasRApp from "../assets/thomasr-app.webp";
import brandiWebsite from "../assets/brandi-c-website.webp";
import aceParkingApp from "../assets/aceparking-app.webp";
import prideStudy from "../assets/pridestudy.webp";
import ecForums from "../assets/ec-forums.webp";
import pjWebsite from "../assets/pj-website.webp";
import thomasRWebsite from "../assets/thomasr-website.webp";
import toTheStars from "../assets/to-the-stars-website.webp";
import astroReminder from "../assets/astro.webp";
import chicanaImage from "../assets/chicana2.webp";
import tacoGarage from "../assets/taco-garage.webp";
import aspire1 from "../assets/aspire-1.webp";
import aspire2 from "../assets/aspire-2.webp";
import aspire3 from "../assets/aspire-3.webp";
import aspire4 from "../assets/aspire-4.webp";
import obagi1 from "../assets/obagi-1.webp";
import obagi2 from "../assets/obagi-2.webp";
import obagi3 from "../assets/obagi-3.webp";
import obagi4 from "../assets/obagi-4.webp";
import obagi5 from "../assets/obagi-5.webp";
import obagi6 from "../assets/obagi-6.webp";
import ourRescueWebsite from "../assets/ourrescue-website.webp";
import goldEvents from "../assets/gold-events.webp";
import neuroplasticityLab from "../assets/neuroplasticity-lab.webp";
import axeThroCo from "../assets/axe-throco.webp";

// Updated: Local Artist Website now uses chicana2.png
export const projects = [
  // Frontend Projects
  {
    id: 26,
    title: "Axe Thro Co",
    category: "built",
    description: "Full-site remake of San Diego's axe throwing venue — bold, fast, and built to convert.",
    about:
      "Axe Thro Co needed a site that matched the energy of the venue: high-impact visuals, clear booking paths, and mobile-first performance. I rebuilt the full marketing site from scratch in Next.js with Tailwind CSS v4 — static export on Cloudflare Pages, GA4 conversion tracking on every Book Now CTA, and a Resend-powered contact form via Cloudflare Pages Functions. Twelve lanes, group bookings, pizza bar, and midnight hours — all surfaced in a design that feels as sharp as the axes.",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Cloudflare Pages",
      "Resend",
      "GA4",
    ],
    image: axeThroCo,
    website: "https://www.axethroco.com/",
  },
  {
    id: 25,
    title: "GOLD Events",
    category: "built",
    description: "The client had a locked Wix site with no real data layer.",
    about:
      "The client had a locked Wix site with no real data layer. I rebuilt it from scratch in React and Vite, replaced Wix entirely with a Supabase backend — 7 form flows each feeding their own database table — and built a custom admin dashboard so the client owns and manages all their data directly. Includes Clerk auth on the admin route, a staging-to-production deployment workflow, and a brand-consistent luxury design across 15+ pages.",
    technologies: [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Clerk",
      "Resend",
      "Vercel",
      "React Router",
    ],
    image: goldEvents,
    website: "https://www.goldevents.gold",
  },
  {
    id: 23,
    title: "Neuroplasticity Lab",
    category: "built",
    description: "A one-day experimental build exploring neuroplasticity through interactive design and immersive UI.",
    about: "A one-day experimental build exploring neuroplasticity through interactive design and immersive UI. The project focuses on clean typography, animated sections, and a modern dark interface inspired by scientific storytelling.",
    build: "Built in a focused one-day sprint. Designed and developed from scratch to explore interactive storytelling and scientific concepts through modern frontend tools.",
    technologies: ["HTML", "CSS", "JavaScript", "Canvas API", "Vercel"],
    image: neuroplasticityLab,
    website: "https://neuroplasticity.vercel.app/#types",
  },
  {
    id: 20,
    title: "The Taco Garage",
    category: "built",
    description: "Custom headless e-commerce built with React + Shopify",
    about: "The Taco Garage wanted a custom storefront without giving up Shopify's checkout reliability. I built a React frontend on top of the Shopify Storefront API so they got full design control and kept the backend they trusted. Built for speed, easy product management, and long term growth.",
    technologies: ["React", "JavaScript", "Shopify Storefront API", "Vercel", "Tailwind CSS", "Node.js"],
    image: tacoGarage,
    website: "https://www.thetacogarage.com",
  },
  {
    id: 19,
    title: "Astro Reminder Website",
    category: "built",
    description: "Astrology & Coaching Platform",
    about: "Carlos runs an astrology and coaching practice and needed a site that felt intentional, not generic. I built it in React with Framer Motion, keeping the layout clean and the animations subtle. Accessible, responsive, and easy to navigate across all devices.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Framer Motion", "HTML", "CSS"],
    image: astroReminder,
    website: "https://astroreminder.com/",
  },
  {
    id: 1,
    title: "Rose Auto Service",
    category: "built",
    description: "BMW, Audi, Mercedes, and Volkswagen specialist website",
    about: "70 years in business with no real web presence. I built a responsive React site that showcases their services, testimonials and location clearly. Clean, professional, mobile first. Gives them a front door that matches the quality of their work.",
    technologies: ["React", "Tailwind CSS", "Vite", "JavaScript", "SEO", "GoDaddy", "Vercel"],
    image: RoseAuto,
    website: "https://www.roseautoservice.com",
  },
  {
    id: 2,
    title: "Axe Thro Co's Pizza Bar",
    category: "built",
    description: "Bold landing page for wood-fired pizzas and axe throwing",
    about: "Bold concept, needed a bold site. I built a fast landing page in WordPress and Elementor that captures the energy of the place. Their team can update content without touching code.",
    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "Elementor"],
    image: PizzaBar,
    website: "https://axethroco.com/pizza-bar/",
  },
  {
    id: 3,
    title: "Nonprofit Tree Planting Community",
    category: "built",
    description: "Community platform for fruit tree planting in San Diego",
    about: "FTPP plants fruit trees to strengthen communities in San Diego. I built their React site to help spread the mission, bring in volunteers and drive donations. One of those projects where the work felt like it actually mattered.",
    technologies: ["HTML", "CSS", "React.js", "JavaScript"],
    image: ftp2Image,
    website: "https://ftpp.support/",
  },
  {
    id: 4,
    title: "Geodesic Brasil Website",
    category: "built",
    description: "Sustainable geodesic architecture platform for Brazil",
    about: "Inspired by the beauty of geodesic architecture, this platform showcases sustainable design tailored for Brazilian landscapes. I focused on balancing visuals with performance, using React, Vite, and Node.js to build a fast, flexible site with structure as unique as the subject matter.",
    technologies: ["HTML", "CSS", "React.js", "JavaScript", "Vite", "Node.js", "TypeScript"],
    image: project6,
    website: "https://www.geodesicbrasil.com/",
  },
  {
    id: 5,
    title: "Local Artist Website",
    category: "built",
    description: "Chicana-inspired artist portfolio and cultural storytelling",
    about: "Collaborated with a local artist to bring her Chicana-inspired work to life online. The site blends earthy visuals, cultural storytelling, and a nature-forward aesthetic. I used React, Tailwind, and Node.js to build a fast, flexible platform that showcases her portfolio while staying true to her creative voice.",
    technologies: ["HTML", "Tailwind CSS", "React.js", "JavaScript", "Vite", "Node.js"],
    image: chicanaImage,
    website: "https://chicanahummingbird.com/",
  },
  {
    id: 6,
    title: "Portfolio Website",
    category: "built",
    description: "Personal portfolio showcasing projects and skills",
    about: "Built my own portfolio from scratch to showcase projects, skills, and a bit of personality. Designed to be clean, simple, and easy to navigate because first impressions matter. Powered by React, styled with Bootstrap, and optimized with Vite for a snappy dev experience.",
    technologies: ["HTML", "CSS", "React.js", "Bootstrap", "Vite"],
    image: project3,
    website: "https://alexcuriel.com/",
  },
  {
    id: 7,
    title: "Weather App",
    category: "built",
    description: "Real-time weather updates with responsive design",
    about: "Created a responsive weather app with real-time updates using React and Node.js. Users can check current conditions, forecasts, and temperatures anywhere in the world. Clean design, intuitive UX, and a touch of JavaScript magic to keep it all running smoothly.",
    technologies: ["HTML", "CSS", "Node.js"],
    image: project1,
    website: "https://weather-app-one-rho-19.vercel.app",
  },
  {
    id: 8,
    title: "To Do App",
    category: "built",
    description: "Productivity app for task management",
    about: "A simple but powerful productivity app to help users stay on top of their tasks. You can add, edit, delete, and prioritize to-dos with ease. Designed with a clean UI and smooth functionality that works well across devices because getting things done shouldn't feel like a chore.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    image: project2,
    website: "https://todo-rho-ruby.vercel.app",
  },

  // QA Projects
  {
    id: 9,
    title: "Pearl Jam Official Website",
    category: "qa",
    description:
      "QA lead for a high-traffic artist platform with 750K+ users. Covered CMS workflows, multi-device regression, and Shopify payment flows across iOS, Android, and web.",
    about:
      "QA lead for a high-traffic artist platform with 750K+ users. Covered CMS workflows, multi-device regression, and Shopify payment flows across iOS, Android, and web.",
    technologies: ["Manual Testing", "Regression Testing", "Cross-browser Testing", "API Testing", "CMS Validation"],
    image: pjWebsite,
    website: "https://pearljam.com/",
    tagline:
      "QA lead for a high-traffic artist platform with 750K+ users. Covered CMS workflows, multi-device regression, and Shopify payment flows across iOS, Android, and web.",
    testingFocus: [
      "Functional and regression testing",
      "Cross-browser coverage (Chrome, Safari, Firefox, Edge)",
      "CMS publishing and content workflows",
      "Media and gallery rendering",
      "Tour dates and other dynamic content checks",
      "Navigation and responsive layout behavior",
      "Desktop and mobile breakpoint validation",
      "API response and error handling",
      "Front-end and back-end data consistency",
      "Light performance checks around traffic spikes"
    ],
    platforms: "Web across desktop and mobile browsers.",
    devices:
      "Mac and Windows laptops plus iPhone and Android phones, covering common screen sizes and responsive breakpoints.",
  },
  {
    id: 10,
    title: "Eric Church Website",
    category: "qa",
    description:
      "Mobile QA alongside frequent CMS and content releases. Validated layouts, links, and media across browsers and devices.",
    about:
      "Mobile QA alongside frequent CMS and content releases. Validated layouts, links, and media across browsers and devices.",
    technologies: ["Manual Testing", "Regression Testing", "Cross-browser Testing", "Jira", "CMS Validation"],
    image: ecWebsite,
    website: "https://www.ericchurch.com/",
    tagline:
      "Mobile QA alongside frequent CMS and content releases. Validated layouts, links, and media across browsers and devices.",
    testingFocus: [
      "Functional and regression testing",
      "Cross-browser checks across Chrome, Safari, Firefox, and Edge",
      "Responsive layout validation at key breakpoints",
      "CMS publishing and content accuracy",
      "Tour dates and other dynamic sections",
      "Navigation and menu interactions",
      "Media and embedded content rendering",
      "Login and account-related flows",
      "Front-end and back-end data consistency",
      "Light performance checks during busy traffic"
    ],
    browsers:
      "Chrome, Safari, Firefox, and Edge on both desktop and mobile, focused on current versions in use during each release cycle.",
    platforms: "Web on desktop and mobile browsers.",
    devices:
      "Mac and Windows laptops, plus iPhone Safari and Android Chrome across common screen sizes and breakpoints.",
  },
  {
    id: 11,
    title: "Eric Church Official App",
    category: "qa",
    description:
      "iOS and Android testing across builds delivered via TestFlight. Validated push notifications, in-app purchases, and tour date integrations across OS versions.",
    about:
      "iOS and Android testing across builds delivered via TestFlight. Validated push notifications, in-app purchases, and tour date integrations across OS versions.",
    technologies: ["iOS", "Android", "Functional Testing", "Playwright", "TestFlight"],
    image: ecApp,
    website: "https://apps.apple.com/us/app/eric-church-official/id1436492159",
    links: [
      {
        label: "View on App Store",
        href: "https://apps.apple.com/us/app/eric-church-official/id1436492159",
        primary: true
      },
      {
        label: "View on Google Play",
        href: "https://play.google.com/store/apps/details?id=com.EricChurch.App&hl=en_US",
        primary: false
      }
    ]
  },
  {
    id: 12,
    title: "Thomas Rhett Website",
    category: "qa",
    description:
      "Mobile and tablet responsiveness testing across iOS and Android. Laravel CMS QA. Achieved 26% measured usability improvement.",
    about:
      "Mobile and tablet responsiveness testing across iOS and Android. Laravel CMS QA. Achieved 26% measured usability improvement.",
    technologies: [
      "Manual Testing",
      "Regression Testing",
      "Cross-browser Testing",
      "Responsive Testing",
      "Performance Validation",
      "Jira",
      "CMS Validation"
    ],
    image: thomasRWebsite,
    website: "https://www.thomasrhett.com/#/",
    tagline:
      "Mobile and tablet responsiveness testing across iOS and Android. Laravel CMS QA. Achieved 26% measured usability improvement.",
    testingFocus: [
      "Functional and regression testing",
      "Cross-browser checks across Chrome, Safari, Firefox, and Edge",
      "Responsive layout validation for key breakpoints",
      "Performance and basic load time checks",
      "E-commerce cart and checkout flows",
      "Product and merch page rendering",
      "Tour dates and other dynamic sections",
      "CMS publishing and content accuracy",
      "Media and embedded content behavior",
      "Front-end and back-end data consistency"
    ],
    browsers:
      "Chrome, Safari, Firefox, and Edge on desktop and mobile, focused on supported versions during each release.",
    platforms: "Web on desktop and mobile browsers.",
    devices:
      "Mac and Windows laptops, plus iPhone Safari and Android Chrome across common screen sizes and responsive breakpoints.",
  },
  {
    id: 13,
    title: "Thomas Rhett Home Team App",
    category: "qa",
    description:
      "Native app QA on iOS and Android via TestFlight and Play Store builds. Validated notifications, member flows, and content updates.",
    about:
      "Native app QA on iOS and Android via TestFlight and Play Store builds. Validated notifications, member flows, and content updates.",
    technologies: [
      "Manual Testing",
      "Regression Testing",
      "Mobile Testing",
      "API Validation",
      "Jira"
    ],
    image: thomasRApp,
    website: "https://apps.apple.com/us/app/thomas-rhetts-home-team-app/id1275224693",
    tagline:
      "Native app QA on iOS and Android via TestFlight and Play Store builds. Validated notifications, member flows, and content updates.",
    testingFocus: [
      "Build validation and smoke checks",
      "Regression passes between releases",
      "Login and authentication flows",
      "Push notification delivery and deep links",
      "Fan engagement and community features",
      "Content feed and dynamic modules",
      "Media playback and in-app viewing",
      "Navigation and tab behavior",
      "API response and error handling",
      "Store build and release verification",
      "Basic performance checks on real devices"
    ],
    platforms: "Native mobile apps on iOS and Android.",
    devices:
      "Tested on multiple iPhone generations and popular Android devices like Samsung and Pixel, across common screen sizes and OS versions.",
    links: [
      {
        label: "View on App Store",
        href: "https://apps.apple.com/us/app/thomas-rhetts-home-team-app/id1275224693",
        primary: true
      },
      {
        label: "View on Google Play",
        href: "https://play.google.com/store/apps/details?id=com.cmafest.htfc&hl=en_US",
        primary: false
      }
    ]
  },
  {
    id: 14,
    title: "Brandi Carlile Website",
    category: "qa",
    description:
      "Frontend and CMS testing across devices supporting 70K+ monthly visits. Ran accessibility audits against WCAG 2.1 using axe-core and VoiceOver.",
    about:
      "Frontend and CMS testing across devices supporting 70K+ monthly visits. Ran accessibility audits against WCAG 2.1 using axe-core and VoiceOver.",
    technologies: [
      "Manual Testing",
      "Regression Testing",
      "Cross-browser Testing",
      "Responsive Testing",
      "CMS Validation",
      "Jira"
    ],
    image: brandiWebsite,
    website: "https://www.brandicarlile.com/",
    tagline:
      "Frontend and CMS testing across devices supporting 70K+ monthly visits. Ran accessibility audits against WCAG 2.1 using axe-core and VoiceOver.",
    testingFocus: [
      "Functional and regression testing",
      "Cross-browser checks across Chrome, Safari, Firefox, and Edge",
      "Responsive layout validation on key breakpoints",
      "CMS publishing and content workflows",
      "Tour and event data verification",
      "Media and embedded content rendering",
      "E-commerce and shop flows",
      "Navigation and menu behavior",
      "Front-end and back-end data consistency",
      "Performance and basic load time checks",
      "Bug reproduction and validation of fixes"
    ],
    browsers:
      "Chrome, Safari, Firefox, and Edge on desktop and mobile, focused on the supported versions in use during each release.",
    platforms: "Web across desktop and mobile browsers.",
    devices:
      "Mac and Windows environments plus iPhone Safari and Android Chrome, covering common screen sizes and responsive breakpoints.",
  },
  {
    id: 15,
    title: "ACE Parking App",
    category: "qa",
    description:
      "Mobile QA focused on transaction reliability and UX accuracy across iOS and Android.",
    about:
      "Mobile QA focused on transaction reliability and UX accuracy across iOS and Android.",
    technologies: [
      "Manual Testing",
      "Regression Testing",
      "Mobile Testing",
      "Functional Testing",
      "API Validation",
      "Jira"
    ],
    image: aceParkingApp,
    website: "https://www.aceparking.com/",
    tagline:
      "Mobile QA focused on transaction reliability and UX accuracy across iOS and Android.",
    testingFocus: [
      "Build validation and smoke checks",
      "Regression testing across release cycles",
      "Reservation and booking flows",
      "Payment processing and receipt validation",
      "Map rendering and geolocation accuracy",
      "Pricing and availability consistency",
      "Login and account management flows",
      "API response and error handling",
      "UI alignment and layout consistency",
      "Store build and release verification",
      "Performance checks on real devices"
    ],
    platforms: "Native mobile apps on iOS and Android.",
    devices:
      "Covered multiple iPhone generations and common Android devices such as Samsung and Pixel, across different screen sizes and OS versions.",
    links: [
      {
        label: "View on App Store",
        href: "https://apps.apple.com/us/app/ace-parking/id1119274201",
        primary: true
      },
      {
        label: "View on Google Play",
        href: "https://play.google.com/store/apps/details?id=com.ace.aceparking",
        primary: false
      }
    ]
  },
  {
    id: 16,
    title: "Pride Study Website",
    category: "qa",
    description:
      "Accessibility, questionnaire logic, and data accuracy testing. Verified screen reader compatibility and form validation flows.",
    about:
      "Accessibility, questionnaire logic, and data accuracy testing. Verified screen reader compatibility and form validation flows.",
    technologies: [
      "Manual Testing",
      "Regression Testing",
      "Accessibility Testing",
      "Cross-browser Testing",
      "CMS Validation",
      "API Validation",
      "Jira"
    ],
    image: prideStudy,
    website: "https://play.google.com/store/apps/details?id=com.cliniv.perampanel&hl=en_US",
    tagline:
      "Accessibility, questionnaire logic, and data accuracy testing. Verified screen reader compatibility and form validation flows.",
    testingFocus: [
      "Functional and regression testing",
      "Accessibility validation for key user flows",
      "Multi-step questionnaire and survey logic",
      "Conditional branching and skip logic checks",
      "Profile and participant view accuracy",
      "Form validation, errors, and edge cases",
      "CMS content updates and copy changes",
      "Backend data storage and record verification",
      "Cross-browser behavior and rendering",
      "Responsive layout checks across screen sizes",
      "API response and error handling validation",
      "Data consistency between UI and underlying data"
    ],
    browsers:
      "Chrome, Safari, Firefox, and Edge on desktop and mobile, focused on the supported versions used during testing.",
    platforms: "Web on both desktop and mobile browsers.",
    devices:
      "Mac and Windows environments plus iPhone Safari and Android Chrome across common screen sizes and breakpoints.",
  },
  {
    id: 21,
    title: "Obagi Events",
    category: "qa",
    description: "Enterprise event app QA across iOS and iPad builds",
    about:
      "I worked on Obagi Events for about 7–8 years as part of the QA team. Most builds shipped ahead of live events, so the app had to stay stable while people were on-site. I focused on schedules, speakers, login, navigation, alerts, and making sure each screen showed the right content at the right time.",
    technologies: ["Manual QA", "Regression Testing", "Functional Testing", "API Testing", "iOS", "iPad"],
    image: obagi2,
    website: "https://apps.apple.com/us/app/obagi-events/id1613723546",
    tagline: "Enterprise event app QA across iOS and iPad builds",
    testingFocus: [
      "Build validation before event launches",
      "Regression passes between event cycles",
      "Agenda and scheduling rules",
      "Timezone handling and event start times",
      "Speaker profiles and image rendering",
      "Side navigation and deep links",
      "Search and filter behavior",
      "Maps and venue modules",
      "Social and engagement features",
      "Push notification delivery and routing",
      "iPad layout and split view checks",
      "API response and error handling",
      "Store submission and review verification"
    ],
    platforms: "iOS on iPhone and iPad, tested across several major iOS versions over the years.",
    devices:
      "Covered multiple iPhone generations and iPad models with different screen sizes and orientations.",
    links: [
      {
        label: "View on App Store",
        href: "https://apps.apple.com/us/app/obagi-events/id1613723546",
        primary: true
      },
      {
        label: "View on Google Play",
        href: "https://play.google.com/store/apps/details?id=com.app.karetreat&pcampaignid=web_share",
        primary: false
      }
    ],
    gallery: [obagi2, obagi3, obagi4]
  },
  {
    id: 24,
    title: "ASPIRE Galderma Rewards",
    category: "qa",
    description: "Mobile QA across iOS and Android builds",
    about:
      "Long term QA support over 4–5 years for Galderma’s ASPIRE rewards app. Tested frequent builds, kept wallet balances and offers accurate, and made sure the UI stayed clean and predictable as features evolved.",
    technologies: ["Manual QA", "Regression Testing", "Functional Testing", "API Testing", "iOS", "Android"],
    image: aspire1,
    website: "https://apps.apple.com/us/app/aspire-galderma-rewards/id1501759750",
    tagline: "Mobile QA across iOS and Android builds",
    testingFocus: [
      "Build validation and smoke checks",
      "Regression coverage for monthly releases",
      "Payment, wallet, and rewards flows",
      "Points earning and redemption logic",
      "Provider search and location accuracy",
      "Gallery upload and image handling",
      "Gift certificate purchase and redemption",
      "API response and error handling validation",
      "UI alignment and layout checks",
      "Store build and release verification"
    ],
    platforms: "iOS and Android, across multiple OS versions over 4+ years.",
    devices:
      "Tested on iPhone generations and popular Android devices (Samsung, Pixel) across different screen sizes and OS versions.",
    links: [
      {
        label: "View on App Store",
        href: "https://apps.apple.com/us/app/aspire-galderma-rewards/id1501759750",
        primary: true
      },
      {
        label: "View on Google Play",
        href: "https://play.google.com/store/apps/details?id=com.galderma.aspirerewards&hl=en_US",
        primary: false
      }
    ],
    gallery: [aspire1, aspire2, aspire3, aspire4]
  },
  {
    id: 17,
    title: "Eric Church Forums",
    category: "qa",
    description: "Community platform QA across functionality, performance, and integration",
    about:
      "I handled QA for the Eric Church community forums through multiple updates and fan cycles. My work covered threads, posting, moderation tools, and search so fans could use the platform without friction. I also validated CMS-driven content, checked that integrations behaved as expected, and kept an eye on performance when tours or big announcements pushed traffic up.",
    technologies: [
      "Manual Testing",
      "Functional Testing",
      "Regression Testing",
      "Performance Testing",
      "Usability Testing",
      "Compatibility Testing",
      "CMS Validation",
      "API Validation",
      "Jira"
    ],
    image: ecForums,
    website: "https://ericchurch.topfan.com/forums",
    tagline: "Community platform QA across functionality, performance, and integration",
    testingFocus: [
      "Smoke checks before smaller releases",
      "Deeper functional and regression passes for major updates",
      "Thread creation, replies, and editing flows",
      "Roles, permissions, and moderation tools",
      "Search and filter accuracy for posts and topics",
      "Pagination and lazy loading behavior",
      "Performance and load time checks during busy periods",
      "Cross-browser and cross-device behavior",
      "CMS publishing and content verification",
      "API response and error handling validation"
    ],
    testingMethodologies:
      "Primarily black box testing for user-facing flows, with targeted white box and integration checks when backend behavior or service wiring needed validation, plus system-level validation before production releases.",
    browsers:
      "Chrome, Safari, Firefox, and Edge on desktop and mobile, focusing on the supported versions active during each release cycle.",
    platforms: "Web on desktop and mobile browsers.",
    devices:
      "Mac and Windows environments plus iPhone Safari and Android Chrome, across common screen sizes and responsive breakpoints.",
  },
  {
    id: 18,
    title: "To The Stars Website",
    category: "qa",
    description: "Navigation, responsive layout, and e-commerce QA",
    about:
      "I worked on QA for the To The Stars site across multiple releases, helping keep navigation smooth and layouts consistent while new products and content rolled out. Most of the focus was on menus, responsive behavior, and store flows, plus checking that CMS updates for drops, news, and project pages rendered correctly on the front end.",
    technologies: [
      "Manual Testing",
      "Regression Testing",
      "Cross-browser Testing",
      "Responsive Testing",
      "E-commerce Validation",
      "CMS Validation",
      "API Validation",
      "Jira"
    ],
    image: toTheStars,
    website: "https://tothestars.media/",
    tagline: "Navigation, responsive layout, and e-commerce QA",
    testingFocus: [
      "Functional and regression testing",
      "Cross-browser checks across Chrome, Safari, Firefox, and Edge",
      "Responsive layout validation across key breakpoints",
      "Navigation and menu flow checks",
      "Cart and checkout e-commerce flows",
      "Product and merch page rendering",
      "CMS publishing and content verification",
      "Front-end and backend data consistency",
      "Performance and basic load time checks",
      "Compatibility behavior across devices",
      "API response and error handling validation"
    ],
    browsers:
      "Chrome, Safari, Firefox, and Edge on desktop and mobile, focused on the supported versions in use during testing.",
    platforms: "Web on both desktop and mobile browsers.",
    devices:
      "Mac and Windows environments plus iPhone Safari and Android Chrome across common screen sizes and responsive breakpoints.",
  },
  {
    id: 22,
    title: "Our Rescue Website",
    category: "qa",
    description: "Educational platform QA and questionnaire validation",
    about:
      "I worked on QA for the Our Rescue website between 2018 and 2020. The focus was on educational content flows and the multi-step questionnaires that sat on top of them. I checked dynamic content tied to awareness campaigns, validated form logic end to end, and made sure data was processed and surfaced consistently across the platform.",
    technologies: [
      "Manual Testing",
      "Regression Testing",
      "Accessibility Testing",
      "Cross-browser Testing",
      "Responsive Testing",
      "CMS Validation",
      "API Validation",
      "Jira"
    ],
    image: ourRescueWebsite,
    website: "https://ourrescue.org/",
    tagline: "Educational platform QA and questionnaire validation",
    testingFocus: [
      "Functional and regression testing",
      "Cross-browser checks across Chrome, Safari, Firefox, and Edge",
      "Responsive layout validation on key breakpoints",
      "Multi-step questionnaire and form flows",
      "Conditional branching and error handling",
      "CMS publishing and content verification",
      "Backend data storage and record checks",
      "API response and error handling validation",
      "Data consistency between front-end views and stored records",
      "Basic accessibility checks on core flows"
    ],
    browsers:
      "Chrome, Safari, Firefox, and Edge on desktop and mobile, focused on the supported versions in use during the 2018–2020 testing period.",
    platforms: "Web on both desktop and mobile browsers.",
    devices:
      "Mac and Windows environments plus iPhone Safari and Android Chrome across common screen sizes and responsive breakpoints.",
  },
];
