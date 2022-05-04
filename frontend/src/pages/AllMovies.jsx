// import React, { useState, useEffect } from "react";
import { Flex, Box, Stack, Checkbox, Heading } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

import MovieCarousel from "../components/MovieCarousel";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import getGenreList from "../services/GetGenreList";
// import GenreFilter from "../components/GenreFilter";

function AllMovies({ sortType }) {
  // const [dropDownGenre, setDropDownGenre] = useState([]);
  // const [filtered, setFiltered] = useState(null);

  const showStarRating = (rating) => {
    return (
      <Box display="flex" alignItems="center">
        {Array(5)
          .fill("")
          .map((_, i) => (
            <StarIcon
              w={4}
              h={4}
              color={i < rating - 1 ? "teal.500" : "gray.300"}
            />
          ))}
      </Box>
    );
  };

  // useEffect(() => {
  //   getGenreList().then((result) => setDropDownGenre(result));
  // }, []);

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
          minW="30%"
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
          {/* <GenreFilter /> */}
          {/* <Select
            placeholder="All Genres"
            size="lg"
            color="#15141f"
            width="100%"
            variant="filled"
            onChange={(event) => {
              setFiltered(event.target.value);
              debugger;
            }}
          >
            {dropDownGenre.map((genre) => (
              <option value={genre.id}>{genre.id}</option>
            ))}
          </Select> */}

          <Stack width="80%" spacing={[1, 5]} direction={["column"]}>
            <Checkbox
              size="lg"
              colorScheme="teal"
              defaultChecked
              display="flex"
              align="center"
            >
              {showStarRating(5)}
            </Checkbox>
            <Checkbox size="lg" colorScheme="teal" defaultChecked>
              {showStarRating(4)}
            </Checkbox>
            <Checkbox size="lg" colorScheme="teal" defaultChecked>
              {showStarRating(3)}
            </Checkbox>
            <Checkbox size="lg" colorScheme="teal" defaultChecked>
              {showStarRating(2)}
            </Checkbox>
            <Checkbox size="lg" colorScheme="teal" defaultChecked>
              {showStarRating(1)}
            </Checkbox>
            <Checkbox size="lg" colorScheme="teal" defaultChecked>
              {showStarRating(0)}
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
