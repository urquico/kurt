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

import { useViewportSize } from "@mantine/hooks";

import { IconBrandGithub, IconLayersLinked } from "@tabler/icons-react";

function ProjectLayout({ data }) {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const { width } = useViewportSize();
  const isMobileView = width <= 800;

  return (
    <Paper
      style={{
        width: isMobileView ? "" : "27vw",
        height: "auto",
        background: dark ? "#121212" : "#f7f2f2",
        minHeight: "70vh",
        marginTop: "4rem",
      }}
      shadow="xs"
      p="md"
    >
      <Text
        color={dark ? "gray" : "dark"}
        ta="center"
        className={data.link === "" ? "" : "text-nav"}
        onClick={data.link === "" ? "" : () => window.open(data.link, "_blank")}
        fw="bold"
        style={{ marginTop: "1rem", marginBottom: "1.500rem" }}
      >
        {data.title} {data.link === "" ? "" : <IconLayersLinked size="1rem" />}
      </Text>

      {data.thumbnail === "" ? (
        <div
          style={{
            width: "80%",
            height: "5rem",
            background: "#1B1B1B",
            margin: "auto",
            borderRadius: "10px",
          }}
        ></div>
      ) : (
        <Image
          src={data.thumbnail}
          maw={265}
          mx="auto"
          radius="md"
          style={{ marginTop: "1rem" }}
        ></Image>
      )}

      <Text
        color={dark ? "gray" : "dark"}
        style={{
          marginTop: "0.100rem",
          padding: "2rem",
          paddingBottom: "0",
          paddingTop: "1rem",
        }}
        fz="sm"
        c="dimmed"
        ta="justify"
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

      <div style={{ marginLeft: "1.90rem", marginTop: "0.500rem" }}>
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

      <div>
        <Badge
          style={{
            marginLeft: "1.90rem",
            marginTop: "0.500rem",
            backgroundColor: data.status === "on-going" ? "red" : "green",
            color: "white",
          }}
        >
          {data.status}
        </Badge>
      </div>

      {data.githubLink === "" ? (
        <Center style={{ marginTop: "auto" }}>
          <Button
            variant="transparent"
            className="text-nav links-out"
            style={{
              marginTop: "1rem",
              marginBottom: "0.500rem",
              marginLeft: "2rem",
              marginRight: "2rem",
              color: dark ? "white" : "black",
              background: "transparent",
            }}
            fullWidth
            disabled
          >
            <Text c="dimmed">No Github Repository</Text>
          </Button>
        </Center>
      ) : (
        <Center>
          <Button
            variant="outline"
            color={dark ? "gray" : "dark"}
            className="text-nav links-out"
            onClick={() => window.open(data.githubLink, "_blank")}
            leftIcon={<IconBrandGithub size="1rem" />}
            style={{
              marginTop: "1rem",
              marginBottom: "0.500rem",
              marginLeft: "2rem",
              marginRight: "2rem",
            }}
            fullWidth
          >
            View Github Repository
          </Button>
        </Center>
      )}

      {data.projectSpecs === "" ? (
        <Center style={{ marginTop: "auto" }}>
          <Button
            variant="transparent"
            className="text-nav links-out"
            style={{
              marginBottom: "2rem",
              marginLeft: "2rem",
              marginRight: "2rem",
              color: dark ? "white" : "black",
              background: "transparent",
            }}
            fullWidth
            disabled
          >
            <Text c="dimmed">No Project Specifications Available</Text>
          </Button>
        </Center>
      ) : (
        <Center>
          <Button
            variant="outline"
            color={dark ? "gray" : "dark"}
            className="text-nav links-out"
            onClick={() => window.open(data.projectSpecs, "_blank")}
            leftIcon={<IconLayersLinked size="1rem" />}
            style={{
              marginBottom: "2rem",
              marginLeft: "2rem",
              marginRight: "2rem",
            }}
            fullWidth
          >
            View Project Specifications
          </Button>
        </Center>
      )}
    </Paper>
  );
}

export default ProjectLayout;
