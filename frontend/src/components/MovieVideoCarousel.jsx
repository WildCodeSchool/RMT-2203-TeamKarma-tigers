import axios from "axios";
import { useEffect, useState } from "react";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { Flex, Button, Box } from "@chakra-ui/react";
import Video from "./Video";

export default function MovieVideoCarousel({ movie }) {
  const [allVideos, setAllVideos] = useState([]);

  const [current, setCurrent] = useState(0);
  const getVideos = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie}/videos?api_key=20d0a760d82811eb01a3f02b31edc400&language=en-US`
      )
      .then((response) => response.data)
      .then((data) => {
        setAllVideos(
          data.results.filter(
            (video) => video.type === "Trailer" && video.official === true
          )
        );
      });
  };

  const filterVideos = (cur, allVid) => {
    if (allVid.length < 3) return allVid;

    const res = [];

    if (allVid.length < 3) return allVid;
    res.push(allVid[cur]);

    if (cur === allVid.length - 1) {
      res.push(allVid[0]);
    } else if (cur === allVid.length - 2) {
      res.push(allVid[allVid.length - 1]);
    } else {
      res.push(allVid[cur + 1]);
    }
    return res;
  };

  useEffect(() => {
    getVideos();
  }, []);

  const nextSlide = () => {
    setCurrent(current === allVideos.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? allVideos.length - 1 : current - 1);
  };

  if (allVideos.length === 0) {
    return <p>No trailer found...</p>;
  }

  return (
    <Flex
      h={{ base: "50vh", lg: "40vh", xl: "30vh" }}
      m={{ xl: "0" }}
      w={{ base: "90vw", xl: "53vw", "2xl": "50vw" }}
      mt={{ base: "1.5em", lg: "2.5em", xl: "5em", "2xl": "5em" }}
      justify="center"
      flexDirection={{ base: "column", lg: "row" }}
    >
      <>
        {allVideos.length > 3 && (
          <Button
            alignSelf="center"
            _hover={{ cursor: "pointer" }}
            variant="solid"
            transform={{
              base: "rotate(90deg)",
              lg: "rotate(0deg)",
            }}
            mb={{ base: "10px" }}
            borderRadius="100%"
            w={{ base: "40px", sm: "3rem" }}
            h={{ base: "60px", sm: "3rem" }}
            mr={{ lg: "10px", xl: "1em" }}
          >
            <ArrowBackIcon
              color="red"
              fontSize={{ base: "40px", sm: "3rem" }}
              onClick={prevSlide}
            />
          </Button>
        )}
        {filterVideos(current, allVideos).map((video) => (
          <Box key={video.key} alignSelf="center">
            <Video videoInfo={video} key={video.key} />
          </Box>
        ))}
        {allVideos.length > 3 && (
          <Button
            alignSelf="center"
            _hover={{ cursor: "pointer" }}
            variant="solid"
            transform={{
              base: "rotate(90deg)",
              lg: "rotate(0deg)",
            }}
            mt={{ base: "10px" }}
            borderRadius="100%"
            w={{ base: "40px", sm: "3rem" }}
            h={{ base: "60px", sm: "3rem" }}
            ml={{ sm: "0.4em", md: "0.4em", lg: "10px", xl: "1.5em" }}
          >
            <ArrowForwardIcon
              color="red"
              fontSize={{ base: "40px", sm: "3rem" }}
              onClick={nextSlide}
            />
          </Button>
        )}
      </>
    </Flex>
  );
}
