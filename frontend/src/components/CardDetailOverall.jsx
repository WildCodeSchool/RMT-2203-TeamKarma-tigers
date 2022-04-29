import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Text, Flex, Heading, Image, Box } from "@chakra-ui/react";
import moment from "moment";
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
    <Box w="100%">
      <Flex justifyContent="center">
        <Image
          src={
            results.poster_path
              ? `https://image.tmdb.org/t/p/w300/${results.poster_path}`
              : `url(${emptyImage})`
          }
          alt={results.title}
          w="18%"
          h="50vh"
          overflow="hidden"
        />
        <Box
          w="70%"
          marginBottom="1rem"
          marginRight="1rem"
          bg="black"
          color="white"
        >
          <Flex flexDir="column" m="1rem" alignItems="flex-start">
            <Heading as="h2" size="xl">
              {results.title}
            </Heading>
            <Heading as="h3" size="sm" marginTop="1rem">
              The movie lasts {results.runtime} minutes
            </Heading>
            <Heading as="h3" size="sm" marginBottom="1rem">
              The movie was released on{" "}
              {moment(results.release_date).format("MMMM Do YYYY")}
            </Heading>
            {/* {results.genres.map((genre) => (
              <Heading as="h3" size="sm" marginBottom="1rem" key={genre.id}>
                {genre.name}
              </Heading>
            ))} */}
            <Text align="left">{results.overview}</Text>
            <ButtonGroupFilmNavigation movie={movieid} />
          </Flex>
        </Box>
      </Flex>
      {/* <Box w="75%" m="0 auto">

      </Box> */}
    </Box>
  );
}
