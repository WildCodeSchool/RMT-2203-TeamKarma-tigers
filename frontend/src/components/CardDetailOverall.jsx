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
    <Grid templateColumns={{ md: "100%", xl: "40% 50%" }} gap="6" color="white">
      <GridItem w="100%" mt={{ sm: "1rem", md: "1rem", lg: "1rem" }}>
        <Image
          src={
            results.poster_path
              ? `https://image.tmdb.org/t/p/w500/${results.poster_path}`
              : `url(${emptyImage})`
          }
          alt={results.title}
          minW={{ xl: "-webkit-fill-available" }}
          m={{
            sm: "0 auto",
            md: "0 auto",
            lg: "0 auto",
            xl: "1rem",
          }}
        />
      </GridItem>
      <GridItem w="100%" m={{ lg: "0 auto" }} mt={{ xl: "1rem" }}>
        <Flex
          flexDir="column"
          w={{ lg: "90%", xl: "100%" }}
          m="1rem"
          alignItems={{ lg: "center", xl: "flex-start" }}
          marginLeft="2rem"
        >
          <Heading as="h2" size="xl">
            {results.title}
          </Heading>
          <Heading as="h3" size="sm" marginTop="1rem">
            {hour === 0
              ? `The movie lasts ${minute} minute(s)`
              : `The movie lasts ${hour} hour(s) and ${minute} minute(s)`}
          </Heading>
          <Heading as="h3" size="sm" marginBottom="1rem">
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
