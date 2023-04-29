import { Text, Center, useMantineColorScheme, Paper } from "@mantine/core";
import { TypeAnimation } from "react-type-animation";

function SkillLayout({ label }) {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const generateRandomString = (length) => {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  };

  const generateShuffledString = (str) => {
    const arr = str.split("");
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join("");
  };

  const randomString = generateRandomString(7);
  const shuffledString = generateShuffledString(label);

  return (
    <Paper
      shadow="xs"
      p="md"
      style={{
        background: dark ? "#1B1B1B" : "white",
        color: dark ? "white" : "black",
      }}
    >
      <Center>
        <Text c="dimmed">
          <TypeAnimation
            style={{
              whiteSpace: "pre-line",
            }}
            sequence={[
              `$ ${randomString}`,
              1000,
              `$ ${shuffledString}`,
              1000,
              `$ ${label}`,
            ]}
            speed={50}
            cursor={false}
          />
        </Text>
      </Center>
    </Paper>
  );
}

export default SkillLayout;
