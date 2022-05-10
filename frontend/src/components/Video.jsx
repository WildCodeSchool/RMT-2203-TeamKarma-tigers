import React from "react";
import { Box } from "@chakra-ui/react";
import Pulse from "react-reveal/Pulse";

export default function Video({ videoInfo }) {
  return (
    <Pulse>
      <Box
        p="0"
        ml={{
          base: "0.4em",
          sm: "0.4em",
          md: "0.4em",
          lg: "0.4em",
          xl: "0.4em",
          "2xl": "0.6em",
        }}
        w={{
          base: "80vw",
          sm: "70vw",
          md: "42vw",
          lg: "30vh",
          xl: "25vw",
          "2xl": "25vw",
        }}
        h={{
          base: "17vh",
          sm: "20vh",
          md: "18vh",
          lg: "22vh",
          xl: "20vh",
          "2xl": "25vh",
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube-nocookie.com/embed/${videoInfo.key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="eager"
        />
      </Box>
    </Pulse>
  );
}
