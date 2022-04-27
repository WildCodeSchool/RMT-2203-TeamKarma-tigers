import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Flex, Heading, Box, Image } from "@chakra-ui/react";
import emptyImage from "../assets/emptyImage.svg";

export default function CardDetailOverall({ movie }) {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

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
    <Container border="1px solid black" maxW="95%" h="75vh" marginBottom="16px">
      <Flex>
        <Image
          src={
            results.poster_path
              ? `https://image.tmdb.org/t/p/w300/${results.poster_path}`
              : `url(${emptyImage})`
          }
          w="500px"
          h="70vh"
          border="1px solid black"
          m="1rem"
          overflow="hidden"
          borderRadius="lg"
        />
        <Flex flexDir="column" m="2rem">
          <Heading as="h2" size="xl">
            {results.original_title}
          </Heading>
          <Heading as="h3" size="sm" marginTop="1rem">
            The movie lasts {results.runtime} minutes + RATING
          </Heading>
          <Box w="200px" h="50px" border="1px solid black" marginTop="1rem">
            LINK INFO CARD
          </Box>
          <Box
            marginTop="1rem"
            borderTop="1px solid black"
            borderBottom="1px solid black"
            borderRadius="lg"
            p="1rem"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            quidem debitis praesentium. In aperiam soluta enim corporis iusto
            laboriosam excepturi dolores, culpa autem, eum repellendus!
            Perferendis porro tempora dicta eveniet!
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
}
