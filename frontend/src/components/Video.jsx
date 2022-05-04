import React from "react";
import { Box } from "@chakra-ui/react";
import Pulse from "react-reveal/Pulse";

export default function Video({ videoInfo }) {
  return (
    <Pulse>
      <Box
        ml={{ "2xl": "0.4em" }}
        w={{ xl: "15vw", "2xl": "15.5vw" }}
        h={{ xl: "17vh", "2xl": "25vh" }}
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
