import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import LogoImg from "../assets/movieflix-logo.png";

export default function Logo() {
  return (
    <Flex align="center">
      <Image src={LogoImg} alt="logo" w="70px" />
      <Text
        fontSize={{ base: "15px", sm: "20px", md: "35px", lg: "45px" }}
        fontWeight="semibold"
        color="white"
      >
        Movieflix
      </Text>
    </Flex>
  );
}
