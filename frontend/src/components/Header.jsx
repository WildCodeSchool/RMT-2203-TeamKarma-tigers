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
        <Flex
          gap={10}
          w="100%"
          align="center"
          justify="space-between"
          paddingX="2%"
        >
          <a href="/" width="100%">
            <Logo />
          </a>
          <Flex w="100%">
            {!isOnHome && <Searchbar width="100%" />}
            <Box>
              <Navbar width="100%" display="flex" justify="space-evenly" />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
