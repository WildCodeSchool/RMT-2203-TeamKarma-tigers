import React from "react";
import { Container, Flex, Text, Box, Image } from "@chakra-ui/react";
import emptyImage from "../../assets/emptyImage.svg";

function CardCasting({ cast }) {
  return (
    <Container border="1px">
      <Flex border="1px" flexDirection="column" align="center">
        <Image
          src={
            cast.profile_path
              ? `https://image.tmdb.org/t/p/w200/${cast.profile_path}`
              : `${emptyImage}`
          }
          alt=""
          width="200px"
          borderRadius="30px"
        />
        <Box>
          <Text>{cast.name}</Text>
          <Text>{cast.character}</Text>
        </Box>
      </Flex>
    </Container>
  );
}

export default CardCasting;
