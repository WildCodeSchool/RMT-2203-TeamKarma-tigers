import { Link } from "react-router-dom";
import { HStack, Button } from "@chakra-ui/react";
import ModalInspiration from "./ModalInspiration";

export default function Navbar() {
  return (
    <HStack wrap="no-wrap" color="white" W="30%">
      <nav>
        <Button variant="ghost" _hover={{ bgColor: "#2B3543" }} size="lg">
          <Link to="/movies">All Movies</Link>
        </Button>
        <Button variant="ghost" _hover={{ bgColor: "#2B3543" }} size="lg">
          <Link to="/popular">Popular</Link>
        </Button>
        <ModalInspiration />
      </nav>
    </HStack>
  );
}
