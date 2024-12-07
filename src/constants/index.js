import project1 from "../assets/weather.jpeg";
import project2 from "../assets/todo.png";
import project3 from "../assets/profile2.png";
import project4 from "../assets/fttp.png";

export const HERO_CONTENT = `
With over 8 years of experience as a Quality Assurance Engineer, I’ve had the privilege of working with talented teams on complex and high-profile projects, including the Pearl Jam website, Eric Church’s website and app, and Thomas Rhett’s website and app. These experiences have honed my ability to ensure quality and functionality across diverse platforms. Along the way, I discovered a passion for frontend development, where I now channel my technical expertise and creativity. Using tools like React and Next.js, I strive to deliver exceptional digital experiences that merge seamless functionality with user-friendly design.`;

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
    description: `A dedicated Frontend Developer with strong expertise in HTML, CSS, and JavaScript, specializing in ReactJS for building dynamic and interactive user interfaces. Experienced in leveraging Tailwind CSS to create responsive, aesthetically pleasing designs that enhance user experience. Proficient in using Vite to optimize development workflows, ensuring fast builds and efficient project management. With a focus on clean, maintainable code, they are committed to delivering high-quality, performant web applications that meet client and user needs.`,
    technologies: ["HTML", "CSS", "ReactJS", "Tailwind", "Vite"],
  },
  {
    year: "2017- 2024",
    role: "Quality Assurance",
    company: "Analog Republic",
    description: `Experienced Quality Assurance professional with a strong background in conducting thorough manual testing across diverse platforms and devices, ensuring robust performance and compatibility. Developed and executed comprehensive test plans and test suites, covering all aspects of software functionality. Collaborated effectively with cross-functional teams to streamline project development and enhance communication and efficiency. Specialized in wireless functional, performance, co-existence, and stability assessments, with proficiency in using bug tracking systems like Jira, Trello, and ClickUp. Ensured that software requirements met acceptance criteria through meticulous functional testing.`,
    technologies: ["Scrum", "Slack", "ClickUp"],
  },
  {
    year: "2016 - 2017",
    role: "Project Manager",
    company: "Analog Republic",
    description: `A dynamic Project Manager with a proven track record of spearheading end-to-end management of complex projects, consistently exceeding client expectations through seamless execution and delivery. Successfully navigated high-profile partnerships in the music industry, translating unique client needs into actionable project plans that drove success."`,
    technologies: ["Jira", "Trello", "Scrum"],
  },
];

export const PROJECTS = [
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
    technologies: ["HTML", "CSS", "jS", "React"],
    link: "https://todo-rho-ruby.vercel.app",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap", "Vite"],
    link: "https://portfolio-cyan-nu-45.vercel.app/",
  },
  {
    title: "Nonprofit Tree Planting Community",
    image: project4,
    description:
      "FTPP is a non-profit organization based in San Diego, Ca. We dedicate our cause to planting fruit trees around our community. Our aim is to teach members of the community the value of contributing to the environment in proactive ways.",
    technologies: ["HTML", "CSS", "React"],
    link: "https://ftpp.support/",
  },
];

export const CONTACT = {
  address: "World Wide Remote",
  phoneNo: "+1 619 - 793-8464 ",
  email: "info@alexcuriel.com",
};
