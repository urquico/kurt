import { useEffect } from "react";
import { Text, useMantineColorScheme, Tooltip } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import useSound from "use-sound";

function SecretWords({ word, x, y, audioFile, uniqueClass, toolTipMessage }) {
  const [playSound, { stop }] = useSound(audioFile, { volume: 0.3 });

  const { hovered, ref } = useHover();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  useEffect(() => {
    if (hovered) {
      playSound();
    } else {
      stop();
    }
  }, [hovered, playSound, stop]);

  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        top: x + "%",
        left: y + "%",
        transform: "translate(-50%, -50%)",
        width: "auto",
        height: "auto",
        padding: "1rem",
        paddingBottom: "1.0rem",
        color: dark ? "black" : "#151716",
      }}
    >
      <Tooltip label={toolTipMessage}>
        <Text fz="lg" fw="bold" className={uniqueClass}>
          {word}
        </Text>
      </Tooltip>
    </div>
  );
}

export default SecretWords;
