import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  docker,
  solidity,
  mysql,
  postgresql,
  python,
  raspberrypi,
  django,
  arduino,
  iot,
  igepn,
  rcbtrace,
  rumi,
  potted_plant,
  blockchain,
  mail,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: solidity,
    name: "Solidity",
    type: "Blockchain",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "Backend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: mysql,
    name: "MySQL",
    type: "Database",
  },
  {
    imageUrl: postgresql,
    name: "PostgreSQL",
    type: "Database",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Frontend and Backend",
  },
  {
    imageUrl: django,
    name: "Django",
    type: "Backend",
  },
  {
    imageUrl: raspberrypi,
    name: "Raspberry Pi",
    type: "Microcontroller",
  },
  {
    imageUrl: arduino,
    name: "Arduino",
    type: "Microcontroller",
  },
  {
    imageUrl: iot,
    name: "IoT",
    type: "Internet of Things",
  },
];

export const experiences = [
  {
    title: "Python Developer Intern",
    company_name: "IGEPN",
    icon: igepn,
    iconBg: "#ffc87a",
    date: "September 2022 - November 2022",
    points: [
      "Improved Python code documentation according to PEP8, increasing readability and quality.",
      "Developed informative websites with Sphinx using Visual Studio Code, Git, GitHub, GitLab, and GitHub Pages.",
      "Collaborated on training machine learning models for earthquake prediction using Pandas from Python.",
      "Implemented tests with Pytest to ensure project robustness.",
      "Contributed to a sentiment analysis model analyzing Twitter posts following earthquake information.",
    ],
  },
  {
    title: "Software Development Intern",
    company_name: "RCB Trace",
    icon: rcbtrace,
    iconBg: "#e0fbff",
    date: "May 2023 - Jul 2023",
    points: [
      "Designed and developed APIs leveraging SQL stored procedures, seamlessly integrating them with Java and Kotlin backends, showcasing exceptional technical proficiency and analytical skills. Furthermore, I demonstrated expertise in Git version control, efficiently managing code revisions and collaborating with team members.",
      "Successfully collaborated with multidisciplinary teams, enhancing collaboration, communication, and interpersonal skills.",
      "Guaranteed robust API performance and efficiency, demonstrating meticulous attention to detail and dedication to delivering high-quality solutions.",
      "Utilized SCRUM framework within a team environment, facilitating daily stand-up meetings to monitor progress, promote collaborative problem-solving, and ensure seamless communication.",
    ],
  },
  {
    title: "Research Department Analyst",
    company_name: "Instituto Superior Universitario Rumiñahui [ISTER]",
    icon: rumi,
    iconBg: "#ffc87a",
    date: "Jan 2024 - Ago 2024",
    points: [
      "Managed over 100 research projects, demonstrating exceptional organizational and leadership skills.",
      "Evaluated over 30 research projects in 2024, contributing to the institution's academic growth.",
      "Developed a web page using React and web3 to issue over 80 NFT certificates on Polygon Network, showcasing problem-solving and creativity.",
      "Utilized Power Automate to streamline tasks, highlighting time management and adaptability.",
      "Taught a workshop on NoSQL databases to over 30 students, enhancing educational delivery and technical knowledge sharing.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: mail,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/JorgePerezEC",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/jorge-perez21/",
  },
];

export const projects = [
  {
    iconUrl: blockchain,
    theme: "btn-back-red",
    name: "Blockchain Certificate Issuance System",
    description:
      "Designed and implemented a Blockchain Certificate Issuance System for Tecnológico Universitario Rumiñahui, leveraging web3, MetaMask, and Polygon network to create NFT certificates. This full-stack project utilized React and Node.js/Express, resulting in the efficient issuance of over 70 certificates at a minimal cost of less than $0.01 each, showcasing technical proficiency and innovative problem-solving.",
    link: "https://github.com/jminango20/academic-ister/tree/back-docker-branch",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Teacher Workload Management Application for the DETRI of EPN university",
    description:
      "Curricular Integration Project entails the development of a desktop application designed to optimize and manage the academic workload assignment of DETRI instructors, currently performed manually, thereby streamlining the workload of the DETRI head.",
    link: "https://github.com/JorgePerezEC/TIC-APLICACION-DE-GESTION-DE-CARGA-ACADEMICA-DE-PROFESORES-PARA-EL-DETRI",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "E-commerce Web and Mobile Application",
    description:
      "Developed a comprehensive e-commerce platform for Farmacia Vitality (2022) leveraging the MERN (MongoDB, Express, React, Node.js) architecture. This project encompassed both a web application and a mobile app built using Expo React Native, seamlessly integrating with a REST API to facilitate data synchronization and population on both platforms, enabling efficient management and customer access to pharmaceutical products and services.",
    link: "https://github.com/JorgePerezEC/Farmacia-Vitality-Ecommerce-MERN-and-MobileAPP-using-REACT-NATIVE",
  },
  {
    iconUrl: potted_plant,
    theme: "btn-back-green",
    name: "IoT Smart Plant ArduinoUno RaspberryPi4 with LAMP Server",
    description:
      "Implementation of a system that supports the care of a plant with automatic irrigation through the Arduino Uno hardware along with the use of different sensors such as: DHT11, light sensor, hygrometer and ultrasonic; allows the collection of data from the sensors as well as actions performed in the irrigation system through the Raspberry Pi OS, after this stores the data within a LAMP server.",
    link: "https://github.com/JorgePerezEC/IoT_Smart_Plant_ArduinoUno_RaspberryPi4_with_LAMP_Server",
  },
];
