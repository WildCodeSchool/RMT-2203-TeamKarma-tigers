import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Flex, Heading, Image, Box, Grid, GridItem } from "@chakra-ui/react";
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
    <Box w="100%" maxW="1900px" m="0 auto" overflow="hidden">
      <Flex>
        <Grid templateColumns="500px 1000px" gap="6">
          <GridItem w="100%">
            <Image
              src={
                results.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${results.poster_path}`
                  : `url(${emptyImage})`
              }
              alt={results.title}
              minW="-webkit-fill-available"
              overflow="hidden"
              m="1rem"
            />
          </GridItem>
          <GridItem w="100%">
            <Flex
              flexDir="column"
              w="100%"
              m="1rem"
              alignItems="flex-start"
              marginLeft="2rem"
            >
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
              <ButtonGroupFilmNavigation movie={movieid} />
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </Box>
  );
}
