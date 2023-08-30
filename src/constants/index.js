import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  iu,
  second,
  pau,
  localeat,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Node JS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Game Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Economics",
    company_name: "Pamukkale University",
    icon: pau,
    iconBg: "#383E56",
    date: "Sept 2011 - ",
    points: [
      "Studied core economics and business concepts including micro and macro economics, accounting, marketing, management, and finance. The curriculum provided a strong foundation in economic theory.",
      "Took courses fully in English which enhanced my language skills in reading, writing, speaking and listening in a business context.",
      "Gained hands-on experience through group projects, case studies, and presentations that simulated real-world business situations.",
      "While I did not complete my economics degree, this education developed my analytical thinking, research skills, and ability to apply economic models to real-world problems.",
    ],
  },
  {
    title: "Computer Programming",
    company_name: "Istanbul Univerity",
    icon: iu,
    iconBg: "#383E56",
    date: "September 2022 - July 2024",
    points: [
      "Learning core computer science concepts like operating systems, computer networks, and data structures.",
      "Learning algorithms and data structures using best practices like dynamic programming and hash maps.",
      "Mastering object-oriented programming principles and design patterns in languages like Python and C#.",
      "Designing and implementing relational databases and complex SQL queries.",
    ],
  },
  {
    title: "Backend Developer Bootcamp",
    company_name: "Re:Coded",
    icon: second,
    iconBg: "#E6DEDD",
    date: "March 2023 - Sept 2023",
    points: [
      "Re:Coded prepares youth for the future of work by equipping them with the technical and soft skills (such as teamwork and business communication) to thrive as web developers and designers. Immersive bootcamps are highly competitive, with a 5% acceptance rate.",
      "Completing a five-month immersive coding bootcamp, with 400+ hours of curricula and project-based learning ",
      "Topics Include Javascript, Node.js, Typescript, Database Technologies, CRUD and Data Models, Authentication and Security, Testing, Architecture, and Cloud.",
      "Co-creating various responsive web applications from scratch.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Local Eats",
    description:
      "Our Website Is An Online Platform Connecting Food Enthusiasts With Talented Local Cooks.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "expressJS",
        color: "pink-text-gradient",
      },
    ],
    image: localeat,
    source_code_link: "https://github.com/jimaa-maya/LocalEats.git",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
