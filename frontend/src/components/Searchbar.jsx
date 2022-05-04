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
    const searchParam = search;
    setSearch("");
    setMoviesData([]);

    return navigate(`/results/${searchParam}`);
  };

  return (
    <Container
      maxH="8vh"
      maxW="40vw"
      bg="white"
      borderRadius={15}
      marginBottom={10}
      zIndex="9999"
      position="relative"
    >
      <form onSubmit={handleSubmit}>
        <Flex align="center" marginBottom={20}>
          <Input
            placeholder="Try a new search !"
            _placeholder={{
              opacity: 1,
              color: "gray.500",
              fontSize: "3vw",
            }}
            textAlign={["center"]}
            type="text"
            variant="unstyled"
            onChange={(e) => setSearch(e.target.value)}
            fontSize="3vw"
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
        <List
          bg="white"
          overflowX="hidden"
          width="40vw"
          position="absolute"
          left="0"
          borderRadius={50}
        >
          {moviesData.length !== 0 && search !== "" && (
            <ListItem
              className="scrolling"
              style={{
                overflowY: "scroll",
                height: "50vh",
                display: "flex",
                position: "relative",
                borderRadius: "50px",
              }}
            >
              <Flex
                direction="column"
                position="absolute"
                align="space-around"
                top="0em"
                left="0"
                gap="10px"
                bgColor="white"
                w="67%"
                borderRadius="50px"
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
                        <Text
                          fontSize={{
                            base: "10px",
                            sm: "15px",
                            md: "20px",
                            lg: "30px",
                          }}
                        >
                          {movie.title}
                        </Text>
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
