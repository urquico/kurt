import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { useMantineColorScheme, Text, Image, Loader } from "@mantine/core";
import { useIntersection, useViewportSize } from "@mantine/hooks";
import { Carousel } from "@mantine/carousel";

import { photo } from "../workdata";

function About({ about }) {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const containerRef = useRef();

  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });

  const { width } = useViewportSize();
  const isMobileView = width <= 800;

  return (
    <div
      ref={about}
      style={{
        width: "100vw",
        height: "100vh",
        background: dark ? "black" : "white",
        display: "flex",
        color: dark ? "white" : "black",
      }}
    >
      <div ref={ref} style={{ margin: "auto" }}>
        {entry?.isIntersecting ? (
          <div
            style={{ width: "100vw", display: "flex", flexDirection: "column" }}
          >
            <Carousel
              style={{ width: isMobileView ? "80vw" : "20vw", margin: "auto" }}
            >
              {photo.map((image) => {
                return (
                  <Carousel.Slide key={image}>
                    <Image src={image} />
                  </Carousel.Slide>
                );
              })}
            </Carousel>
            <Text ta="center" style={{ zIndex: "100", marginTop: "1rem" }}>
              <TypeAnimation
                style={{
                  whiteSpace: "pre-line",
                }}
                sequence={[
                  "$ ",
                  1000,
                  "$ Thriving as a student in computer science,",
                  1000,
                  "$ I developed a fascination with Web and Web3 technologies.",
                  1000,
                  "$ I'm also Interested in design principles \nand innovations of automation.",
                  1000,
                  "$ As a student programmer,",
                  1000,
                  "$ I created technologies where I utilized my earned skills \nand knowledge within the past few years. ",
                  1000,
                  "$  I aspire to become a Full-Stack Developer for social good",
                ]}
                speed={50}
              />
            </Text>
          </div>
        ) : (
          <Loader color="dark" />
        )}
      </div>
    </div>
  );
}

export default About;
