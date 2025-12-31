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





export const HERO_CONTENT = `
I’ve spent over 8 years in the world of Quality Assurance, making sure websites and apps don’t go off the rails, think Pearl Jam, Eric Church, and Thomas Rhett. 
I've had the chance to work with some seriously talented folks on high-profile projects that kept me on my toes (and occasionally dreaming in bug reports). 
Somewhere along the way, I fell for frontend development yep, it was love at first \`div\`. 
Now I split my time between squashing bugs and building sleek, user-friendly interfaces with React and Next.js. 
My goal? Digital experiences that look good, work great, and don’t make people want to throw their laptops out the window. agraph with:

Let’s build something people can actually use, and enjoy using.
`;


export const ABOUT_TEXT = `
I’m a frontend developer who loves crafting clean, user-friendly web experiences—and I’m all about keeping things efficient without losing the fun. 
I thrive in creative, collaborative spaces where ideas flow freely. Before getting into tech, I traveled through South America, soaking in the cultures of Chile, Argentina, and Brazil. 
Living simply in the Andes reshaped how I think and solve problems. I spent time with artists, poets, and philosophers, which taught me to mix logic with a touch of artistry in everything I build. 
Outside of coding, you’ll usually find me hiking, cooking Italian food, baking sourdough bread, or lost in a good book. 
I bring curiosity and creativity to everything I do—whether it’s building interfaces or exploring new ideas. Let’s connect and create something great!
`;


export const EXPERIENCES = [
  {
    year: "2024 – Present",
    role: "Frontend Developer + QA (Accessibility & Automation)",
    company: "Freelance",
    description: `
      I help clients build clean, responsive, and accessible web interfaces—primarily using React, Tailwind, and WordPress.
      My work focuses on performance, semantic structure, and delivering inclusive experiences that meet WCAG standards.
      
      I also lead quality assurance using tools like Cypress, Playwright, axe-core, and Lighthouse to ensure every project is stable, accessible, and ready for production.
      From landing pages to complex web apps, I bring both frontend development and QA insight into every build.
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
      Spent several years diving deep into manual testing across all kinds of platforms and devices, making sure everything worked smoothly, reliably, and as expected. I created detailed test plans and ran through endless test cases to catch bugs before users ever saw them. Worked closely with cross-functional teams to keep communication flowing and projects on track. Specialized in performance, wireless, and stability testing, and used tools like Jira, Trello, and ClickUp to keep things organized. Basically, if there was a bug—I found it (and logged it like a pro).
    `,
    technologies: ["Jira", "Scrum", "TestRail", "PostMan", "Manual QA", "Regression & Smoke Testing",],
  },
  {
    year: "2016 - 2017",
    role: "Project Manager",
    company: "Analog Republic",
    description: `
     Wore the project manager hat for a bit, turning chaos into clarity for complex projects—especially in the fast-paced world of music industry partnerships. I kept everything moving smoothly from kickoff to delivery, making sure client goals turned into real, actionable plans. Loved collaborating with teams, problem-solving on the fly, and delivering results that made clients smile.
    `,
    technologies: ["Jira", "Scrum", "Trello", "Slack"],
  },
];

export const HIGHLIGHTS = [
  {
    title: "Quality Assurance",
    description: [
      "Tested and fine-tuned high-profile websites and apps for clients like Pearl Jam, Eric Church, and Thomas Rhett—making sure everything worked perfectly, everywhere.",
      "Ran functional, regression, cross-browser, and multi-device testing to catch bugs before users ever saw them.",
      "Checked performance across smartphones, tablets, desktops, and even smart TVs to ensure a seamless experience.",
      "Worked closely with design teams to optimize UI/UX for consistency, responsiveness, and intuitive navigation.",
    ],
  },
  {
    title: "Frontend Development",
    description: [
      "Built clean, scalable websites for a range of clients—including a nonprofit and a local artist—with unique needs and visual styles.",
      "Used React, Tailwind CSS, and Vite to create responsive, fast-loading interfaces that look great on any screen.",
      "Blended my QA background into dev work to make sure sites didn’t just look good—they ran smoothly too.",
      "Earned recognition for merging solid technical chops with a quality-first mindset.",
    ],
  },
  {
    title: "Collaboration",
    description: [
      "Teamed up with cross-functional crews using Agile workflows to keep projects moving and ideas flowing.",
      "Kept everything on track with tools like Jira, Trello, and ClickUp—no chaos, just clarity.",
      "Helped clients stay organized with clean data entry and spreadsheet management using Excel and Google Sheets.",
      "Brought strong communication to the table, making teamwork feel easy (even under pressure).",
      "Worked side-by-side with devs, designers, and stakeholders to ship polished projects on tight timelines.",
    ],
  },
];

export const PROJECTS = [
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

