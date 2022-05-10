import { Link } from "react-router-dom";
import { Flex, Button, HStack } from "@chakra-ui/react";
import ModalInspiration from "./ModalInspiration";

export default function Navbar() {
  return (
    <Flex wrap="wrap" color="white" W="100%" justify="space-evenly">
      <HStack W="100%" gap="6px" justify="space-evenly">
        <Button variant="ghost" _hover={{ bgColor: "#2B3543" }} size="lg">
          <Link to="/movies">All Movies</Link>
        </Button>
        <Button variant="ghost" _hover={{ bgColor: "#2B3543" }} size="lg">
          <Link to="/popular">Popular</Link>
        </Button>
        <ModalInspiration />
      </HStack>
    </Flex>
  );
}
