import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import LogoImg from "../assets/movieflix-logo.png";

export default function Logo() {
  return (
    <Flex
      justify="flex-start"
      align="center"
      wrap={{ base: "wrap", sm: "nowrap", md: "nowrap", lg: "nowrap" }}
    >
      <Image
        src={LogoImg}
        alt="logo"
        w={{ base: "80px", sm: "110px", md: "130px", lg: "150px" }}
      />
      <Text
        fontSize={{ base: "20px", sm: "25px", md: "35px", lg: "45px" }}
        fontWeight="semibold"
        color="white"
      >
        Movieflix
      </Text>
    </Flex>
  );
}
