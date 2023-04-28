import {} from "react";
import {
  useMantineColorScheme,
  Paper,
  Text,
  Image,
  Button,
  Center,
  Badge,
} from "@mantine/core";
import { TypeAnimation } from "react-type-animation";

import { IconBrandGithub, IconLayersLinked } from "@tabler/icons-react";

function ProjectLayout({ data }) {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  console.log(data);

  return (
    <Paper
      style={{
        width: "27vw",
        height: "auto",
        background: dark ? "#121212" : "#f7f2f2",
        minHeight: "70vh",
      }}
      shadow="xs"
      p="md"
    >
      <Text
        color={dark ? "gray" : "dark"}
        ta="center"
        className="text-nav"
        onClick={() => window.open(data.link, "_blank")}
        fw="bold"
        style={{ marginTop: "1rem", marginBottom: "1.500rem" }}
      >
        {data.title} <IconLayersLinked size="1rem" />
      </Text>

      <Image
        src={data.thumbnail}
        maw={200}
        mx="auto"
        radius="md"
        style={{ marginTop: "1rem" }}
      ></Image>
      <Text
        color={dark ? "gray" : "dark"}
        style={{ marginTop: "0.100rem", padding: "2rem", paddingBottom: "0" }}
        fz="sm"
        c="dimmed"
        ta="left"
        tt="lowercase"
      >
        <TypeAnimation
          style={{
            whiteSpace: "pre-line",
          }}
          sequence={[" ", 1000, `${data.description}`]}
          speed={data.speed}
          cursor={false}
        />
      </Text>

      <div style={{ marginLeft: "1.90rem" }}>
        {data.tech.map((tech) => {
          return (
            <Badge
              key={tech}
              style={{ marginRight: "0.200rem" }}
              color="gray"
              variant="outline"
            >
              {tech}
            </Badge>
          );
        })}
      </div>

      {data.githubLink === "" ? (
        ""
      ) : (
        <Center>
          <Button
            variant="outline"
            color={dark ? "gray" : "dark"}
            className="text-nav links-out"
            onClick={() => window.open(data.githubLink, "_blank")}
            leftIcon={<IconBrandGithub size="1rem" />}
            style={{
              marginTop: "2.200rem",
              marginBottom: "1rem",
              marginLeft: "2rem",
              marginRight: "2rem",
            }}
            fullWidth
          >
            View Github Repository
          </Button>
        </Center>
      )}
    </Paper>
  );
}

export default ProjectLayout;
