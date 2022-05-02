import React from "react";
import { Flex, Box, Select, Stack, Checkbox, Heading } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

import MovieCarousel from "../components/MovieCarousel";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AllMovies({ sortType }) {
  return (
    <Box bg="#15141f">
      <Header isOnHome={false} />
      <Flex p={5}>
        <Flex
          pos="sticky"
          p={10}
          marginTop="2.5vh"
          boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
          w="30vw"
          h="100vh"
          gap={10}
          bg="white"
          borderRadius="md"
          flexDir="column"
          justifyContent="flex-start"
          align="flex-start"
        >
          <Heading
            as="h5"
            color="#15141f"
            textAlign="left"
            pb={5}
            borderBottom="1px solid #eee"
            width="100%"
          >
            Filters
          </Heading>
          <Select
            placeholder="Select Genre"
            size="lg"
            color="#15141f"
            width="100%"
            variant="filled"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>

          <Stack width="80%" spacing={[1, 5]} direction={["column"]}>
            <Checkbox
              size="lg"
              colorScheme="teal"
              defaultChecked
              display="flex"
              align="center"
            >
              <Box display="flex" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon
                      w={4}
                      h={4}
                      color={i < 5 ? "teal.500" : "gray.300"}
                    />
                  ))}
              </Box>
            </Checkbox>
            <Checkbox size="lg" colorScheme="teal" defaultChecked>
              <Box display="flex" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon
                      w={4}
                      h={4}
                      color={i < 4 ? "teal.500" : "gray.300"}
                    />
                  ))}
              </Box>
            </Checkbox>
            <Checkbox size="lg" colorScheme="teal" defaultChecked>
              <Box display="flex" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon
                      w={4}
                      h={4}
                      color={i < 3 ? "teal.500" : "gray.300"}
                    />
                  ))}
              </Box>{" "}
            </Checkbox>
            <Checkbox size="lg" colorScheme="teal" defaultChecked>
              <Box display="flex" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon
                      w={4}
                      h={4}
                      color={i < 2 ? "teal.500" : "gray.300"}
                    />
                  ))}
              </Box>{" "}
            </Checkbox>
            <Checkbox size="lg" colorScheme="teal" defaultChecked>
              <Box display="flex" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon
                      w={4}
                      h={4}
                      color={i < 1 ? "teal.500" : "gray.300"}
                    />
                  ))}
              </Box>{" "}
            </Checkbox>
            <Checkbox size="lg" colorScheme="teal" defaultChecked>
              <Box display="flex" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon
                      w={4}
                      h={4}
                      color={i < 0 ? "teal.500" : "gray.300"}
                    />
                  ))}
              </Box>{" "}
            </Checkbox>
          </Stack>
        </Flex>

        <MovieCarousel
          type="alphabeticalMovies"
          url={`https://api.themoviedb.org/3/discover/movie?sort_by=${sortType}&include_adult=false`}
        />
      </Flex>
      <Footer />
    </Box>
  );
}

export default AllMovies;
