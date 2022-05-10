import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Logo from "./Logo";

export default function Header({ isOnHome }) {
  return (
    <Flex direction="column" bg="#15141f">
      <Flex
        w="100%"
        align="center"
        justify="space-between"
        h="100px"
        zIndex="500"
        bgGradient={
          isOnHome
            ? "linear-gradient(to bottom, rgba(0,2,10,0.8),transparent)"
            : null
        }
        position={isOnHome ? "fixed" : "relative"}
      >
        <Flex gap={10} w="100%" align="center" justify="space-between">
          <a href="/">
            <Logo />
          </a>
          <Box ml={{ base: "20px", sm: "45px" }}>
            <Navbar />
          </Box>
        </Flex>
      </Flex>
      {!isOnHome && <Searchbar />}
    </Flex>
  );
}
