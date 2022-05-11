import { Flex } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Logo from "./Logo";

export default function Header({ isOnHome }) {
  return (
    <Flex direction="column" bgColor="transparent" w="-webkit-fill-available">
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
          gap={{ base: "0", lg: "10" }}
          w="100%"
          align="center"
          justify="space-between"
          paddingX="2%"
          direction={{ base: "column", lg: "row" }}
        >
          <a href="/" width="50%">
            <Logo />
          </a>
          <Flex width="60%" justify={{ base: "center", lg: "flex-end" }}>
            {!isOnHome && <Searchbar />}
            <Navbar display="flex" justify="space-evenly" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
