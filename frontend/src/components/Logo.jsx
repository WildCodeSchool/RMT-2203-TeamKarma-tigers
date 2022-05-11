import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import LogoImg from "../assets/movieflix-logo.png";

export default function Logo() {
  return (
    <Flex align="center">
      <Image src={LogoImg} alt="logo" w="70px" />
      <Text
        fontSize={{ base: "2xl", sm: "2xl", md: "2xl", lg: "3xl" }}
        fontWeight="semibold"
        color="white"
      >
        Movieflix
      </Text>
    </Flex>
  );
}
