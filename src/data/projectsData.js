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

// Updated: Local Artist Website now uses chicana2.png
export const projects = [
  // Frontend Projects
  {
    id: 19,
    title: "Astro Reminder Website",
    category: "Frontend",
    description: "Astrology & Coaching Platform",
    about: "This project focused on building a calm, intentional digital experience for an astrology and coaching practice. The goal was to clearly present services, philosophy, and consultation offerings while maintaining a sense of clarity, trust, and flow. I built the site using React and Tailwind CSS with a strong emphasis on accessibility, responsive layouts, and smooth motion. Framer Motion was used to subtly guide user attention, creating an experience that feels modern, grounded, and easy to navigate across all devices.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Framer Motion", "HTML", "CSS"],
    image: astroReminder,
    website: "https://astroreminder.com/",
  },
  {
    id: 1,
    title: "Rose Auto Service",
    category: "Frontend",
    description: "BMW, Audi, Mercedes, and Volkswagen specialist website",
    about: "Designed and developed a sleek, responsive website for Rose Auto Service, a BMW, Audi, Mercedes, and Volkswagen specialist in Philadelphia. Built using React and Tailwind CSS to showcase services, testimonials, and location with modern UI and mobile-first design.",
    technologies: ["React", "Tailwind CSS", "Vite", "JavaScript", "SEO", "GoDaddy", "Vercel"],
    image: RoseAuto,
    website: "https://www.roseautoservice.com",
  },
  {
    id: 2,
    title: "Axe Thro Co's Pizza Bar",
    category: "Frontend",
    description: "Bold landing page for wood-fired pizzas and axe throwing",
    about: "Built a bold and modern landing page for Axe Thro Co's Pizza Bar to capture the vibe of their wood-fired pizzas and laid-back atmosphere. Using WordPress and Elementor, I made it easy for the team to update content while keeping things fast, responsive, and visually sharp across devices.",
    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "Elementor"],
    image: PizzaBar,
    website: "https://axethroco.com/pizza-bar/",
  },
  {
    id: 3,
    title: "Nonprofit Tree Planting Community",
    category: "Frontend",
    description: "Community platform for fruit tree planting in San Diego",
    about: "This project let me combine my dev skills with a cause I care about. FTPP is all about planting fruit trees and building stronger communities in San Diego. I designed and built a clean, accessible site using React to help spread the word and invite people to get involved.",
    technologies: ["HTML", "CSS", "React.js", "JavaScript"],
    image: ftp2Image,
    website: "https://ftpp.support/",
  },
  {
    id: 4,
    title: "Geodesic Brasil Website",
    category: "Frontend",
    description: "Sustainable geodesic architecture platform for Brazil",
    about: "Inspired by the beauty of geodesic architecture, this platform showcases sustainable design tailored for Brazilian landscapes. I focused on balancing visuals with performance, using React, Vite, and Node.js to build a fast, flexible site with structure as unique as the subject matter.",
    technologies: ["HTML", "CSS", "React.js", "JavaScript", "Vite", "Node.js", "TypeScript"],
    image: project6,
    website: "https://www.geodesicbrasil.com/",
  },
  {
    id: 5,
    title: "Local Artist Website",
    category: "Frontend",
    description: "Chicana-inspired artist portfolio and cultural storytelling",
    about: "Collaborated with a local artist to bring her Chicana-inspired work to life online. The site blends earthy visuals, cultural storytelling, and a nature-forward aesthetic. I used React, Tailwind, and Node.js to build a fast, flexible platform that showcases her portfolio while staying true to her creative voice.",
    technologies: ["HTML", "Tailwind CSS", "React.js", "JavaScript", "Vite", "Node.js"],
    image: chicanaImage,
    website: "https://chicanahummingbird.com/",
  },
  {
    id: 6,
    title: "Portfolio Website",
    category: "Frontend",
    description: "Personal portfolio showcasing projects and skills",
    about: "Built my own portfolio from scratch to showcase projects, skills, and a bit of personality. Designed to be clean, simple, and easy to navigate—because first impressions matter. Powered by React, styled with Bootstrap, and optimized with Vite for a snappy dev experience.",
    technologies: ["HTML", "CSS", "React.js", "Bootstrap", "Vite"],
    image: project3,
    website: "https://alexcuriel.com/",
  },
  {
    id: 7,
    title: "Weather App",
    category: "Frontend",
    description: "Real-time weather updates with responsive design",
    about: "Created a responsive weather app with real-time updates using React and Node.js. Users can check current conditions, forecasts, and temperatures anywhere in the world. Clean design, intuitive UX, and a touch of JavaScript magic to keep it all running smoothly.",
    technologies: ["HTML", "CSS", "Node.js"],
    image: project1,
    website: "https://weather-app-one-rho-19.vercel.app",
  },
  {
    id: 8,
    title: "To Do App",
    category: "Frontend",
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
    category: "QA",
    description: "Extensive QA testing for Pearl Jam's official website",
    about: "Performed extensive QA testing for Pearl Jam's official website, ensuring smooth performance and cross-browser compatibility. Focused on functional testing, regression testing, and cross-browser testing to maintain the high standards expected for such a high-profile artist's digital presence.",
    technologies: ["Manual Testing", "Regression Testing", "Cross-browser Testing"],
    image: pjWebsite,
    website: "https://pearljam.com/",
  },
  {
    id: 10,
    title: "Eric Church Website",
    category: "QA",
    description: "UI/UX consistency and multi-device functionality testing",
    about: "QA testing for Eric Church's website, focusing on UI/UX consistency and multi-device functionality. Ensured the site worked seamlessly across all devices and browsers while maintaining the artist's brand standards and user experience expectations.",
    technologies: ["Manual Testing", "Cross-device Testing", "Jira"],
    image: ecWebsite,
    website: "https://www.ericchurch.com/",
  },
  {
    id: 11,
    title: "Eric Church Official App",
    category: "QA",
    description: "iOS and Android app testing for seamless experience",
    about: "Tested the Eric Church official app across iOS and Android devices, ensuring a seamless experience. Performed comprehensive functional testing, UI testing, and cross-platform compatibility checks to maintain consistent user experience across all mobile platforms.",
    technologies: ["iOS", "Android", "Functional Testing"],
    image: ecApp,
    website: "https://apps.apple.com/us/app/eric-church-official/id1436492159",
  },
  {
    id: 12,
    title: "Thomas Rhett Website",
    category: "QA",
    description: "Responsive design and performance testing",
    about: "Executed QA testing on Thomas Rhett's website, including responsive design and performance checks. Focused on ensuring the site performed optimally across all devices while maintaining fast load times and smooth user interactions.",
    technologies: ["Cross-browser Testing", "Responsive Testing"],
    image: thomasRWebsite,
    website: "https://www.thomasrhett.com/#/",
  },
  {
    id: 13,
    title: "Thomas Rhett Home Team App",
    category: "QA",
    description: "Mobile QA for cross-platform performance",
    about: "Performed mobile QA for Thomas Rhett's Home Team app, ensuring flawless cross-platform performance. Tested across multiple devices and operating systems to guarantee consistent functionality and user experience for all fans.",
    technologies: ["iOS", "Android", "Regression Testing"],
    image: thomasRApp,
    website: "https://apps.apple.com/us/app/thomas-rhetts-home-team-app/id1275224693",
  },
  {
    id: 14,
    title: "Brandi Carlile Website",
    category: "QA",
    description: "Bug fixes and cross-device optimizations",
    about: "QA-tested Brandi Carlile's official website, focusing on bug fixes and cross-device optimizations. Ensured the site worked perfectly across all devices while maintaining the artist's authentic voice and brand identity online.",
    technologies: ["Manual Testing", "Cross-browser Testing"],
    image: brandiWebsite,
    website: "https://www.brandicarlile.com/",
  },
  {
    id: 15,
    title: "ACE Parking App",
    category: "QA",
    description: "Transaction reliability and UI accuracy testing",
    about: "Performed QA on ACE Parking app with a focus on transaction reliability and UI accuracy. Tested payment flows, user interface consistency, and data accuracy to ensure users could rely on the app for their parking needs.",
    technologies: ["iOS", "Android", "Functional Testing"],
    image: aceParkingApp,
    website: "https://www.aceparking.com/",
  },
  {
    id: 16,
    title: "Pride Study Website",
    category: "QA",
    description: "Accessibility and data accuracy testing",
    about: "Tested the Pride Study platform, ensuring accessibility and data accuracy. Focused on making sure the platform was accessible to all users while maintaining the integrity and accuracy of the research data being collected.",
    technologies: ["Accessibility Testing", "Manual Testing"],
    image: prideStudy,
    website: "https://play.google.com/store/apps/details?id=com.cliniv.perampanel&hl=en_US",
  },
  {
    id: 17,
    title: "Eric Church Forums",
    category: "QA",
    description: "Functionality, load times, and user experience testing",
    about: "QA-tested the Eric Church forums for functionality, load times, and user experience. Ensured the community platform worked smoothly for fans to connect and share their experiences while maintaining fast performance and reliable functionality.",
    technologies: ["Functional Testing", "Performance Testing"],
    image: ecForums,
    website: "https://ericchurch.topfan.com/forums",
  },
  {
    id: 18,
    title: "To The Stars Website",
    category: "QA",
    description: "Smooth navigation and responsive layout testing",
    about: "Tested the To The Stars website, ensuring smooth navigation and responsive layout. Focused on user experience optimization and cross-device compatibility to provide visitors with an engaging and seamless browsing experience.",
    technologies: ["Cross-browser Testing", "UI Testing"],
    image: toTheStars,
    website: "https://tothestars.media/",
  },
];
