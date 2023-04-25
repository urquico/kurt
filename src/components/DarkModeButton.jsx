import { useState } from "react";
import { ActionIcon, useMantineColorScheme, Tooltip } from "@mantine/core";
import { useIdle } from "@mantine/hooks";
import { IconBulb, IconBulbOff } from "@tabler/icons-react";
import useSound from "use-sound";
import lightSwitch from "../assets/lightSwitchSound.mp3";
import brokenLight from "../assets/brokenLight.mp3";

function DarkMode() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [playSound] = useSound(lightSwitch, { volume: 0.3 });
  const [playBrokenSound] = useSound(brokenLight, { volume: 0.3 });
  const [clickCount, setClickCount] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const idle = useIdle(2000);

  const dark = colorScheme === "dark";

  if (idle && !dark) {
    toggleColorScheme();
    playSound();
  }

  if (!dark && clickCount >= 20) {
    toggleColorScheme();
  }

  const toggleDarkMode = () => {
    toggleColorScheme();
    playSound();
    setClickCount(clickCount + 1);

    if (clickCount >= 20) {
      playBrokenSound();
      setIsHidden(true);
    }
  };

  return (
    <>
      <Tooltip
        label={
          dark ? "click to turn off the lights" : "click to turn on the lights"
        }
        style={{ display: isHidden ? "none" : "show" }}
      >
        <ActionIcon
          style={{
            margin: "0.400rem",
            zIndex: "999",
            display: isHidden ? "none" : "show",
          }}
          variant="transparent"
          color={dark ? "yellow" : "blue"}
          onClick={toggleDarkMode}
        >
          {dark ? <IconBulb size={18} /> : <IconBulbOff size={18} />}
        </ActionIcon>
      </Tooltip>
    </>
  );
}

export default DarkMode;
