import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, keyframes, usePrefersReducedMotion } from "@chakra-ui/react";
import "../styles/arrow.css";

function Arrow() {
  const spin = keyframes`
  from { transform: scale(1.0); }
  to { transform: scale(1.5); }
`;
  const prefersReducedMotion = usePrefersReducedMotion();
  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 2s linear`;
  return (
    <div className="container">
      <h1>...or, you may want to see the trending Movies of this week ?</h1>
      <p className="arrows">
        <Flex direction="column" align="center">
          <ChevronDownIcon
            animation={animation}
            fontSize={{ base: "2vh", sm: "3vh", md: "4vh", lg: "5vh" }}
          />
          <ChevronDownIcon
            animation={animation}
            fontSize={{ base: "4vh", sm: "5vh", md: "6vh", lg: "7vh" }}
          />
          <ChevronDownIcon
            animation={animation}
            fontSize={{ base: "7vh", sm: "8vh", md: "9vh", lg: "10vh" }}
          />
        </Flex>
      </p>
    </div>
  );
}

export default Arrow;
