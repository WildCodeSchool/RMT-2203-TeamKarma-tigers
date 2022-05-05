import { Link } from "react-router-dom";
import { HStack, Button } from "@chakra-ui/react";
import ModalInspiration from "./ModalInspiration";

export default function Navbar() {
  return (
    <HStack spacing="5" wrap="nowrap" color="white">
      <nav>
        <Button variant="ghost" size="lg" _hover={{ bgColor: "#2B3543" }}>
          <Link to="/movies">All Movies</Link>
        </Button>
        <Button variant="ghost" _hover={{ bgColor: "#2B3543" }}>
          <Link to="/popular">Popular</Link>
        </Button>
        <ModalInspiration />
      </nav>
    </HStack>
  );
}
