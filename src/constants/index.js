import project1 from "../assets/weather.jpeg";
import project2 from "../assets/todo.png";
import project3 from "../assets/profile2.png";
import project4 from "../assets/fttp.png";

export const HERO_CONTENT = `
With over 8 years of experience as a Quality Assurance Engineer, I’ve had the privilege of working with talented teams on complex and high-profile projects, including the Pearl Jam website, Eric Church’s website and app, and Thomas Rhett’s website and app. These experiences have honed my ability to ensure quality and functionality across diverse platforms. Along the way, I discovered a passion for frontend development, where I now channel my technical expertise and creativity. Using tools like React and Next.js, I strive to deliver exceptional digital experiences that merge seamless functionality with user-friendly design.`;

export const ABOUT_TEXT = `
I am a dedicated and versatile frontend developer who truly loves what I do—creating efficient and user-friendly web applications that make a difference. Combining my passion for development with a positive and collaborative environment is where I thrive. I believe that working alongside supportive and innovative individuals fosters creativity and growth, allowing us to tackle challenges with enthusiasm and find effective solutions together. For me, it’s not just about coding; it’s about building meaningful experiences while contributing to a team culture that uplifts and inspires.

Beyond my technical skills, I bring a rich tapestry of life experiences. Having lived in South America, I spent time in vibrant countries like Chile, Argentina, and Brazil. In Chile, I embraced a simple yet remarkable life on a 300-acre property nestled in the Andes, surrounded by breathtaking nature. This period offered me the chance to connect deeply with the land and cultivate a grounded perspective. Throughout my travels, I’ve also had the privilege of collaborating with incredible artists, poets, and philosophers, each of whom has profoundly influenced my worldview and creativity.

I believe in the power of positive and collaborative work environments where growth and creativity flourish, and where team members support one another toward a shared vision of excellence. Outside of coding, I love connecting with nature, experimenting with Italian recipes in the kitchen, and traveling to immerse myself in new cultures. In quieter moments, I’m often curled up with a good book, always feeding my curiosity and love for learning.

`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Frontend Developer",
    company: "Independent",
    description: `A dedicated Frontend Developer with strong expertise in HTML, CSS, and JavaScript, specializing in ReactJS for building dynamic and interactive user interfaces. Experienced in leveraging Tailwind CSS to create responsive, aesthetically pleasing designs that enhance user experience. Proficient in using Vite to optimize development workflows, ensuring fast builds and efficient project management. With a focus on clean, maintainable code, they are committed to delivering high-quality, performant web applications that meet client and user needs.`,
    technologies: ["HTML", "CSS", "ReactJS", "Tailwind", "Vite"],
  },
  {
    year: "2017- Present",
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
