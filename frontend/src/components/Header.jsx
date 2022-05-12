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
        h={{ base: "", lg: "100px" }}
        zIndex="500"
        bgGradient={
          isOnHome
            ? "linear-gradient(to bottom, rgba(0,2,10,0.5),rgba(0,2,10,0.5))"
            : null
        }
        position={isOnHome ? "fixed" : "relative"}
      >
        <Flex
          gap={{ base: "0", lg: "6" }}
          w="100%"
          align="center"
          justify="space-between"
          paddingX="2%"
          direction={{ base: "column", lg: "row" }}
        >
          <a href="/" width="50%">
            <Logo />
          </a>
          <Flex
            width={!isOnHome ? "60%" : "auto"}
            gap={{ base: "10", lg: "6" }}
            align={{ base: "center", lg: "flex-end" }}
            direction={{ base: "column", lg: "row" }}
          >
            {!isOnHome && <Searchbar />}
            <Navbar display="flex" justify="space-evenly" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
