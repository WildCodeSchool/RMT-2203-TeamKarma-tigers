import { Heading } from "@chakra-ui/react";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "../styles/arrow.css";

function Arrow() {
  return (
    <div className="container">
      <AnchorLink href="#stuff">
        <Heading
          id="trend-text"
          fontSize={{ base: "20px", sm: "25px", md: "30px", lg: "40px" }}
          ml="40px"
          mr="40px"
        >
          Click me if you want to see the trending Movies of this week !
        </Heading>
      </AnchorLink>
    </div>
  );
}

export default Arrow;
