import { useRef } from "react";
import { useMantineColorScheme, Loader } from "@mantine/core";
import { useIntersection } from "@mantine/hooks";

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
          <Carousel
            maw={1000}
            mx="auto"
            withIndicators
            height={"auto"}
            slideSize="33.333333%"
            slideGap="md"
            loop
            align="start"
          >
            {works?.map((work) => {
              return (
                <Carousel.Slide key={work}>
                  <ProjectLayout data={work} />
                </Carousel.Slide>
              );
            })}
            {/* ...other slides */}
          </Carousel>
        ) : (
          <Loader color="dark" />
        )}
      </div>
    </div>
  );
}

export default Projects;
