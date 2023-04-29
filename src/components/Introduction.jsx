import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Text,
  useMantineColorScheme,
  Button,
  Center,
  SimpleGrid,
} from "@mantine/core";
import { useViewportSize, useMouse, useMove } from "@mantine/hooks";
import { TypeAnimation } from "react-type-animation";
import {
  IconBrandLinkedin,
  IconLayersLinked,
  IconBrandGithub,
} from "@tabler/icons-react";

import SecretWords from "./SecretWords";
import { secretWordsData } from "../workdata";

function Introduction({ introduction }) {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const { width, height } = useViewportSize();
  const isMobileView = width <= 800;

  const { x, y } = useMouse();
  const [coordinates, setCoordinates] = useState({ x: 0.94, y: 0.9 });
  const { ref, active } = useMove(setCoordinates);

  useEffect(() => {
    setCoordinates({ x: x / width, y: y / height });
  }, [x, y, height, width]);

  return (
    <div ref={introduction}>
      <div
        ref={ref}
        style={{
          display: isMobileView ? "none" : "",
          position: "absolute",
          left: `calc(${coordinates.x * 100}% - 40px)`,
          top: `calc(${coordinates.y * 100}% - 40px)`,
          width: "5rem",
          height: "5rem",
          backgroundColor: active ? "inherit" : !dark ? "#151716" : "white",
          mixBlendMode: "difference",
          borderRadius: "100%",
          pointerEvents: "none",
          zIndex: "1",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          height: "100vh",
          background: dark ? "black" : "white",
          color: dark ? "white" : "black",
        }}
      >
        {/* Dev Name */}
        <motion.div
          style={{ margin: "auto", cursor: "context-menu" }}
          initial={{ x: -1000 }}
          animate={{ x: 20 }}
        >
          <Text
            style={{
              fontSize: "4rem",
              fontFamily: dark ? "'Rubik 80s Fade'" : "'Bruno Ace SC'",
            }}
          >
            <Text
              style={{
                margin: "auto",
                marginBottom: "-1.500rem",
                marginLeft: "0.250rem",
                fontSize: "1rem",
              }}
            >
              {"Hi! I'm"}
            </Text>
            KURT JACOB URQUICO
          </Text>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4 }}
          >
            <Text
              style={{ marginTop: "-1rem" }}
              ta={isMobileView ? "" : "center"}
            >
              <TypeAnimation
                sequence={[
                  "$ ",
                  1000,
                  "$ student",
                  1000,
                  "$ programmer",
                  1000,
                  "$ cuber",
                  1000,
                  "$ developer",
                  1000,
                  "$ musician",
                  1000,
                ]}
                speed={20}
                repeat={Infinity}
              />
            </Text>
          </motion.div>
          <Center style={{ marginTop: "2rem" }}>
            <SimpleGrid
              style={{ display: "flex" }}
              breakpoints={[
                { minWidth: "sm", cols: 2 },
                { minWidth: "md", cols: 3 },
                { minWidth: 1200, cols: 4 },
              ]}
            >
              <Button
                variant="subtle"
                color={dark ? "gray" : "dark"}
                className="text-nav links-out"
                onClick={() => window.open("https://read.cv/urquico", "_blank")}
                leftIcon={<IconLayersLinked size="1rem" />}
              >
                Resume
              </Button>
              <Button
                variant="subtle"
                color={dark ? "gray" : "dark"}
                className="text-nav links-out"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/kurturquico/",
                    "_blank"
                  )
                }
                leftIcon={<IconBrandLinkedin size="1rem" />}
              >
                LinkedIn
              </Button>
              <Button
                variant="subtle"
                color={dark ? "gray" : "dark"}
                className="text-nav links-out"
                onClick={() =>
                  window.open("https://github.com/urquico", "_blank")
                }
                leftIcon={<IconBrandGithub size="1rem" />}
              >
                GitHub
              </Button>
            </SimpleGrid>
          </Center>
        </motion.div>

        {secretWordsData.map((secret) => {
          return (
            <>
              <SecretWords
                word={secret.word}
                x={secret.x}
                y={secret.y}
                audioFile={secret.audioFile}
                uniqueClass={secret.uniqueClass}
                toolTipMessage={secret.toolTipMessage}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Introduction;
