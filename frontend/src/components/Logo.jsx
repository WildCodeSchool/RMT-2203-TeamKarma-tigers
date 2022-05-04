import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import LogoImg from "../assets/movieflix-logo.png";

export default function Logo() {
  return (
    <Flex align="center">
      <Image
        src={LogoImg}
        alt="logo"
        w={{ base: "60px", sm: "70px", md: "100px", lg: "150px" }}
      />
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
