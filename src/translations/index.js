/** @typedef {'en' | 'es'} Lang */

export const translations = {
  en: {
    nav: { work: "Explore My Work", contact: "Contact Me" },
    audience: {
      qa: "QA & Automation",
      web: "Web Development",
      toggleGroupLabel: "Choose portfolio focus",
    },
    hero: {
      title: "Senior QA Engineer | Automation, Web & Mobile",
      subtitle: "I test the things other people build - and sometimes build them too.",
      subtitleQa: "I test the things other people build - and sometimes build them too.",
      subtitleWeb: "I build fast, clean websites that clients can actually manage.",
      line1:
        "Pearl Jam, Eric Church, Thomas Rhett, Brandi Carlile - platforms with 750K+ users",
      line2: "I also build client websites when that is what the project needs.",
      stats: {
        years: "Years Experience",
        releases: "Releases Supported",
        hybrid: "Certified",
      },
    },
    about: {
      heading: "About Me",
      body: `I've spent 10 years breaking things so users don't have to. Mostly on mobile. I've tested platforms for Pearl Jam, Eric Church, Thomas Rhett, and Brandi Carlile - sometimes with 750K+ users at once. On the automation side, I write Playwright test suites, use Postman for API testing, and wire everything into CI/CD via GitHub Actions. I also do accessibility compliance, WCAG validation, and CMS cross-testing. I'm CPACC certified - meaning I've passed a formal exam on WCAG standards, not just run Lighthouse reports. I speak English, Spanish, and Portuguese. I'm used to environments where releases happen weekly and QA is the last gate before users see it. Available for remote contractor roles worldwide.`,
    },
    technologies: {
      heading: "Technologies",
      subheading:
        "Here's the stack I build and test with. From modern frameworks to QA automation tools.",
      categories: {
        development: "Development",
        qaAutomation: "QA & Automation",
        accessibility: "Accessibility & Auditing",
        collaboration: "Collaboration & Tools",
        backend: "Backend & Tools",
      },
      seeMore: "See more skills",
      seeLess: "See less",
    },
    experience: {
      heading: "Experience & Impact",
      empty: "No experience data available",
      bisonExtra0: "",
      bisonExtra1: "",
      roles: [
        {
          year: "2024 – Present",
          title: "Software Engineering Consultant",
          company: "Bison Digital · Freelance",
          bullets: [
            "Built Playwright suites for regression and smoke testing, cutting QA cycles by 30%.",
            "Tested APIs in Postman across GET/POST requests, status codes, auth flows, and data validation.",
            "Conducted WCAG 2.2 audits using axe-core and VoiceOver across web and mobile.",
            "Verified iOS builds via Xcode simulators and TestFlight on real iOS and Android devices.",
          ],
        },
        {
          year: "2017 - 2024",
          title: "Quality Assurance",
          company: "Analog Republic",
          bullets: [
            "Led mobile QA across iOS and Android for artist platforms serving 750K+ users - Pearl Jam, Eric Church, Thomas Rhett, Brandi Carlile.",
            "Tested and validated CMS functionality and frontend layouts across web and mobile.",
            "Validated Shopify payment flows and backend integrations via Postman and SQL queries.",
            "Triaged defects and managed test cycles in JIRA and ClickUp across multi-sprint regression cycles.",
          ],
        },
        {
          year: "2016 - 2017",
          title: "Project Manager",
          company: "Analog Republic",
          bullets: [
            "Managed timelines and client communication for music industry partnerships, coordinating between internal dev and external stakeholders.",
          ],
        },
      ],
    },
    projects: {
      heading: "Projects.",
      subheading: "Explore my recent work in development and QA.",
      tabs: { all: "All", built: "Built", qa: "QA" },
      loadMore: "Load more",
      loadLess: "Load less",
      drawer: {
        about: "About",
        build: "Build",
        testingFocus: "Testing Focus",
        platforms: "Platforms",
        devices: "Devices",
        technologiesUsed: "Technologies Used",
        links: "Links",
        openProject: "Open Project",
      },
    },
    contact: {
      heading: "Have a project in mind?",
      body: "Available for freelance and full-time roles. Working worldwide, remotely.",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "your.email@example.com",
      messagePlaceholder: "Tell me about your project or just say hello...",
      button: "Send Message",
      sending: "Sending...",
      successTitle: "Thanks for reaching out!",
      successBody: "I'll get back to you as soon as possible.",
      errorGeneric: "Something went wrong. Please try again.",
      errorSend: "Failed to send message. Please try again.",
    },
  },

  es: {
    nav: { work: "Ver Mi Trabajo", contact: "Contáctame" },
    audience: {
      qa: "QA y automatización",
      web: "Desarrollo web",
      toggleGroupLabel: "Elige el enfoque del portafolio",
    },
    hero: {
      title: "Ingeniero QA Senior | Automatización, web y móvil",
      subtitle:
        "Pruebo lo que otras personas construyen, y a veces también lo construyo.",
      subtitleQa:
        "Pruebo lo que otras personas construyen - y a veces también lo construyo.",
      subtitleWeb:
        "Hago sitios rápidos y claros que los clientes pueden mantener solos.",
      line1:
        "Pearl Jam, Eric Church, Thomas Rhett, Brandi Carlile - plataformas con más de 750K usuarios",
      line2: "También desarrollo sitios para clientes cuando el proyecto lo pide.",
      stats: {
        years: "Años de Experiencia",
        releases: "Lanzamientos Soportados",
        hybrid: "Certificado",
      },
    },
    about: {
      heading: "Sobre Mí",
      body: `Llevo 10 años rompiendo cosas para que los usuarios no tengan que hacerlo. Sobre todo en móvil. He probado plataformas para Pearl Jam, Eric Church, Thomas Rhett y Brandi Carlile, a veces con más de 750K usuarios a la vez. En automatización escribo suites con Playwright, uso Postman para APIs y conecto todo a CI/CD con GitHub Actions. También hago cumplimiento de accesibilidad, validación WCAG y pruebas cruzadas en CMS. Tengo CPACC: aprobé un examen formal sobre WCAG, no solo corro Lighthouse. Hablo inglés, español y portugués. Estoy acostumbrado a entornos con releases semanales donde QA es la última puerta antes de que lo vean los usuarios. Disponible para contratos remotos en todo el mundo.`,
    },
    technologies: {
      heading: "Tecnologías",
      subheading:
        "Esta es la base con la que construyo y pruebo: desde frameworks modernos hasta herramientas de automatización de QA.",
      categories: {
        development: "Desarrollo",
        qaAutomation: "QA y Automatización",
        accessibility: "Accesibilidad y Auditoría",
        collaboration: "Colaboración y Herramientas",
        backend: "Backend y Herramientas",
      },
      seeMore: "Ver más habilidades",
      seeLess: "Ver menos",
    },
    experience: {
      heading: "Experiencia e Impacto",
      empty: "No hay datos de experiencia disponibles",
      bisonExtra0: "",
      bisonExtra1: "",
      roles: [
        {
          year: "2024 – Actualidad",
          title: "Consultor de Ingeniería de Software",
          company: "Bison Digital · Freelance",
          bullets: [
            "Construí suites de Playwright para regresión y smoke, recortando ciclos de QA alrededor de un 30%.",
            "Probé APIs en Postman: GET/POST, códigos de estado, auth y validación de datos.",
            "Hice auditorías WCAG 2.2 con axe-core y VoiceOver en web y móvil.",
            "Verifiqué builds de iOS en simuladores de Xcode y TestFlight, y en dispositivos iOS y Android reales.",
          ],
        },
        {
          year: "2017 - 2024",
          title: "Aseguramiento de Calidad",
          company: "Analog Republic",
          bullets: [
            "Lideré QA móvil en iOS y Android para plataformas de artistas con más de 750K usuarios: Pearl Jam, Eric Church, Thomas Rhett, Brandi Carlile.",
            "Probé y validé CMS y layouts frontend en web y móvil.",
            "Validé flujos de pago Shopify e integraciones backend con Postman y consultas SQL.",
            "Clasifiqué defectos y organicé ciclos de prueba en JIRA y ClickUp en regresiones multisprint.",
          ],
        },
        {
          year: "2016 - 2017",
          title: "Gerente de Proyecto",
          company: "Analog Republic",
          bullets: [
            "Organicé tiempos y la comunicación con clientes en proyectos de la industria musical, entre desarrollo interno y stakeholders externos.",
          ],
        },
      ],
    },
    projects: {
      heading: "Proyectos.",
      subheading: "Explora mi trabajo reciente en desarrollo y QA.",
      tabs: { all: "Todos", built: "Desarrollo", qa: "QA" },
      loadMore: "Cargar más",
      loadLess: "Cargar menos",
      drawer: {
        about: "Acerca de",
        build: "Construcción",
        testingFocus: "Enfoque de Pruebas",
        platforms: "Plataformas",
        devices: "Dispositivos",
        technologiesUsed: "Tecnologías",
        links: "Enlaces",
        openProject: "Abrir proyecto",
      },
    },
    contact: {
      heading: "¿Tienes un proyecto en mente?",
      body: "Disponible para proyectos freelance y roles de tiempo completo. Trabajo en remoto desde cualquier lugar.",
      nameLabel: "Nombre",
      emailLabel: "Correo",
      messageLabel: "Mensaje",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu.correo@ejemplo.com",
      messagePlaceholder: "Cuéntame sobre tu proyecto o solo saluda...",
      button: "Enviar mensaje",
      sending: "Enviando...",
      successTitle: "¡Gracias por escribirme!",
      successBody: "Te responderé lo antes posible.",
      errorGeneric: "Algo salió mal. Intenta de nuevo.",
      errorSend: "No se pudo enviar el mensaje. Intenta de nuevo.",
    },
  },
};
