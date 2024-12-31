export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "NgRatingPro",
    desc: "A powerful and customizable Angular rating component that allows full and half ratings with support for read-only mode, dynamic scaling, and SVG customization.",
    subdesc:
      "Built as a library with SVG, Angular, TypeScript. NgRatingPro is Perfect for use in reviews, feedback forms, and rating-based applications.",
    href: "https://www.npmjs.com/package/ng-rating-pro",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Angular",
        path: "/assets/angular.png",
      },
      {
        id: 2,
        name: "SVG",
        path: "assets/svg.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      }
    ],
  },
  {
    title: "Protons - EV Assistance",
    desc: "Designed and developed a Web and mobile application to locate EV charging stations, optimize routes, and suggest charging points from source to destination based on the vehicle's battery status.",
    subdesc:
      "Built with React for web interface, React Native for mobile app, Node.js backend with MongoDB database, and JWT for secure authentication, enabling seamless cross-platform user experience for EV drivers.",
    href: "https://github.com/Jony-Jas/protons-frontend-2",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "JWT",
        path: "assets/jwt.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Node",
        path: "/assets/node.png",
      },
    ],
  },
  {
    title: "Navisphere - NTRIP RTK System",
    desc: "Developed a Ntrip Caster-Server-Client architecture with the Golang socket package and integrated it with the front end developed using React to stream RTK corrections for precise GPS positioning.",
    subdesc:
      "The system enables high-precision GPS functionality by streaming RTK corrections from server to client, achieving centimeter-level accuracy through Golang socket programming and React frontend integration.",
    href: "https://github.com/Jony-Jas/ntrip-caster",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Golang",
        path: "assets/golang.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Websocket",
        path: "/assets/websocket.png",
      },
    ],
  },
  {
    title: "BlockGate - Decentralized Payment Platform",
    desc: "Developed a Decentralized Crypto Payment Platform on Polygon chain where crypto is exchanged through mediators, featuring Polygon ID for Zero-Knowledge Proof authentication and integration capabilities with traditional payment systems like UPI.",
    subdesc:
      "This platform bridges Web3 and Web2 by enabling low-fee crypto transactions through mediators while maintaining user privacy and offering seamless integration with conventional payment methods.",
    href: "https://github.com/Jony-Jas/block-gate",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Solidity",
        path: "assets/solidity.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "polygon",
        path: "/assets/polygon.png",
      },
    ],
  }
];

export const calculateSizes = (isMobile) => {
  return {
    deskScale: isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -4.5, 0],
    cubePosition: isMobile ? [4.5, -7.5, -2] : [5, -8.0, -2],
    reactLogoPosition: isMobile ? [5, 4, 0] : [5, 4, 0],
    ringPosition: isMobile ? [-10, 10, 0] : [-12, 10, 0],
    targetPosition: isMobile ? [-9, -10, -10] : [-12, -7, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Applied Materials",
    pos: "Software Engineer",
    duration: "2024 - Present",
    title:
      "Contributed to the Framework team by implementing features using Angular, including SVG-related functionalities and module federation for microfrontends. Collaborated with remote teams to deliver efficient and maintainable solutions.",
    icon: "/assets/amat.png",
    animation: "victory",
  },
  {
    id: 2,
    name: "Applied Materials",
    pos: "College Intern",
    duration: "2024 - 2024",
    title:
      "Worked with Angular, Jasmine, and Karma to improve code coverage and stability for an internal UI Library. Resolved bugs and enhanced performance while leveraging version control and agile practices for efficient development.",
    icon: "/assets/amat.png",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Solar Secure Solutions",
    pos: "Full Stack Intern",
    duration: "2022 - 2022",
    title:
      "Gained hands-on experience in full-stack development and building end-to-end web applications. Developed an e-commerce website integrating ReactJS, MySQL, MongoDB, and PayPal.",
    icon: "/assets/solar-secure.png",
    animation: "salute",
  },
];
