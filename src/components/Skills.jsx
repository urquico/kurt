import { useRef } from "react";
import {
  useMantineColorScheme,
  Loader,
  SimpleGrid,
  ScrollArea,
  Text,
} from "@mantine/core";
import { useIntersection } from "@mantine/hooks";

import { skillsData } from "../workdata";
import SkillLayout from "./SkillLayout";

function Skills({ skills }) {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const containerRef = useRef();

  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });

  return (
    <div
      ref={skills}
      style={{
        width: "100vw",
        height: "100vh",
        background: dark ? "black" : "white",
        color: dark ? "white" : "black",
        display: "flex",
      }}
    >
      <div ref={ref} style={{ margin: "auto" }}>
        {entry?.isIntersecting ? (
          <>
            <Text
              ta="center"
              style={{
                fontSize: "1.400rem",
                marginBottom: "2rem",
                marginTop: "2rem",
              }}
              fw="bold"
            >
              Technical Knowledge
            </Text>
            <ScrollArea h={400}>
              <SimpleGrid
                cols={4}
                spacing="xs"
                breakpoints={[
                  { maxWidth: 980, cols: 3, spacing: "md" },
                  { maxWidth: 755, cols: 2, spacing: "sm" },
                  { maxWidth: 600, cols: 1, spacing: "sm" },
                ]}
              >
                {skillsData.map((skill) => {
                  return (
                    <div key={skill}>
                      <SkillLayout label={skill.label} type={skill.type} />
                    </div>
                  );
                })}
              </SimpleGrid>
            </ScrollArea>
          </>
        ) : (
          <Loader color="dark" />
        )}
      </div>
    </div>
  );
}

export default Skills;
