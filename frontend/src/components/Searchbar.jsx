import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import axios from "axios";

import {
  Input,
  InputGroup,
  InputRightElement,
  Container,
  List,
  Kbd,
  ListItem,
  InputLeftElement,
  Flex,
  CircularProgress,
  CircularProgressLabel,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import "../styles/searchbar.css";
import emptyImage from "../assets/emptyImage.svg";

function Searchbar() {
  const [moviesData, setMoviesData] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (search.length >= 1) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=20d0a760d82811eb01a3f02b31edc400&query=${search}&language=en-US&page=1&include_adult=false`
        )
        .then((response) => [setMoviesData(response.data.results)]);
    }
  }, [search]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchParam = search;
    setSearch("");
    setMoviesData([]);

    return navigate(`/results/${searchParam}`);
  };

  return (
    <Container
      bg="white"
      borderRadius="200px"
      padding={0}
      zIndex="500"
      position="relative"
      height="50px"
      minW="250px"
      w="100%"
    >
      <form onSubmit={handleSubmit}>
        <Flex align="center" marginBottom={5}>
          <InputGroup>
            <InputLeftElement
              height="-webkit-fill-available"
              paddingX="10px"
              pointerEvents="none"
            >
              <IconButton
                variant="unstyled"
                color="gray.500"
                aria-label="Search database"
                icon={<Search2Icon />}
              />
            </InputLeftElement>
            <InputRightElement
              height="-webkit-fill-available"
              width="auto"
              paddingX="10px"
            >
              {search.length >= 1 && <Kbd>enter</Kbd>}
            </InputRightElement>

            <Input
              placeholder="Try a new search !"
              textAlign={["left"]}
              type="search"
              onChange={(e) => setSearch(e.target.value)}
              borderRadius="200px"
              height="50px"
              pr="4.5rem"
            />
          </InputGroup>
        </Flex>
        {moviesData.length !== 0 && search !== "" && (
          <List
            bg="white"
            width="100%"
            boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 200px 20px, rgba(0, 0, 0, 0.3) 0px 100px 60px 20px;"
            borderRadius="35px"
            overflow="hidden"
            minW="250px"
          >
            <ListItem
              className="scrolling"
              height={{ base: "60vh" }}
              w="-webkit-fill-available"
              style={{
                overflowY: "scroll",
                display: "flex",
                position: "relative",
              }}
            >
              <Flex direction="column" gap="10px" w="-webkit-fill-available">
                {moviesData.map((movie) => (
                  <a w="100%" href={`/movies/${movie.id} `}>
                    <Flex
                      _hover={{
                        color: "teal.500",
                        bgColor: "gray.100",
                      }}
                      direction="row"
                      p={5}
                      w="100%"
                      align="center"
                      mb="10px"
                    >
                      <img
                        className="movie-img-searchbar"
                        src={
                          movie.poster_path
                            ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                            : `${emptyImage}`
                        }
                        alt="Movie poster"
                        style={{
                          maxHeight: "8vh",
                          borderRadius: "8px",
                        }}
                      />
                      <Flex
                        pl="20px"
                        justifyContent="space-between"
                        width="100%"
                        alignItems="center"
                      >
                        <Flex direction="column" alignItems="flex-start">
                          <Text
                            fontSize={{ sm: "xl", md: "'xl", base: "2xl" }}
                            align="left"
                          >
                            {movie.title}
                          </Text>
                          <Text fontSize="lg" color="gray.400">
                            {moment(movie.release_date).format("YYYY")}
                          </Text>
                        </Flex>
                        <CircularProgress
                          capIsRound
                          trackColor="gray.200"
                          boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px;"
                          thickness="17px"
                          size="50px"
                          value={movie.vote_average * 10}
                          color={
                            movie.vote_average * 10 > 70
                              ? "green"
                              : "orange.500"
                          }
                          bg="white"
                          borderRadius="200px"
                          border="1px solid white"
                        >
                          <CircularProgressLabel
                            color={
                              movie.vote_average * 10 > 70
                                ? "green.700"
                                : "orange.500"
                            }
                            fontWeight="bold"
                            fontSize="12px"
                          >
                            {movie.vote_average * 10}%
                          </CircularProgressLabel>
                        </CircularProgress>
                      </Flex>
                    </Flex>
                  </a>
                ))}
              </Flex>
            </ListItem>
          </List>
        )}
      </form>
    </Container>
  );
}

export default Searchbar;
