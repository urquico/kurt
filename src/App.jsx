import { useState, useRef } from "react";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
// import { useFavicon } from "@mantine/hooks";

import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";

import DarkModeButton from "./components/DarkModeButton";
import ScrollButton from "./components/ScrollButton";

import "./styles.css";

function App() {
  const [colorScheme, setColorScheme] = useState("dark");
  const toggleColorScheme = () =>
    setColorScheme(colorScheme === "dark" ? "light" : "dark");

  // useFavicon(insertFavicon);

  const [isHome, setIsHome] = useState(true);
  const [isAbout, setIsAbout] = useState(false);
  const [isProject, setIsProject] = useState(false);
  const [isSkill, setIsSkill] = useState(false);
  const [isContacts, setIsContacts] = useState(false);

  const introduction = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const skills = useRef(null);
  const contacts = useRef(null);

  const homeLink = () => {
    setIsHome(true);
    setIsAbout(false);
    setIsProject(false);
    setIsSkill(false);
    setIsContacts(false);
  };
  const aboutLink = () => {
    setIsHome(false);
    setIsAbout(true);
    setIsProject(false);
    setIsSkill(false);
    setIsContacts(false);
  };
  const projectsLink = () => {
    setIsHome(false);
    setIsAbout(false);
    setIsProject(true);
    setIsSkill(false);
    setIsContacts(false);
  };
  const skillsLink = () => {
    setIsHome(false);
    setIsAbout(false);
    setIsProject(false);
    setIsSkill(true);
    setIsContacts(false);
  };

  const contactsLink = () => {
    setIsHome(false);
    setIsAbout(false);
    setIsProject(false);
    setIsSkill(false);
    setIsContacts(true);
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          ...colorScheme,
        }}
      >
        <div
          style={{
            position: "fixed",
            zIndex: "101",
            width: "100vw",
          }}
        >
          <DarkModeButton />
          <div
            style={{
              display: "flex",
              placeContent: "center",
              justifyContent: "space-evenly",
            }}
          >
            <div
              onClick={homeLink}
              className={isHome ? "links-container-active" : "links-container"}
            >
              <ScrollButton targetRef={introduction} label={"Kurt"} />
            </div>

            <div style={{ display: "flex" }}>
              <div
                onClick={aboutLink}
                className={
                  isAbout ? "links-container-active" : "links-container"
                }
              >
                <ScrollButton targetRef={about} label={"About"} />
              </div>
              <div
                onClick={projectsLink}
                className={
                  isProject ? "links-container-active" : "links-container"
                }
              >
                <ScrollButton targetRef={projects} label={"Projects"} />
              </div>
              <div
                onClick={skillsLink}
                className={
                  isSkill ? "links-container-active" : "links-container"
                }
              >
                <ScrollButton targetRef={skills} label={"Tech Stacks"} />
              </div>
              {/* <div
                onClick={contactsLink}
                className={
                  isContacts ? "links-container-active" : "links-container"
                }
              >
                <ScrollButton targetRef={contacts} label={"Contacts"} />
              </div> */}
            </div>
          </div>
        </div>

        <Introduction introduction={introduction} />
        <About about={about} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        {/* <Contacts contacts={contacts} /> */}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
