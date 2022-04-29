import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import LogoImg from "../assets/movieflix-logo.png";

export default function Logo() {
  return (
    <Flex justify="flex-start" align="center">
      <Image src={LogoImg} alt="logo" w="70px" />
      <Text fontSize="2xl" fontWeight="semibold">
        Movieflix
      </Text>
    </Flex>
  );
}
