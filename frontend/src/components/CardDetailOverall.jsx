import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Flex, Heading, Image, Grid, GridItem } from "@chakra-ui/react";
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

  const hour = parseInt(
    moment.duration(results.runtime, "minutes").asHours(),
    10
  );
  const minute = parseInt(
    moment.duration(results.runtime % 60, "minutes").asMinutes(),
    10
  );

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <Grid
      templateColumns={{ base: "100%", xl: "40% 60%" }}
      gap={{ base: "6" }}
      color="white"
      m={{ base: "0.5rem", xl: "2.8rem" }}
    >
      <GridItem w="100%">
        <Image
          src={
            results.poster_path
              ? `https://image.tmdb.org/t/p/w500/${results.poster_path}`
              : `${emptyImage}`
          }
          alt={results.title}
          m="auto"
        />
      </GridItem>
      <GridItem w="100%" m={{ lg: "0 auto" }} maxW={{ "2xl": "90%" }}>
        <Flex
          flexDir="column"
          m="1rem"
          alignItems={{ lg: "center", xl: "flex-start" }}
        >
          <Heading
            as="h2"
            fontSize={{ base: "4xl", xl: "5xl" }}
            textAlign={{ base: "center", xl: "left" }}
          >
            {results.title}
          </Heading>
          <Heading as="h3" size="md" marginTop="1rem">
            {hour === 0
              ? `The movie lasts ${minute} minute(s)`
              : `The movie lasts ${hour} hour(s) and ${minute} minute(s)`}
          </Heading>
          <Heading as="h3" size="md" marginBottom="1rem">
            {moment(Date()).diff(results.release_date, "hours") >= 24
              ? `The movie was released on ${moment(
                  results.release_date
                ).format("MMMM Do YYYY")}`
              : `The movie will be released on ${moment(
                  results.release_date
                ).format("MMMM Do YYYY")}`}
          </Heading>
          <ButtonGroupFilmNavigation movie={movieid} />
        </Flex>
      </GridItem>
    </Grid>
  );
}
