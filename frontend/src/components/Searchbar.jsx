import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Input,
  Container,
  List,
  ListItem,
  Flex,
  IconButton,
  Box,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
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
    return navigate(`/results/${search}`);
  };

  return (
    <Container
      h="50px"
      w="50%"
      bg="white"
      zIndex="9999"
      borderRadius={15}
      opacity="0.8"
    >
      <form onSubmit={handleSubmit}>
        <Flex>
          <Input
            placeholder="Searching a movie ?"
            _placeholder={{
              opacity: 1,
              color: "gray.500",
              h: "100px",
            }}
            textAlign={["center"]}
            type="text"
            variant="unstyled"
            onChange={(e) => setSearch(e.target.value)}
          />
          {search.length >= 1 && (
            <IconButton
              variant="unstyled"
              colorScheme="blue"
              aria-label="Search database"
              icon={<SearchIcon />}
              onClick={handleSubmit}
            />
          )}
        </Flex>
      </form>
      <List
        bg="white"
        h="auto"
        overflowX="hidden"
        w="100%"
        borderRadius="19px"
        marginTop="1rem"
      >
        {moviesData.length !== 0 && search !== "" && (
          <Box
            className="scrolling"
            style={{ overflowY: "scroll", height: "35vh" }}
          >
            <ListItem p="16px">
              <Flex
                direction="column"
                align="start"
                position="relative"
                w="100%"
                justify="space-between"
              >
                {moviesData.map((movie) => (
                  <a href={`/movies/${movie.id} `}>
                    <Flex
                      _hover={{
                        transform: "scale(1.03)",
                        color: "teal.500",
                        borderRadius: "10px",
                      }}
                      direction="row"
                      w="100%"
                      align="center"
                      mb="10px"
                      fontSize="1.3rem"
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
                          maxWidth: "10vw",
                          borderRadius: "15px",
                          zIndex: "9999",
                        }}
                      />
                      <Flex pl="20px" zIndex="9999">
                        <Text fontSize="1.2vw">{movie.title}</Text>
                      </Flex>
                    </Flex>
                  </a>
                ))}
              </Flex>
            </ListItem>
          </Box>
        )}
      </List>
    </Container>
  );
}

export default Searchbar;
