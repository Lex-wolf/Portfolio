import project1 from "../assets/weather.jpeg";
import project2 from "../assets/todo.png";
import project3 from "../assets/profile2.png";
import ftp2Image from "../assets/FTP2.png";
import chicanaImage from "../assets/chicana2.png";
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
import tacoGarage from "../assets/taco-garage.png";





export const HERO_CONTENT = `
I work at the intersection of quality and creation.

With over 10 years in QA, I naturally approach development by asking one question: does this actually work for the people using it?

I test systems, refine experiences, and build interfaces that feel stable, thoughtful, and easy to use. My background in QA shaped how I develop today. I look for edge cases, question assumptions, and help turn complex ideas into reliable products.

Most of my work lives between testing and building. I collaborate with teams, support growing platforms, and create web experiences that are both functional and human.

Feel free to scroll down and explore the projects I’m currently working on, or tap the button below if you’d like to connect and create something new together.
`;


export const ABOUT_TEXT = `
I've spent 10 years breaking things so users don't have to. Mostly on mobile. I've tested platform releases for Pearl Jam, Eric Church, Thomas Rhett, and Brandi Carlile - sometimes with 750K+ users hitting at once.

On the automation side, I write Playwright test suites, use Postman for API testing, and wire everything into CI/CD via GitHub Actions.

I specialize in iOS and Android manual testing, WCAG 2.1/2.2 accessibility compliance, UI/UX validation, and CMS cross testing. I'm CPACC certified - meaning I've passed a formal exam on WCAG standards, not just run Lighthouse reports.

I work in English, Spanish, and Portuguese. I'm used to environments where releases happen weekly and QA is the last gate before users see it.

Available for remote contractor roles worldwide.
`;


export const EXPERIENCES = [
  {
    year: "2024 – Present",
    role: "Software Engineering Consultant",
    company: "Bison Digital · Freelance",
    description: `
      Provide consulting support on web applications, improving system stability, performance, and long-term maintainability.
      Contribute to React-based platforms while reviewing architecture decisions and resolving production-level issues.
      Lead manual and automated QA efforts using Playwright, Postman, SQL data validation, and CI/CD integration via GitHub Actions and Jenkins to ensure reliable production releases.
      Validate iOS builds using simulators and TestFlight, supporting mobile release readiness.
    `,
    technologies: [
      "Manual QA",
      "Playwright",
      "Postman",
      "A11y",
      "axe-core",
      "Lighthouse",
      "Jenkins",
      "GitHubActions",
      "ReactJS",
      "Tailwind",
      "WordPress",
      "Shopify",
      "Vite",
    ],
  },
  
  // {
  //   year: "2019 - 2022",
  //   role: "Data Management Specialist",
  //   company: "Freelance",
  //   description: `
  //     Before diving into code, I worked with private clients to help make sense of messy spreadsheets and scattered data. I used tools like Excel and Google Sheets to organize, clean, and automate large datasets—adding formulas, macros, and a bit of magic to simplify workflows. I helped businesses go from chaos to clarity, making their data easier to access, understand, and use. It wasn’t glamorous, but it taught me structure, logic, and the value of clean systems—all things I now bring to my development work.
  //   `,
  //   technologies: [
  //     "Excel",
  //     "Google Sheets",
  //     "Data Entry",
  //     "Spreadsheet Automation",
  //   ],
  // },
  {
    year: "2017 - 2024",
    role: "Quality Assurance",
    company: "Analog Republic",
    description: `
      Led cross-platform QA across web, iOS, and Android platforms, ensuring stable releases for high-traffic consumer applications. Built and maintained test plans for web, iOS, and Android across concurrent client projects. Managed regression cycles tied to weekly release schedules. Specialized in performance, wireless, and stability testing, and used tools like Jira, Trello, and ClickUp to keep things organized. Basically, if there was a bug—I found it (and logged it like a pro).
    `,
    technologies: ["Jira", "Scrum", "TestRail", "PostMan", "Manual QA", "Regression & Smoke Testing",],
  },
  {
    year: "2016 - 2017",
    role: "Project Manager",
    company: "Analog Republic",
    description: `
     Managed timelines and client communication for music industry partnerships, coordinating between internal dev and external stakeholders. Kept everything moving smoothly from kickoff to delivery, making sure client goals turned into real, actionable plans.
    `,
    technologies: ["Jira", "Scrum", "Trello", "Slack"],
  },
];

export const HIGHLIGHTS = [
  {
    title: "10+",
    description: [
      "Years of Experience",
    ],
  },
  {
    title: "750K+",
    description: [
      "Users Reached",
    ],
  },
  {
    title: "4",
    description: [
      "Major Artist Platforms (Pearl Jam, Eric Church, Thomas Rhett, Brandi Carlile)",
    ],
  },
  {
    title: "CPACC",
    description: [
      "Certified (WCAG standards, formal exam)",
    ],
  },
];

export const PROJECTS = [
  {
    title: "The Taco Garage",
    image: tacoGarage,
    description:
      "Designed a modern headless e-commerce experience for The Taco Garage with a custom React frontend on top of Shopify. The build delivers full design flexibility, variant-aware carts, and fast, SEO-ready performance while keeping Shopify’s reliable checkout.",
    technologies: [
      "React",
      "JavaScript",
      "Shopify Storefront API",
      "Vercel",
      "Tailwind CSS",
      "Node.js",
    ],
    link: "https://www.thetacogarage.com",
  },
  {
    title: "Rose Auto Service",
    image: RoseAuto, // make sure to import this image above
    description:
      "Designed and developed a sleek, responsive website for Rose Auto Service, a BMW, Audi, Mercedes, and Volkswagen specialist in Philadelphia. Built using React and Tailwind CSS to showcase services, testimonials, and location with modern UI and mobile-first design.",
    technologies: ["React", "Tailwind CSS", "Vite", "JavaScript", "SEO", "GoDaddy", "Vercel"],
    link: "https://www.roseautoservice.com",
  }
  ,
  {
    title: "Axe Thro Co's Pizza Bar",
    image: PizzaBar,
    description:
      "Built a bold and modern landing page for Axe Thro Co’s Pizza Bar to capture the vibe of their wood-fired pizzas and laid-back atmosphere. Using WordPress and Elementor, I made it easy for the team to update content while keeping things fast, responsive, and visually sharp across devices. Smooth navigation and high-impact visuals make it as tasty online as their pies in person.",
    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "Elementor"],
    link: "https://axethroco.com/pizza-bar/",
  },
  {
    title: "Nonprofit Tree Planting Community",
    image: ftp2Image,
    description:
      "This project let me combine my dev skills with a cause I care about. FTPP is all about planting fruit trees and building stronger communities in San Diego. I designed and built a clean, accessible site using React to help spread the word and invite people to get involved. It’s simple, clear, and made to grow alongside their mission.",
    technologies: ["HTML", "CSS", "React.js", "JavaScript"],
    link: "https://ftpp.support/",
  },
  {
    title: "Geodesic Brasil Website",
    image: project6,
    description:
      "Inspired by the beauty of geodesic architecture, this platform showcases sustainable design tailored for Brazilian landscapes. I focused on balancing visuals with performance, using React, Vite, and Node.js to build a fast, flexible site with structure as unique as the subject matter. TypeScript kept everything tidy under the hood.",
    technologies: [
      "HTML",
      "CSS",
      "React.js",
      "JavaScript",
      "Vite",
      "Node.js",
      "TypeScript",
    ],
    link: "https://www.geodesicbrasil.com/",
  },
  {
    title: "Local Artist Website",
    image: chicanaImage,
    description:
      " Collaborated with a local artist to bring her Chicana-inspired work to life online. The site blends earthy visuals, cultural storytelling, and a nature-forward aesthetic. I used React, Tailwind, and Node.js to build a fast, flexible platform that showcases her portfolio while staying true to her creative voice.",
    technologies: [
      "HTML",
      "Tailwind CSS",
      "React.js",
      "JavaScript",
      "Vite",
      "Node.js",
    ],
    link: "https://chicanahummingbird.com/",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "Built my own portfolio from scratch to showcase projects, skills, and a bit of personality. Designed to be clean, simple, and easy to navigate—because first impressions matter. Powered by React, styled with Bootstrap, and optimized with Vite for a snappy dev experience.",
    technologies: ["HTML", "CSS", "React.js", "Bootstrap", "Vite"],
    link: "https://alexcuriel.com/",
  },
  {
    title: "Weather App",
    image: project1,
    description:
      "Created a responsive weather app with real-time updates using React and Node.js. Users can check current conditions, forecasts, and temperatures anywhere in the world. Clean design, intuitive UX, and a touch of JavaScript magic to keep it all running smoothly.",
    technologies: ["HTML", "CSS", "Node.js"],
    link: "https://weather-app-one-rho-19.vercel.app",
  },
  {
    title: "To Do App",
    image: project2,
    description:
      "A simple but powerful productivity app to help users stay on top of their tasks. You can add, edit, delete, and prioritize to-dos with ease. Designed with a clean UI and smooth functionality that works well across devices—because getting things done shouldn't feel like a chore.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    link: "https://todo-rho-ruby.vercel.app",
  },
];

export const CONTACT = {
  address: "World Wide Remote",
  phoneNo: "+1 619 - 786 0658 ",
  email: "info@alexcuriel.com",
};

export const QA_PROJECTS = [
  {
    title: "Pearl Jam Official Website",
    image: pjWebsite,
    type: "website",
    description: "Performed extensive QA testing for Pearl Jam's official website, ensuring smooth performance and cross-browser compatibility.",
    technologies: ["Manual Testing", "Regression Testing", "Cross-browser Testing"],
    link: "https://pearljam.com/",
  },
  {
    title: "Eric Church Website",
    image: ecWebsite,
    type: "website",
    description: "QA testing for Eric Church's website, focusing on UI/UX consistency and multi-device functionality.",
    technologies: ["Manual Testing", "Cross-device Testing", "Jira"],
    link: "https://www.ericchurch.com/",
  },
  {
    title: "Eric Church Official App",
    image: ecApp,
    type: "app",
    description: "Tested the Eric Church official app across iOS and Android devices, ensuring a seamless experience.",
    technologies: ["iOS", "Android", "Functional Testing"],
    link: "https://apps.apple.com/us/app/eric-church-official/id1436492159",
  },
  {
    title: "Thomas Rhett Website",
    image: thomasRWebsite,
    type: "website",
    description: "Executed QA testing on Thomas Rhett's website, including responsive design and performance checks.",
    technologies: ["Cross-browser Testing", "Responsive Testing"],
    link: "https://www.thomasrhett.com/#/",
  },
  {
    title: "Thomas Rhett Home Team App",
    image: thomasRApp,
    type: "app",
    description: "Performed mobile QA for Thomas Rhett's Home Team app, ensuring flawless cross-platform performance.",
    technologies: ["iOS", "Android", "Regression Testing"],
    link: "https://apps.apple.com/us/app/thomas-rhetts-home-team-app/id1275224693",
  },
  {
    title: "Brandi Carlile Website",
    image: brandiWebsite,
    type: "website",
    description: "QA-tested Brandi Carlile's official website, focusing on bug fixes and cross-device optimizations.",
    technologies: ["Manual Testing", "Cross-browser Testing"],
    link: "https://www.brandicarlile.com/",
  },
  {
    title: "ACE Parking App",
    image: aceParkingApp,
    type: "app",
    description: "Performed QA on ACE Parking app with a focus on transaction reliability and UI accuracy.",
    technologies: ["iOS", "Android", "Functional Testing"],
    link: "https://www.aceparking.com/",
  },
  {
    title: "Pride Study Website",
    image: prideStudy,
    type: "website",
    description: "Tested the Pride Study platform, ensuring accessibility and data accuracy.",
    technologies: ["Accessibility Testing", "Manual Testing"],
    link: "https://play.google.com/store/apps/details?id=com.cliniv.perampanel&hl=en_US",
  },
  {
    title: "Eric Church Forums",
    image: ecForums,
    type: "website",
    description: "QA-tested the Eric Church forums for functionality, load times, and user experience.",
    technologies: ["Functional Testing", "Performance Testing"],
    link: "https://ericchurch.topfan.com/forums",
  },
  {
    title: "To The Stars Website",
    image: toTheStars,
    type: "website",
    description: "Tested the To The Stars website, ensuring smooth navigation and responsive layout.",
    technologies: ["Cross-browser Testing", "UI Testing"],
    link: "https://tothestars.media/",
  },
];
// Trigger redeploy

