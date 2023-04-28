import { useState, useRef } from "react";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
// import { useFavicon } from "@mantine/hooks";

import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import About from "./components/About";
import DarkModeButton from "./components/DarkModeButton";
import ScrollButton from "./components/ScrollButton";

import "./styles.css";
import Skills from "./components/Skills";

function App() {
  const [colorScheme, setColorScheme] = useState("dark");
  const toggleColorScheme = () =>
    setColorScheme(colorScheme === "dark" ? "light" : "dark");

  // useFavicon(insertFavicon);

  const introduction = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const skills = useRef(null);

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
        <div style={{ position: "fixed", zIndex: "101", width: "100vw" }}>
          <DarkModeButton />
          <div
            style={{
              display: "flex",
              placeContent: "center",
              justifyContent: "space-evenly",
              marginTop: "1rem",
            }}
          >
            <div style={{}}>
              <ScrollButton targetRef={introduction} label={"Kurt"} />
            </div>

            <div style={{ display: "flex" }}>
              <ScrollButton targetRef={about} label={"About"} />
              <ScrollButton targetRef={projects} label={"Projects"} />
              <ScrollButton targetRef={skills} label={"Tech Skills"} />
            </div>
          </div>
        </div>

        <Introduction introduction={introduction} />
        <About about={about} />
        <Projects projects={projects} />
        <Skills skills={skills} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
