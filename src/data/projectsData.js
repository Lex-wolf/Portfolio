import project1 from "../assets/weather.jpeg";
import project2 from "../assets/todo.png";
import project3 from "../assets/profile2.png";
import ftp2Image from "../assets/FTP2.png";
import project6 from "../assets/geobrasil.png";
import PizzaBar from "../assets/PizzaBar.png";
import RoseAuto from "../assets/roseauto.png";
import ecWebsite from "../assets/ec-website.png";
import ecApp from "../assets/ec-app.png";
import thomasRApp from "../assets/thomasr-app.png";
import brandiWebsite from "../assets/brandi-c-website.png";
import aceParkingApp from "../assets/aceparking-app.png";
import prideStudy from "../assets/pridestudy.png";
import ecForums from "../assets/ec-forums.png";
import pjWebsite from "../assets/pj-website.jpg";
import thomasRWebsite from "../assets/thomasr-website.png";
import toTheStars from "../assets/to-the-stars-website.png";
import astroReminder from "../assets/astro.png";
import chicanaImage from "../assets/chicana2.png";
import tacoGarage from "../assets/taco-garage.png";
import aspire1 from "../assets/aspire-1.png";
import aspire2 from "../assets/aspire-2.png";
import aspire3 from "../assets/aspire-3.png";
import aspire4 from "../assets/aspire-4.png";
import obagi1 from "../assets/obagi-1.png";
import obagi2 from "../assets/obagi-2.png";
import obagi3 from "../assets/obagi-3.png";
import obagi4 from "../assets/obagi-4.png";
import obagi5 from "../assets/obagi-5.png";
import obagi6 from "../assets/obagi-6.png";
import ourRescueWebsite from "../assets/ourrescue-website.png";

// Updated: Local Artist Website now uses chicana2.png
export const projects = [
  // Frontend Projects
  {
    id: 23,
    title: "Neuroplasticity Lab",
    category: "built",
    description: "A one-day experimental build exploring neuroplasticity through interactive design and immersive UI.",
    about: "A one-day experimental build exploring neuroplasticity through interactive design and immersive UI. The project focuses on clean typography, animated sections, and a modern dark interface inspired by scientific storytelling.",
    build: "Built in a focused one-day sprint. Designed and developed from scratch to explore interactive storytelling and scientific concepts through modern frontend tools.",
    technologies: ["HTML", "CSS", "JavaScript", "Canvas API", "Vercel"],
    image: "https://placehold.co/800x450/111118/c8f0a0?text=Neuroplasticity+Lab",
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
    about: "Built my own portfolio from scratch to showcase projects, skills, and a bit of personality. Designed to be clean, simple, and easy to navigate—because first impressions matter. Powered by React, styled with Bootstrap, and optimized with Vite for a snappy dev experience.",
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
    about: "A simple but powerful productivity app to help users stay on top of their tasks. You can add, edit, delete, and prioritize to-dos with ease. Designed with a clean UI and smooth functionality that works well across devices—because getting things done shouldn't feel like a chore.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    image: project2,
    website: "https://todo-rho-ruby.vercel.app",
  },

  // QA Projects
  {
    id: 9,
    title: "Pearl Jam Official Website",
    category: "qa",
    description: "Website QA across CMS, multi-device, and release cycles",
    about:
      "Pearl Jam's site runs at serious scale. 750K+ users, multiple release cycles a year. I handled functional and regression testing, cross-browser coverage, CMS publishing workflows and Shopify payment validation. Every tour update and announcement had to go out clean.",
    technologies: ["Manual Testing", "Regression Testing", "Cross-browser Testing", "API Testing", "CMS Validation"],
    image: pjWebsite,
    website: "https://pearljam.com/",
    tagline: "Website QA across CMS, multi-device, and release cycles",
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
    description: "Cross-browser and multi-device website QA",
    about:
      "Frequent content releases across a lot of devices and browsers. I ran functional, regression and exploratory testing to keep the platform consistent for fans no matter how they were accessing it.",
    technologies: ["Manual Testing", "Regression Testing", "Cross-browser Testing", "Jira", "CMS Validation"],
    image: ecWebsite,
    website: "https://www.ericchurch.com/",
    tagline: "Cross-browser and multi-device website QA",
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
    description: "iOS and Android app testing for seamless experience",
    about: "iOS and Android QA for the official app. I automated login and UGC flow tests using Playwright which cut down QA cycle time and kept production releases stable.",
    technologies: ["iOS", "Android", "Functional Testing"],
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
    description: "Responsive, performance, and cross-browser website QA",
    about:
      "Tablet and mobile responsiveness were the main focus here, along with Laravel CMS validation. The QA work tied directly to a 26% usability improvement across the platform.",
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
    tagline: "Responsive, performance, and cross-browser website QA",
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
    description: "Mobile app QA across iOS and Android builds",
    about:
      "Tablet and mobile responsiveness were the main focus here, along with Laravel CMS validation. The QA work tied directly to a 26% usability improvement across the platform.",
    technologies: [
      "Manual Testing",
      "Regression Testing",
      "Mobile Testing",
      "API Validation",
      "Jira"
    ],
    image: thomasRApp,
    website: "https://apps.apple.com/us/app/thomas-rhetts-home-team-app/id1275224693",
    tagline: "Mobile app QA across iOS and Android builds",
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
    description: "Cross-browser QA and multi-device optimization",
    about:
      "Frontend and CMS testing across devices for a site doing 70K+ visits a month. Focused on accessibility and making sure the experience held up consistently across browsers and screen sizes.",
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
    tagline: "Cross-browser QA and multi-device optimization",
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
    description: "Mobile QA focused on transaction reliability and UI accuracy",
    about:
      "I worked on QA for the ACE Parking app across several release cycles. The main focus was keeping reservations, payments, and map results reliable while people used the app in real time. I checked reservation flows end to end, validated prices and availability, and made sure the UI stayed clear and predictable on both iOS and Android devices.",
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
    tagline: "Mobile QA focused on transaction reliability and UI accuracy",
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
    description: "Accessibility, questionnaire logic, and data accuracy testing",
    about:
      "I worked on QA for the Pride Study website with a focus on accessibility and clean research data. Most of the effort went into multi-step questionnaires, branching logic, and making sure responses were stored and surfaced correctly in participant views. I balanced front-end usability checks with backend data validation so the study team could trust what they were seeing.",
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
    tagline: "Accessibility, questionnaire logic, and data accuracy testing",
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
