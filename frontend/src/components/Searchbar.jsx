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
      h="40px"
      w="50%"
      bg="white"
      zIndex="9999"
      borderRadius={15}
      color="black"
    >
      <form onSubmit={handleSubmit} w="100%">
        <Flex>
          <Input
            placeholder="Searching a movie ?"
            _placeholder={{ opacity: 1, color: "gray.500" }}
            textAlign={["center"]}
            h="35px"
            size=""
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
              size=""
            />
          )}
        </Flex>
      </form>
      <List bg="white" h="auto" overflowX="hidden">
        {moviesData.length !== 0 && search !== "" && (
          <div
            className="scrolling"
            style={{ overflowY: "scroll", height: "35vh" }}
          >
            <ListItem>
              <Flex direction="column" align="start">
                {moviesData.map((movie) => (
                  <a className="movie-link" href={`/movies/${movie.id} `}>
                    <Flex
                      _hover={{
                        transform: "scale(1.03)",
                        color: "teal.500",
                        borderRadius: "10px",
                      }}
                      direction="row"
                      justify="space-between"
                      w="43vw"
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
                        style={{ width: "100px", borderRadius: "15px" }}
                      />
                      {movie.title}
                    </Flex>
                  </a>
                ))}
              </Flex>
            </ListItem>
          </div>
        )}
      </List>
    </Container>
  );
}

export default Searchbar;
