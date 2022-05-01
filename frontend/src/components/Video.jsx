import React from "react";
import { Box } from "@chakra-ui/react";
import Pulse from "react-reveal/Pulse";

export default function Video({ videoInfo }) {
  return (
    <div>
      <Pulse>
        <Box
          rounded="md"
          w="full"
          _hover={{ transform: "scale(1.2)" }}
          mt="5rem"
        >
          <iframe
            width="400"
            height="315"
            src={`https://www.youtube-nocookie.com/embed/${videoInfo.key}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            rounded="full"
            loading="eager"
          />
        </Box>
      </Pulse>
    </div>
  );
}
