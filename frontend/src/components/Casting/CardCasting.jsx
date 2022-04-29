import React from "react";
import { Container, Flex, Text, Box, Image } from "@chakra-ui/react";
import emptyImage from "../../assets/emptyImage.svg";

function CardCasting({ cast }) {
  return (
    <Container minW="250px">
      <Flex
        border="1px"
        borderRadius="30px"
        flexDirection="column"
        align="center"
        minH="400px"
      >
        <Image
          src={
            cast.profile_path
              ? `https://image.tmdb.org/t/p/w200/${cast.profile_path}`
              : `${emptyImage}`
          }
          alt=""
          borderTopRadius="28px"
          w="250px"
          h="324px"
        />
        <Box mt="12px">
          <Text fontSize="lg" fontWeight="bold">
            {cast.name}
          </Text>
          <Text>{cast.character}</Text>
        </Box>
      </Flex>
    </Container>
  );
}

export default CardCasting;
