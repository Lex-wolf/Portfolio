import project1 from "../assets/weather.jpeg";
import project2 from "../assets/todo.png";
import project3 from "../assets/profile2.png";
import project4 from "../assets/fttp.png";
import project5 from "../assets/hummingbird.png";
import project6 from "../assets/geobrasil.png"

export const HERO_CONTENT = `
With over 8 years of experience as a Quality Assurance Engineer, I’ve had the privilege of working with talented teams on complex and high-profile projects, 
including the Pearl Jam website, Eric Church’s website and app, and Thomas Rhett’s website and app. These experiences have honed my ability 
to ensure quality and functionality across diverse platforms. Along the way, 
I discovered a passion for frontend development, where I now channel my technical expertise and creativity. 
Using tools like React and Next.js, I strive to deliver exceptional digital experiences
 that merge seamless functionality with user-friendly design.`;

export const ABOUT_TEXT = `
I am a passionate and adaptable frontend developer committed to building efficient, user-friendly web applications. I thrive in positive, collaborative environments that inspire growth, creativity, and innovation.

An incredible chapter of my life took me to South America, where I explored vibrant countries like Chile, Argentina, and Brazil. Living simply on a 300-acre property in the Andes, I connected deeply with nature and found inspiration in its quiet beauty. Collaborating with artists, poets, and philosophers during this time shaped my creative and problem-solving approach.

Outside of coding, I enjoy exploring nature, cooking Italian dishes, and immersing myself in different cultures. In quieter moments, you’ll find me with a good book, fueling my curiosity and broadening my perspective. I bring this passion and versatility to every project, contributing to teams where meaningful collaboration thrives. Let's connect and create something extraordinary!

`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Frontend Developer",
    company: "Freelance",
    description: `
      A dedicated Frontend Developer with strong expertise in HTML, CSS, and JavaScript, 
      specializing in ReactJS for building dynamic and interactive user interfaces. 
      Experienced in leveraging Tailwind CSS to create responsive, aesthetically pleasing designs 
      that enhance user experience. 

      Proficient in using Vite to optimize development workflows, ensuring fast builds and 
      efficient project management. With a focus on clean, maintainable code, they are committed 
      to delivering high-quality, performant web applications that meet client and user needs. 

      Developed interactive and dynamic user interfaces, while also handling data management 
      tasks such as data entry, spreadsheet automation, and reporting for various clients.
    `,
    technologies: ["HTML", "CSS", "ReactJS", "WordPress", "Tailwind", "Excel", "Vite", "Data Entry"],
  },
  {
    year: "2019 - 2022",
    role: "Data Entry Specialist",
    company: "Freelance",
    description: `
      Provided data entry services for private clients, ensuring accuracy and organization in 
      maintaining and updating records. 

      Managed structured data using Excel, Google Sheets, and various database tools. Assisted 
      businesses in digitizing, validating, and structuring their data for better accessibility 
      and reporting. 

      Leveraged spreadsheet automation techniques, including formulas and macros, to improve 
      workflow efficiency. Ensured data integrity through quality control checks and systematic 
      organization of large datasets.
    `,
    technologies: ["Excel", "Google Sheets", "Data Entry", "Spreadsheet Automation"],
  },
  {
    year: "2017 - 2024",
    role: "Quality Assurance",
    company: "Analog Republic",
    description: `
      Experienced Quality Assurance professional with a strong background in conducting thorough 
      manual testing across diverse platforms and devices, ensuring robust performance and 
      compatibility. 

      Developed and executed comprehensive test plans and test suites, covering all aspects 
      of software functionality. 

      Collaborated effectively with cross-functional teams to streamline project development 
      and enhance communication and efficiency. Specialized in wireless functional, performance, 
      co-existence, and stability assessments, with proficiency in using bug tracking systems 
      like Jira, Trello, and ClickUp. 

      Ensured that software requirements met acceptance criteria through meticulous functional 
      testing.
    `,
    technologies: ["Jira", "Scrum", "ClickUp", "Slack"],
  },
  {
    year: "2016 - 2017",
    role: "Project Manager",
    company: "Analog Republic",
    description: `
      A dynamic Project Manager with a proven track record of spearheading end-to-end management 
      of complex projects, consistently exceeding client expectations through seamless execution 
      and delivery. 

      Successfully navigated high-profile partnerships in the music industry, translating unique 
      client needs into actionable project plans that drove success.
    `,
    technologies: ["Jira", "Scrum", "Trello", "Slack"],
  },
];


export const HIGHLIGHTS = [
  {
    title: "Quality Assurance",
    description: [
      "Ensured quality and functionality for high-profile websites and apps, including Pearl Jam, Eric Church, and Thomas Rhett.",
      "Conducted functional, regression, cross-browser, and multi-device testing to ensure compatibility and stability.",
      "Validated performance on smartphones, tablets, desktops, and smart TVs, ensuring seamless user experiences.",
      "Optimized UI/UX designs for design consistency, responsiveness, and intuitive navigation.",
    ],
  },
  {
    title: "Frontend Development",
    description: [
      "Developed user-friendly, scalable websites for clients, including a nonprofit organization and a local artist portfolio, showcasing diverse design requirements and functionality.",
      "Leveraged tools like React, Tailwind CSS, and Vite to create responsive, visually appealing interfaces.",
      "Integrated QA expertise into frontend work, ensuring smooth functionality across devices and browsers.",
      "Received industry recognition for combining technical skills with a quality-first mindset.",
    ],
  },
  
 
  {
    title: "Collaboration",
    description: [
      "Worked with cross-functional teams using Agile methodologies.",
      "Managed workflows using tools like Jira, Trello, and ClickUp.",
      "Performed data entry for clients, organizing and maintaining structured data in Excel files with accuracy and efficiency.",
      "Delivered exceptional results through teamwork and effective communication.",
      "Collaborated with developers, designers, and stakeholders to deliver high-quality results on tight deadlines.",
    ],
    
    
  },
];



  

export const PROJECTS = [
  {
    title: "Nonprofit Tree Planting Community",
    image: project4,
    description:
      "FTPP is a non-profit organization based in San Diego, Ca. We dedicate our cause to planting fruit trees around our community. Our aim is to teach members of the community the value of contributing to the environment in proactive ways.",
    technologies: ["HTML", "CSS", "React.js", "JavaScript"],
    link: "https://ftpp.support/",
  },
  {
    title: "Geodesic Brasil Website",
    image: project6,
    description: "A modern platform showcasing innovative geodesic structures, sustainable design, and architectural solutions tailored for Brazilian landscapes.",
    technologies: [
      "HTML",
      "CSS",
      "React.js",
      "JavaScript",
      "Vite",
      "Node.js",
      "TypeScript"
    ],
    link: "https://www.geodesicbrasil.com/"
  },
  {
    title: "Local Artist Website",
    image: project5,
    description:
      "A vibrant portfolio showcasing Chicana-inspired art, hummingbird motifs, and cultural stories woven into nature's beauty.",
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
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React.js", "Bootstrap", "Vite"],
    link: "https://alexcuriel.com/",
  },
  {
    title: "Weather App",
    image: project1,
    description:
      "A responsive weather app built using HTML, CSS, and JavaScript with React. The app provides real-time weather updates, allowing users to search for and view current weather conditions, forecasts, and temperatures in any location. Designed with a clean and intuitive interface, it ensures a smooth user experience across all devices.",
    technologies: ["HTML", "CSS", "Node.js"],
    link: "https://weather-app-one-rho-19.vercel.app",
  },
  {
    title: "To Do App",
    image: project2,
    description:
      "A simple and efficient to-do app that helps users organize tasks and manage their time effectively. Built with a clean interface, it allows users to add, edit, and delete tasks, set priorities, and track progress easily. The app ensures a smooth user experience with intuitive navigation and responsive design.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    link: "https://todo-rho-ruby.vercel.app",
  },
];

export const CONTACT = {
  address: "World Wide Remote",
  phoneNo: "+1 619 - 786 0658 ",
  email: "info@alexcuriel.com",
};
