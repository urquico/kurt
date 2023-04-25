import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconBulbOff, IconBulb } from "@tabler/icons-react";

function DarkModeButton() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <div>
      <ActionIcon
        style={{ margin: "0.400rem" }}
        variant="transparent"
        color={dark ? "yellow" : "blue"}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
      >
        {dark ? <IconBulbOff size={18} /> : <IconBulb size={18} />}
      </ActionIcon>
    </div>
  );
}

export default DarkModeButton;
