// import SecretWords from "./components/SecretWords";
import weirdFishes from "../src/assets/weirdFishes.mp3";
import loveSong from "../src/assets/lovesong.mp3";
import loveWillTearUsApart from "../src/assets/loveWillTearUsApart.mp3";
import allApologies from "../src/assets/allApologies.mp3";

export const works = [
  // {
  //   link: "",
  //   thumbnail: "",
  //   title: "One Man Merchandising System",
  //   description:
  //     "A Desktop Application for one man \nmerchandising located at Scout De Guia, Quezon City",
  //   tech: ["React", "Vite", "Electron", "Zustand", "Node", "REST", "MySQL"],
  //   githubLink: "",
  //   speed: 50,
  //   status: "on-going",
  //   projectSpecs: "https://read.cv/urquico/YmlSFfybOhxeV8J4mWg7",
  // },
  {
    link: "https://haribon-e-wall.web.app/",
    thumbnail:
      "https://lh3.googleusercontent.com/pw/AJFCJaXPItFzPgS1w93kluFOPURffyxm25Y6A-lr77gv4NZnMv9BuUfRd3CrzQGS8bb7qakxAVs0XexEmlwPIekw9Nao6hLpotNnCLZ8dpVfwWO8Hw_iTC4=w2400",
    title: "Haribon E-Wall (Grievance Forum)",
    description:
      "A project for software engineering in \nPamantasan ng Lungsod ng Maynila",
    tech: ["Firebase", "REST", "React", "Node"],
    githubLink: "https://github.com/urquico/grievance-forum",
    speed: 30,
    status: "deployed",
    projectSpecs: "https://read.cv/urquico/4GIzKau0H2FNbZYn8AZz",
  },
  {
    link: "https://urquico.github.io/monte-carlo/",
    thumbnail:
      "https://lh3.googleusercontent.com/pw/AJFCJaXxk5cVhLUhZkOUn8bdwBH_DPjC2Y8dhwYh-012-YVppYW5Wf5n4V4gVrPONgAXYUTwjq93ySmcGrVMUMaJhXWYbNGRhM4QDznJOUuistxvAs4Rghc=w2400",
    title: "Monte Carlo Simulation",
    description:
      "An activity for computational science in \nPamantasan ng Lungsod ng Maynila",
    tech: ["Vite", "React"],
    githubLink: "https://github.com/urquico/monte-carlo",
    speed: 50,
    status: "deployed",
    projectSpecs: "",
  },
  {
    link: "https://urquico.github.io/word-buggle/",
    thumbnail:
      "https://lh3.googleusercontent.com/pw/AJFCJaUEoMZ0_PstGZ7dfkP7TyuI7AhtWyWVX-OeweOFC60H6p8Am8TSwr6ZBJCl0YCm59DL8aXfrilKnQTtGWhVCBaNHRJTCj-gkNjRBCNkJHVbBIvD_Nw=w2400",
    title: "Word Buggle",
    description:
      "A Project for computational science in \nPamantasan ng Lungsod ng Maynila",
    tech: ["Vite", "React"],
    githubLink: "https://github.com/urquico/word-buggle",
    speed: 10,
    status: "deployed",
    projectSpecs: "",
  },
];

export const secretWordsData = [
  {
    word: "RADIOHEAD",
    x: 20,
    y: 34,
    audioFile: weirdFishes,
    uniqueClass: "radiohead",
    toolTipMessage: "playing: Weird Fishes",
  },

  {
    word: "JOY DIVISION",
    x: 80,
    y: 79,
    audioFile: loveWillTearUsApart,
    uniqueClass: "joyDivision",
    toolTipMessage: "playing: Love Will Tear Us Apart",
  },
  {
    word: "the cure",
    x: 30,
    y: 69,
    audioFile: loveSong,
    uniqueClass: "theCure",
    toolTipMessage: "playing: Lovesong",
  },
  {
    word: "NIRVANA",
    x: 84,
    y: 9,
    audioFile: allApologies,
    uniqueClass: "nirvana",
    toolTipMessage: "playing: All Apologies",
  },
];

export const photo = [
  "https://lh3.googleusercontent.com/RdrSY40BKL6b7917XiteqpK94LUBOWQAwLBrpSOE2Neahi1RkBhFzoES2zu9FbZEYOavbKaXCUySbTJRps427REE5kmfVuzYHzQEGhihOZOs80V3hRafySIvikrlUazW2sQurJ5TAw=w2400",
  "https://lh3.googleusercontent.com/2626VVwKwozPbGOcI4nXc-oafKSZvCuhew_YsOg-TqM0M9F4r393Bi49AhWo8qSSRgcyGLSWX2iu4r1KcLM4GN3GF63BZFVfptPL13-I24SnXI05ayoah5mwNkNQtYH8gc7YyY_WvQ=w2400",
];

export const skillsData = [
  {
    label: "React",
    type: "A JavaScript library for building user interfaces.",
  },
  {
    label: "Vite",
    type: "Fast build tool for modern web apps.",
  },
  {
    label: "Electron",
    type: "Build desktop apps with web technologies",
  },
  {
    label: "Mantine UI",
    type: "Modern React components library for rapid UI development.",
  },

  {
    label: "Node JS",
    type: "JavaScript runtime environment for server-side",
  },
  {
    label: "Express JS",
    type: "Fast and minimalist web framework for Node.",
  },

  {
    label: "MySQL",
    type: "Relational database management system.",
  },
  {
    label: "Firebase",
    type: "Realtime database and app development platform.",
  },

  {
    label: "Git",
    type: "Version control system for collaborative code development.",
  },
  { label: "RESTful APIs", type: "Standardized interface for web services." },

  { label: "HTML", type: "Markup language for web page structure." },
  { label: "CSS", type: "Styling for web pages and apps." },
  { label: "JavaScript", type: "Scripting language for web development." },
  { label: "C", type: "Used for procedural programming" },
  { label: "Python", type: "Used for general programming" },
  { label: "C++", type: "Used for procedural programming" },
  {
    label: "C#",
    type: "Used for procedural programming and object-oriented programming",
  },
  { label: "Java", type: "Used for object-oriented programming" },
];
