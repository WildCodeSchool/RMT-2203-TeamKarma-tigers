import { Flex, Button, Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Logo from "./Logo";

const CTA = "Sign in";
const CTA2 = "Sign up";

export default function Header({ isOnHome }) {
  return (
    <Flex direction="column">
      <Flex
        w="100vw"
        align="center"
        justify="space-between"
        h="100px"
        zIndex="9999"
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
          <Flex mr="10px" direction="column" gap="15px">
            <Button colorScheme="teal" size="sm">
              {CTA}
            </Button>
            <Button variant="ghost" _hover={{ bgColor: "#2B3543" }} size="sm">
              {CTA2}
            </Button>
          </Flex>
        </Flex>
      </Flex>
      {!isOnHome && <Searchbar />}
    </Flex>
  );
}
