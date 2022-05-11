import { Link } from "react-router-dom";
import { Flex, Button, HStack } from "@chakra-ui/react";
import ModalInspiration from "./ModalInspiration";

export default function Navbar() {
  return (
    <Flex wrap="wrap" color="white" W="100%" justify="space-evenly">
      <HStack gap="10px" justify="space-evenly">
        <Link to="/movies">
          <Button
            variant="ghost"
            _hover={{ bgColor: "#2B3543" }}
            size={{ base: "sm", lg: "lg" }}
            p={{ base: "10px", lg: "15px" }}
          >
            All Movies
          </Button>
        </Link>
        <Link to="/popular">
          <Button
            variant="ghost"
            _hover={{ bgColor: "#2B3543" }}
            size={{ base: "sm", lg: "lg" }}
            p={{ base: "10px", lg: "15px" }}
          >
            Popular
          </Button>
        </Link>
        <ModalInspiration />
      </HStack>
    </Flex>
  );
}
