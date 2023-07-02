// Import images

import { Types } from "../custom/Type";
import image1 from "../images/work/GestionDesProject/1.png";
import image2 from "../images/work/GestionDesProject/2.png";
import image3 from "../images/work/ArtCollection/1.PNG";
import image4 from "../images/work/ArtCollection/2.PNG";
import image5 from "../images/work/pfe/1.png";
import image6 from "../images/work/pfe/2.png";
import image7 from "../images/work/pfe/3.png";
import image8 from "../images/work/audioVis/2.png";
import image9 from "../images/work/audioVis/1.png";
import image10 from "../images/work/web2app/1.png";
import image11 from "../images/work/collectUS/1.png";
import image12 from "../images/work/collectUS/2.png";
import image13 from "../images/work/collectUS/3.png";
import image14 from "../images/work/dateNight/1.png";
import image15 from "../images/work/dateNight/2.png";
import image16 from "../images/work/dateNight/3.png";
import image17 from "../images/work/mar3ouchaGame/1.png";
import image18 from "../images/work/mar3ouchaGame/2.png";
import image19 from "../images/work/AR/1.png";
import image20 from "../images/work/AR/2.png";
import image21 from "../images/work/3D/1.png";
import image22 from "../images/work/3D/2.png";
import image23 from "../images/work/3D/3.png";

export const projectsData = [
  {
    id: 1,
    title: "Projects Management Platform",
    category: Types.WEB,
    img: [image1, image2],
    ProjectHeader: {
      title: "Project  & Task Management Platform",
      publishDate: "Jul 26, 2021",
      tags: Types.WEB,
    },
    technologies: ["React JS", "Node JS", "Mongo DB"],
    description: [
      "This app is to enhance productivity and streamline project management. It provides a centralized platform for individuals or teams to organize and manage tasks effectively. By assigning tasks to team members and setting deadlines, the app ensures accountability and helps maintain a clear overview of project progress.",
      " With real-time tracking, users can monitor task completion, identify bottlenecks, and make informed decisions to keep projects on schedule. Ultimately, this app aims to optimize teamwork, improve efficiency, and ensure projects are delivered successfully within the set timelines.",
    ],
    about: {
      type: "Freelance",
      services: "Front End  & Backend Development ",
      lienGithub: "",
      technologiesDetails: ["React JS", "Node JS", "Mongo DB", "Material UI"],
    },
  },
  {
    id: 2,
    title: "Art Collection Platform",
    category: Types.WEB,
    img: [image3, image4],
    technologies: ["React JS", "Node JS", "Mongo DB"],
    ProjectHeader: {
      title: "Art Collection Platform",
      publishDate: "Jul 26, 2021",
      tags: Types.WEB,
    },
    description: [
      "The art collection platform designed for the Hasrubal Association aims to provide the admin with a comprehensive tool to manage the art collection of the hostel. This platform serves as a centralized hub to organize, catalog, and showcase the art pieces owned by the association",
      "Inventory Management: The admin can maintain a detailed inventory of the art collection, including information such as artist name, artwork title, medium, dimensions, and acquisition details. This allows for easy tracking and referencing of each piece in the collection",
      "Image Gallery: The platform provides a visually appealing gallery where the admin can upload high-quality images of each artwork. This allows visitors and members of the association to explore the collection virtually and appreciate the artwork's beauty and uniqueness.",
      "Categorization and Tagging: The admin can categorize and tag art pieces based on different criteria such as art style, artist, genre, or historical period. This enables efficient search and filtering capabilities, making it easier for users to discover specific artworks of interest.",
    ],
    about: {
      type: "Academic Project For Hasrubal Association",
      services: "Front End  & Backend Development ",
      lienGithub: "",
      technologiesDetails: [
        "React JS",
        "Node JS",
        "Mongo DB",
        "Redux toolkit",
        "Material UI",
      ],
    },
    objective:
      "Sunt minim id velit sint ad cupidatat aliqua pariatur qui anim. Velit non fugiat et sit Lorem magna ullamco quis exercitation quis. Ut esse et consectetur quis incididunt dolor. Exercitation ullamco ullamco ut nostrud laboris proident velit exercitation sit fugiat. Occaecat veniam incididunt ea pariatur. Amet sunt consectetur aliqua eu.",
  },
  {
    id: 3,
    title: "Mutual By Codway",
    category: Types.WEB,
    img: [image5, image6, image7],
    technologies: ["React JS", "Spring Boot", "MySql"],
    ProjectHeader: {
      title: "Health Management Web Application",
      publishDate: "Jul 26, 2021",
      tags: Types.WEB,
    },
    description: [
      "A web application for managing health bulletins through workflow notification to facilitate the healthcare information management process between three stakeholders:healthcare providers, insurance companies, and patients.",
    ],
    about: {
      type: "End of study project",
      services: "Front End  & Backend Development ",
      lienGithub: "",
      technologiesDetails: ["React JS", "Spring Boot", "MySQL", "Bootstrap"],
    },
    objective: "Sunt minim  ygt gf t gth th t ",
  },
  {
    id: 10,
    title: "Audiovisual Agency Platform",
    category: Types.WEB,
    img: [image8, image9],
    technologies: ["React JS"],
    ProjectHeader: {
      title: "Audiovisual Agency Platform",
      publishDate: "Jul 26, 2021",
      tags: Types.WEB,
    },
    description: [
      "Tawfik Production is  an online platform for showcasing the agency's portfolio of audiovisual work. ",
    ],
    about: {
      type: "Freelance",
      services: "Front End Development ",
      lienGithub: "",
      technologiesDetails: ["React JS", "Bootstrap"],
    },
    objective:
      "Sunt minim id velit sint ad cupidatat aliqua pariatur qui anim. Velit non fugiat et sit Lorem magna ullamco quis exercitation quis. Ut esse et consectetur quis incididunt dolor. Exercitation ullamco ullamco ut nostrud laboris proident velit exercitation sit fugiat. Occaecat veniam incididunt ea pariatur. Amet sunt consectetur aliqua eu.",
  },
  {
    id: 4,
    title: "Web2App",
    category: Types.MOBILE,
    img: [image10],
    technologies: ["Flutter"],
    ProjectHeader: {
      title: "Web2App Application",
      publishDate: "Jul 26, 2021",
      tags: Types.MOBILE,
    },
    description: [
      "Mobile  app allow users to convert websites to mobile versions optimized for display on mobile devices. It provides a smoother and faster user experience for users browsing websites on their phones.",
    ],
    about: {
      type: "Freelance",
      services: "Front End & Backend Development ",
      lienGithub: "",
      technologiesDetails: ["Flutter"],
    },
  },
  {
    id: 5,
    title: "Collect US",
    category: Types.GAME,
    img: [image11, image12, image13],
    technologies: ["Unity", "C#"],
    ProjectHeader: {
      title: "2D/3D Game",
      publishDate: "Jul 26, 2021",
      tags: Types.GAME,
    },
    description: [
      "2D/3D advertising game for Kinder's products. The player is foundlost in a maze and should escape it. to solve the maze you need to collect special eggs located at the end of levels one and two.",
    ],
    about: {
      type: "Academic Project",
      services: "Game Development ",
      lienGithub: "",
      technologiesDetails: ["Unity", "C#", "Maya"],
    },
  },
  {
    id: 6,
    title: "Date Night",
    category: Types.GAME,
    img: [image14, image15, image16],
    technologies: ["Unity", "C#"],
    ProjectHeader: {
      title: "2D Game",
      publishDate: "Jul 26, 2021",
      tags: Types.GAME,
    },
    description: [
      "2D game inspired by the Titanic movie, Jack and rose need to collaborate together in order to reach a date appointment. thus, they should clear the way for each other.",
    ],
    about: {
      type: "Academic Project",
      services: "Game Development ",
      lienGithub: "",
      technologiesDetails: ["Unity", "C#"],
    },
  },
  {
    id: 7,
    title: "The Lady in Endless Run",
    category: Types.GAME,
    img: [image17, image18],
    technologies: ["Unity", "C#"],
    ProjectHeader: {
      title: "The Lady in Endless Run",
      publishDate: "Jul 26, 2021",
      tags: Types.GAME,
    },
    description: [
      "3D game inspired by the  Subway Surfers  game, where the player controls a character running along a track, avoiding obstacles and collecting coins.",
    ],
    about: {
      type: "Academic Project",
      services: "Game Development ",
      lienGithub: "",
      technologiesDetails: ["Unity", "C#", "Maya"],
    },
  },
  {
    id: 8,
    title: "Augmented Reality CV",
    category: Types.AR,
    img: [image19, image20],
    technologies: ["Unity", "C#", "AR kit", "Maya"],
    ProjectHeader: {
      title: "2D/3D Game",
      publishDate: "Jul 26, 2021",
      tags: Types.AR,
    },
    description: [
      " Curriculum vitae and digital portfolio introduced in augmented reality, allowing me to increase the impact of my applications to recruiters.",
    ],
    about: {
      type: "Academic Project",
      services: "AR Development ",
      lienGithub: "",
      technologiesDetails: ["Unity", "C#", "AR kit", "Maya"],
    },
  },
  {
    id: 9,
    title: "3D Modeling",
    category: Types.THREED,
    img: [image21, image22, image23],
    technologies: ["Maya"],
    ProjectHeader: {
      title: "3D Modeling",
      publishDate: "Jul 26, 2021",
      tags: Types.THREED,
    },
    description: [
      " 3D scene of a robot chef street cooking festival with animations with the help of Maya software.",
    ],
    about: {
      type: "Academic Project",
      services: "3D modeling ",
      lienGithub: "",
      technologiesDetails: ["Maya"],
    },
  },
];
