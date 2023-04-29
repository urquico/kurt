import { useRef } from "react";
import { useMantineColorScheme, Loader } from "@mantine/core";
import { useIntersection, useViewportSize } from "@mantine/hooks";

import ProjectLayout from "./ProjectLayout";

import { works } from "../workdata";
import { Carousel } from "@mantine/carousel";

function Projects({ projects }) {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const containerRef = useRef();

  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });

  const { width } = useViewportSize();
  const isMobileView = width <= 800;

  console.log(works);

  return (
    <div
      ref={projects}
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
          isMobileView ? (
            <Carousel
              maw={400}
              mx={"auto"}
              withIndicators
              height={500}
              slideSize="70%"
              slideGap="md"
            >
              {works?.map((work) => {
                return (
                  <Carousel.Slide key={work} size="100%">
                    <ProjectLayout data={work} />
                  </Carousel.Slide>
                );
              })}
            </Carousel>
          ) : (
            <Carousel
              maw={1000}
              mx="auto"
              withIndicators
              height={"auto"}
              slideSize="33.333333%"
              slideGap="md"
              dragFree
            >
              {works?.map((work) => {
                return (
                  <Carousel.Slide key={work}>
                    <ProjectLayout data={work} />
                  </Carousel.Slide>
                );
              })}
            </Carousel>
          )
        ) : (
          <Loader color="dark" />
        )}
      </div>
    </div>
  );
}

export default Projects;
