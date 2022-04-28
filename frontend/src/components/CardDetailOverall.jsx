import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Flex, Heading, Image, Box } from "@chakra-ui/react";
import emptyImage from "../assets/emptyImage.svg";
import ButtonGroupFilmNavigation from "./ButtonGroupFilmNavigation";

export default function CardDetailOverall({ movie }) {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const { movieid } = useParams();

  const getMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie}?api_key=20d0a760d82811eb01a3f02b31edc400&language=en-US`
      )
      .then((result) => setResults(result.data))
      .catch((err) => {
        if (err.response.status === 404) {
          return navigate("/error");
        }
        return err;
      });
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <Container
      maxW="95%"
      marginBottom="1rem"
      marginRight="1rem"
      bg="#282c34"
      color="white"
    >
      <Flex>
        <Image
          src={
            results.poster_path
              ? `https://image.tmdb.org/t/p/w300/${results.poster_path}`
              : `url(${emptyImage})`
          }
          alt={results.original_title}
          w="300px"
          h="50vh"
          m="1rem"
          overflow="hidden"
          shadow="box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;"
        />
        <Flex flexDir="column" m="2rem">
          <Heading as="h2" size="xl">
            {results.original_title}
          </Heading>
          <Heading as="h3" size="sm" marginTop="1rem" marginBottom="1rem">
            The movie lasts {results.runtime} minutes
          </Heading>
          <Box w="100%">
            <ButtonGroupFilmNavigation movie={movieid} />
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
}
