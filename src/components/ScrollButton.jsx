import { Text, useMantineColorScheme } from "@mantine/core";

function ScrollButton({ targetRef, label }) {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const handleClick = () => {
    targetRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Text
      onClick={handleClick}
      className={"text-nav"}
      style={{
        cursor: "pointer",
        color: dark ? "gray" : "black",
        marginLeft: "1rem",
      }}
      ta="center"
    >
      {label}
    </Text>
  );
}

export default ScrollButton;
