import React from "react";
import { Box, Flex, HStack } from "@chakra-ui/react";

export default function Video({ videoInfo }) {
  return (
    <div>
      <HStack spacing="20px">
        <Box rounded="md" w="full" _hover="scale(1.5)" mt="5rem">
          <iframe
            width="400"
            height="315"
            src={`https://www.youtube-nocookie.com/embed/${videoInfo.key}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Box>
      </HStack>
    </div>
  );
}
