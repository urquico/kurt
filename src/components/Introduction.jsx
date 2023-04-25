import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Text, useMantineColorScheme, Code, Box } from "@mantine/core";
import { useViewportSize, useMouse, useMove } from "@mantine/hooks";

import SecretWords from "./SecretWords";
import { secretWordsData } from "../workdata";

function Introduction() {
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

  console.log(active);

  return (
    <>
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
        }}
      ></div>
      {/* <div
        style={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <hr
          style={{
            position: "absolute",
            height: y - 20,
            width: x - 20,
            top: "2%",
            left: "1.5%",
            // color: "black ",
            // color: colorScheme === "dark" ? "black" : "#151716",
            // width: "0.010rem",
            transform: `rotate(-45deg) translate(0%, 90%) skew(${x}deg, ${y}deg)`,
            // display: localStorage.getItem("path") ? "none" : "",
          }}
        />
      </div> */}
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
            KURT JACOB E. URQUICO
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
              <Code color="black">
                student | programmer | developer | cuber | musician
              </Code>
            </Text>
            <Text style={{ marginTop: "0" }} ta={isMobileView ? "" : "center"}>
              <Code>{`{ x: ${x}, y: ${y} }`}</Code>
            </Text>
          </motion.div>
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
    </>
  );
}

export default Introduction;
