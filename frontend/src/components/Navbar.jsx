import { Link } from "react-router-dom";
import { HStack, Button } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <HStack wrap="nowrap" color="white">
      <nav>
        <Button
          variant="ghost"
          _hover={{ bgColor: "#2B3543" }}
          fontSize={{ base: "15px", sm: "20px", md: "25px", lg: "30px" }}
        >
          <Link to="/movies">All Movies</Link>
        </Button>
        <Button
          variant="ghost"
          _hover={{ bgColor: "#2B3543" }}
          fontSize={{ base: "15px", sm: "20px", md: "25px", lg: "30px" }}
        >
          <Link to="/popular">Popular</Link>
        </Button>
        <Button
          variant="ghost"
          _hover={{ bgColor: "#2B3543" }}
          fontSize={{ base: "15px", sm: "20px", md: "25px", lg: "30px" }}
        >
          <Link to="/movies">What should I Watch?</Link>
        </Button>
      </nav>
    </HStack>
  );
}
