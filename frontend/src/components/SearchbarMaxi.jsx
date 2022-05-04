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
      maxH="8vh"
      maxW="80vw"
      bg="white"
      borderRadius={15}
      opacity="0.8"
      marginBottom={40}
    >
      <form onSubmit={handleSubmit}>
        <Flex align="center" marginBottom={20}>
          <Input
            placeholder="Lookin' for a movie ?"
            _placeholder={{
              opacity: 1,
              color: "gray.500",
              fontSize: "3vw",
              verticalAlign: "middle",
            }}
            textAlign={["center"]}
            type="text"
            variant="unstyled"
            onChange={(e) => setSearch(e.target.value)}
            fontSize="3vw"
          />
          {search.length >= 1 && (
            <IconButton
              fontSize="3vw"
              variant="unstyled"
              colorScheme="blue"
              aria-label="Search database"
              icon={<SearchIcon />}
              onClick={handleSubmit}
            />
          )}
        </Flex>
        <List bg="white" overflowX="hidden" w="80vw" borderRadius="19px">
          {moviesData.length !== 0 && search !== "" && (
            <ListItem
              p="16px"
              className="scrolling"
              style={{
                overflowY: "scroll",
                maxHeight: "35vh",
                display: "flex",
              }}
            >
              <Flex
                direction="column"
                position="relative"
                w="100%"
                align="space-around"
                margin="auto 50%"
                transform="translateX(-50%)"
                gap="10px"
              >
                {moviesData.map((movie) => (
                  <a w="100%" href={`/movies/${movie.id} `}>
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
                          maxHeight: "12vh",
                          borderRadius: "15px",
                        }}
                      />
                      <Flex pl="20px">
                        <Text fontSize="2.5vw">{movie.title}</Text>
                      </Flex>
                    </Flex>
                  </a>
                ))}
              </Flex>
            </ListItem>
          )}
        </List>
      </form>
    </Container>
  );
}

export default Searchbar;
