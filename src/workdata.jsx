// import SecretWords from "./components/SecretWords";
import weirdFishes from "../src/assets/weirdFishes.mp3";
import loveSong from "../src/assets/lovesong.mp3";
import loveWillTearUsApart from "../src/assets/loveWillTearUsApart.mp3";
import allApologies from "../src/assets/allApologies.mp3";

export const works = [
  {
    link: "",
    thumbnail: "",
    title: "One Man Merchandising System",
    description:
      "A Desktop Application for one man \nmerchandising located at Scout De Guia, Quezon City",
    tech: ["React", "Vite", "Electron", "Node", "REST", "MySQL"],
    githubLink: "",
    speed: 50,
    status: "on-going",
  },
  {
    link: "https://haribon-e-wall.web.app/",
    thumbnail:
      "https://lh3.googleusercontent.com/pw/AJFCJaXPItFzPgS1w93kluFOPURffyxm25Y6A-lr77gv4NZnMv9BuUfRd3CrzQGS8bb7qakxAVs0XexEmlwPIekw9Nao6hLpotNnCLZ8dpVfwWO8Hw_iTC4=w2400",
    title: "Haribon E-Wall (Grievance Forum)",
    description:
      "A project for software engineering in \nPamantasan ng Lungsod ng Maynila",
    tech: ["Firebase", "REST", "React", "Node"],
    githubLink: "",
    speed: 30,
    status: "deployed",
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

export const photo = ["../src/assets/sultan.jpeg", "../src/assets/black.png"];
