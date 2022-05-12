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
          lg: "0.4em",
          xl: "0.4em",
        }}
        w={{
          base: "70vw",
          sm: "70vw",
          md: "60vw",
          lg: "30vw",
          xl: "20vw",
        }}
        h={{
          base: "20vh",
          sm: "20vh",
          lg: "22vh",
          xl: "16vh",
          "2xl": "20vh",
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
