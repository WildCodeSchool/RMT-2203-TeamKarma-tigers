import React from "react";
import { Box } from "@chakra-ui/react";
import Pulse from "react-reveal/Pulse";

export default function Video({ videoInfo }) {
  return (
    <div>
      <Pulse>
        <Box borderRadius={15} w="full" mt="5rem" pl="1rem">
          <iframe
            width="400"
            height="315"
            src={`https://www.youtube-nocookie.com/embed/${videoInfo.key}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="eager"
          />
        </Box>
      </Pulse>
    </div>
  );
}
