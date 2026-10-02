export const links = {
  email: "chantelemucuio@gmail.com",
  github: "https://github.com/chacha-debug",
  linkedin: "https://www.linkedin.com/in/chantele-mucuio-409918382/",
  cv: "/Chantele-Mucuio-CV.pdf",
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  titleLines: string[];
  tag: string;
  blurb: string;
  description: string;
  figured: string;
  homeStack: string[];
  stack: string[];
  github: string;
  live: string;
  image: { src: string; width: number; height: number; alt: string };
  accent: "burnt" | "sun" | "brick";
  overview: { heading: string[]; blocks: { label: string; text: string }[] };
  highlights: {
    label: string;
    heading: string[];
    numbered: boolean;
    items: { title: string; description?: string }[];
  };
  breakdown: {
    label: string;
    heading: string[];
    items: { title: string; description: string }[];
  };
  practised: string[];
  reflection: string;
};

export const projects: Project[] = [
  {
    slug: "logistics",
    number: "01",
    title: "Logistics Management Platform",
    titleLines: ["Logistics", "Management", "Platform"],
    tag: "Backend · Systems",
    blurb:
      "A REST API for managing customers, drivers, shipments and deliveries.",
    description:
      "A RESTful logistics management system designed to manage customers, drivers, shipments, deliveries and shipment status history.",
    figured:
      "Keeping controllers, services and repositories apart made the whole backend easier to reason about and extend.",
    homeStack: ["Java", "Spring Boot", "MySQL", "REST API"],
    stack: ["Java", "Spring Boot", "MySQL", "REST API", "JPA", "OpenAPI"],
    github: "https://github.com/chacha-debug/logistics-management-api",
    live: "https://logistics-api-4rr3.onrender.com/",
    image: {
      src: "/projects/logistics.png",
      width: 1895,
      height: 919,
      alt: "The Logistics Console dashboard, showing shipment totals, a status filter and a shipment directory table.",
    },
    accent: "burnt",
    overview: {
      heading: ["From logistics problem", "to working API."],
      blocks: [
        {
          label: "The problem",
          text: "Logistics operations involve multiple entities and constantly changing shipment information. The system needed a structured way to manage these relationships while keeping shipment status and delivery information accessible.",
        },
        {
          label: "The solution",
          text: "I built a Spring Boot REST API backed by MySQL. The application separates controllers, services and repositories and uses DTOs, validation and centralized exception handling to create a structured backend.",
        },
      ],
    },
    highlights: {
      label: "Functionality",
      heading: ["What it does."],
      numbered: false,
      items: [
        { title: "Customer Management" },
        { title: "Driver Management" },
        { title: "Shipment Management" },
        { title: "Delivery Management" },
        { title: "Status Tracking" },
        { title: "Status History" },
        { title: "Search & Filtering" },
        { title: "Validation" },
        { title: "Exception Handling" },
        { title: "Dynamic Shipping Fees" },
      ],
    },
    breakdown: {
      label: "Architecture",
      heading: ["Structured for", "maintainability."],
      items: [
        {
          title: "Controller",
          description: "Handles HTTP requests and API responses.",
        },
        {
          title: "Service",
          description: "Contains application and business logic.",
        },
        {
          title: "Repository",
          description: "Handles database persistence through JPA.",
        },
        { title: "MySQL", description: "Stores relational logistics data." },
      ],
    },
    practised: [
      "Object-Oriented Programming",
      "Layered Architecture",
      "Relational Database Design",
      "REST API Development",
      "DTOs",
      "Validation",
      "Exception Handling",
      "API Testing",
      "OpenAPI Documentation",
    ],
    reflection:
      "This project strengthened my understanding of backend development, API design, relational databases and the importance of separating application responsibilities. It also gave me practical experience debugging API behaviour, validating input and designing a system that can be extended as requirements grow.",
  },
  {
    slug: "recall",
    number: "02",
    title: "Recall",
    titleLines: ["Recall"],
    tag: "Product · Web",
    blurb:
      "Paste in your notes and get flashcards back. AI writes the cards, spaced repetition decides when to review them.",
    description:
      "A study tool that turns pasted notes into flashcards. AI generates the question-and-answer cards and spaced repetition schedules when to review them.",
    figured:
      "Designing around how people actually study, then shipping it as a responsive, deployed web app.",
    homeStack: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    stack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Vercel"],
    github: "https://github.com/chacha-debug/recall",
    live: "https://recall-three-iota.vercel.app/",
    image: {
      src: "/projects/recall.png",
      width: 1895,
      height: 902,
      alt: "The Recall landing page, with a headline about turning notes into mastery and three steps for creating flashcards.",
    },
    accent: "sun",
    overview: {
      heading: ["From pasted notes", "to flashcards."],
      blocks: [
        {
          label: "The idea",
          text: "Studying from long notes is slow, and it is easy to forget what you have read. Recall takes study material and turns it into focused question-and-answer cards, then schedules reviews so the important things come back at the right time.",
        },
        {
          label: "The approach",
          text: "I built the project using Next.js, TypeScript, React and Tailwind CSS, focusing on a clean interface and a simple flow from notes to cards to daily review.",
        },
      ],
    },
    highlights: {
      label: "How it works",
      heading: ["Paste. Generate.", "Review."],
      numbered: true,
      items: [
        {
          title: "Paste anything",
          description:
            "Notes, textbook excerpts or lecture summaries go straight in.",
        },
        {
          title: "AI generates cards",
          description:
            "A language model reads the text and writes focused question-and-answer cards.",
        },
        {
          title: "Review daily",
          description:
            "Spaced repetition schedules each card for review at the right time.",
        },
      ],
    },
    breakdown: {
      label: "Technology",
      heading: ["Built with a", "modern stack."],
      items: [
        {
          title: "Next.js",
          description: "Application framework and project structure.",
        },
        {
          title: "TypeScript",
          description: "Type-safe development and clearer code.",
        },
        {
          title: "React",
          description: "Component-based user interface development.",
        },
        {
          title: "Tailwind CSS",
          description: "Responsive styling and visual design.",
        },
        { title: "Vercel", description: "Deployment of the application." },
      ],
    },
    practised: [
      "TypeScript",
      "React",
      "Next.js",
      "Responsive UI",
      "Reusable Components",
      "Modern Frontend Development",
      "Git & GitHub",
      "Deployment",
    ],
    reflection:
      "Recall gave me practical experience building with a modern React-based stack. It strengthened my understanding of component-based development, TypeScript, responsive design, project structure and deploying a web application.",
  },
  {
    slug: "community-reporting",
    number: "03",
    title: "Community Reporta",
    titleLines: ["Community", "Reporta"],
    tag: "Web · Community",
    blurb:
      "A platform for reporting potholes, water leaks and other service delivery problems in South African communities.",
    description:
      "A community service delivery platform for reporting potholes, water leaks and other community issues in South Africa.",
    figured:
      "Turning a real community problem into structured information that a web app can record and track.",
    homeStack: ["Python", "Django", "HTML", "CSS", "JavaScript"],
    stack: ["Python", "Django", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/chacha-debug/community-reporta",
    live: "https://community-reporta.vercel.app/",
    image: {
      src: "/projects/community-reporta.png",
      width: 1891,
      height: 914,
      alt: "The Community Reporta home page, with buttons to report an issue or track a report.",
    },
    accent: "brick",
    overview: {
      heading: ["Turning a community", "problem into a web system."],
      blocks: [
        {
          label: "The problem",
          text: "Community service delivery issues such as potholes and water leaks need to be communicated clearly so that problems can be recorded and followed up.",
        },
        {
          label: "The solution",
          text: "Community Reporta provides a digital platform focused on reporting different types of community issues and organising the information in a more structured way.",
        },
      ],
    },
    highlights: {
      label: "Functionality",
      heading: ["Built around", "reporting."],
      numbered: false,
      items: [
        {
          title: "Issue Reporting",
          description:
            "A digital way to report community service delivery issues.",
        },
        {
          title: "Report Tracking",
          description: "Look up a report and follow it after it is submitted.",
        },
        {
          title: "Issue Categories",
          description:
            "Potholes, water leaks, streetlights and more, organised by type.",
        },
        {
          title: "Accessibility Tools",
          description: "Text size controls and a read-aloud option.",
        },
        {
          title: "Digital Records",
          description:
            "Replacing informal reporting with structured digital information.",
        },
        {
          title: "Community Focus",
          description:
            "Designed around practical local service delivery problems.",
        },
      ],
    },
    breakdown: {
      label: "Technology",
      heading: ["Built with", "Django."],
      items: [
        { title: "Python", description: "Primary programming language." },
        {
          title: "Django",
          description: "Web framework used to build the application.",
        },
        {
          title: "HTML",
          description: "Structure and content of the interface.",
        },
        {
          title: "CSS",
          description: "Visual styling and responsive presentation.",
        },
        { title: "JavaScript", description: "Client-side interactivity." },
      ],
    },
    practised: [
      "Python",
      "Django",
      "HTML",
      "CSS",
      "JavaScript",
      "Web Development",
      "Problem Solving",
      "Git & GitHub",
    ],
    reflection:
      "This project gave me practical experience using Django to turn a real-world community problem into a web application. It strengthened my understanding of web development, application structure, user-focused problem solving and building software around a specific community need.",
  },
];

export const areas = [
  {
    title: "Backend",
    summary: "APIs, application logic, databases and services.",
    detail:
      "Where the logic lives. I like building services that stay readable as they grow.",
    tools: ["Java", "Spring Boot", "Python", "Django", "REST APIs"],
  },
  {
    title: "Web",
    summary: "Interfaces and full-stack web applications.",
    detail:
      "Responsive interfaces and full-stack apps, like Recall and Community Reporta.",
    tools: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "Systems",
    summary: "Architecture, data, validation and workflows.",
    detail: "How data is shaped, checked and moved from one place to another.",
    tools: [
      "MySQL",
      "Relational design",
      "DTOs",
      "Validation",
      "OpenAPI",
      "Layered architecture",
    ],
  },
  {
    title: "Problem solving",
    summary: "Debugging, experimenting and figuring things out.",
    detail: "Reading the error, trying something, and writing down what worked.",
    tools: ["Debugging", "API testing", "OOP", "Git & GitHub"],
  },
];

export const currently = [
  ["Building", "Portfolio + personal projects"],
  ["Learning", "System design"],
  ["Exploring", "Backend engineering"],
  ["Improving", "Testing + architecture"],
];

export const academics = [
  ["Programming I", "98%"],
  ["Web Development I", "94%"],
  ["Application Development", "88%"],
  ["Dean\u2019s List", "2\u00d7"],
];

export const likes = [
  ["Art", "Where I go when the code compiles and I still want to make something."],
  ["Tea", "Not a hobby. A dependency."],
  ["Music", "Headphones on, bugs avoided. In theory."],
  ["Flowers", "The only thing I\u2019m happy to watch bloom in production."],
];
