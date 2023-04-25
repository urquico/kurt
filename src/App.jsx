import { useState } from "react";
import { MantineProvider, ColorSchemeProvider, Text } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useFavicon } from "@mantine/hooks";

import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import DarkModeButton from "./components/DarkModeButton";

import "./styles.css";

function App() {
  const [colorScheme, setColorScheme] = useState("dark");
  const toggleColorScheme = () =>
    setColorScheme(colorScheme === "dark" ? "light" : "dark");

  // useFavicon(insertFavicon);

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
        <div style={{ position: "absolute", zIndex: "101" }}>
          <DarkModeButton />
        </div>
        <Carousel
          orientation="vertical"
          height={"100vh"}
          mx={"auto"}
          styles={{
            control: {
              "&[data-inactive]": {
                opacity: 0,
                cursor: "default",
              },
            },
          }}
        >
          <Carousel.Slide>
            <Introduction />
          </Carousel.Slide>
          <Carousel.Slide>
            <Projects />
          </Carousel.Slide>
        </Carousel>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
