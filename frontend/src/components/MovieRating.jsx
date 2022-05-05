import { Box } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export default function MovieRating({ movie }) {
  return (
    <Box key={movie.id} display="flex" mt="2" alignItems="center">
      {new Array(5).fill("").map((_, i) => (
        <StarIcon
          w={4}
          h={4}
          key={movie.id}
          color={
            i < Math.round(movie.vote_average / 2) ? "teal.500" : "gray.300"
          }
        />
      ))}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {movie.vote_count} reviews
      </Box>
    </Box>
  );
}
