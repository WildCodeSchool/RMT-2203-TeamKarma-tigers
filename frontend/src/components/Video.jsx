import React from "react";
import { Box } from "@chakra-ui/react";
import Pulse from "react-reveal/Pulse";

export default function Video({ videoInfo }) {
  return (
    <Pulse>
      <Box w="100%">
        <iframe
          width="250"
          height="190"
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
