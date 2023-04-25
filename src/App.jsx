import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { useLocalStorage /*useFavicon*/ } from "@mantine/hooks";

import Introduction from "./components/Introduction";
import DarkModeButton from "./components/DarkModeButton";

import "./styles.css";

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });
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
        <div>
          <div style={{ position: "absolute" }}>
            <DarkModeButton />
          </div>
          <Introduction />
        </div>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
