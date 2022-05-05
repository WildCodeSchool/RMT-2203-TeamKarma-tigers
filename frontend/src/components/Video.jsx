import React from "react";
import { Box } from "@chakra-ui/react";
import Pulse from "react-reveal/Pulse";

export default function Video({ videoInfo }) {
  return (
    <Pulse>
      <Box
        p="0"
        ml={{
          sm: "0.4em",
          md: "0.4em",
          lg: "0.4em",
          xl: "0.4em",
          "2xl": "0.4em",
        }}
        w={{ xl: "15vw", "2xl": "15vw" }}
        h={{ lg: "16vh", xl: "13vh", "2xl": "15vh" }}
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
