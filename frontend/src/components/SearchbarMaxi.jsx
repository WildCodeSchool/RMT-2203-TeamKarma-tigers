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
      maxW="80vw"
      bg="white"
      borderRadius={15}
      opacity="0.8"
      position="absolute"
      top={{ base: "27vh", sm: "27vh", md: "27vh", lg: "27vh" }}
      left="10%"
      height={{ base: "4.5em", sm: "5em", md: "5.5em", lg: "6em" }}
    >
      <form onSubmit={handleSubmit}>
        <Flex align="center" marginBottom={20} zIndex="1">
          <Input
            placeholder="Lookin' for a movie ?"
            _placeholder={{
              opacity: 1,
              color: "gray.500",
              size: "lg",
            }}
            textAlign={["center"]}
            type="text"
            variant="unstyled"
            onChange={(e) => setSearch(e.target.value)}
            fontSize={{ base: "24px", sm: "26px", md: "28px", lg: "30px" }}
            top="5"
          />
          {search.length >= 1 && (
            <IconButton
              variant="unstyled"
              colorScheme="blue"
              aria-label="Search database"
              top={{ base: "4", sm: "5", md: "5", lg: "6" }}
              icon={
                <SearchIcon
                  fontSize={{
                    base: "24px",
                    sm: "26px",
                    md: "28px",
                    lg: "30px",
                  }}
                />
              }
              onClick={handleSubmit}
            />
          )}
        </Flex>
        <List
          bg="white"
          overflowX="hidden"
          w="80vw"
          position="absolute"
          left="0"
          borderRadius={50}
        >
          {moviesData.length !== 0 && search !== "" && (
            <ListItem
              className="scrolling"
              height={{ base: "50vh", sm: "50vh", md: "50vh", lg: "50vh" }}
              style={{
                overflowY: "scroll",
                display: "flex",
                position: "relative",
                borderRadius: "50px",
              }}
            >
              <Flex
                direction="column"
                position="absolute"
                align="normal"
                top="0em"
                left="35%"
                gap="10px"
                w="100%"
                bgColor="white"
                borderRadius="15px"
                pt="10px"
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
                      <Flex pl="10vw">
                        <Text
                          fontSize={{
                            base: "24px",
                            sm: "26px",
                            md: "28px",
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
