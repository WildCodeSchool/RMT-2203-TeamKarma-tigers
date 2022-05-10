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
    const res = [];
    if (!allVid.length) return null;
    if (allVid.length < 3) return allVid;
    res.push(allVid[cur]);

    if (cur === allVid.length - 1) {
      res.push(allVid[0]);
      res.push(allVid[1]);
    } else if (cur === allVid.length - 2) {
      res.push(allVid[allVid.length - 1]);
      res.push(allVid[0]);
    } else {
      res.push(allVid[cur + 1]);
      res.push(allVid[cur + 2]);
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

  if (allVideos.length === 0)
    return (
      <Flex
        h={{ base: "50vh", md: "40vh", xl: "30vh" }}
        justify="center"
        flexDirection={{ base: "column", md: "row" }}
        mt={{ lg: "2.5em", xl: "5em", "2xl": "5em" }}
        mr={{ "2xl": "18em" }}
        ml={{ xl: "5em" }}
        W="70vw"
      >
        No trailer found...
      </Flex>
    );

  return (
    <Flex
      h={{ base: "50vh", md: "40vh", xl: "30vh" }}
      mr={{ "2xl": "18em" }}
      ml={{ xl: "5em" }}
      W="70vw"
      mt={{ lg: "2.5em", xl: "5em", "2xl": "5em" }}
      justify="center"
      flexDirection={{ base: "column", md: "row" }}
    >
      <>
        {allVideos.length > 3 && (
          <Button
            alignSelf="center"
            _hover={{ transform: "scale(1.2)", cursor: "pointer" }}
            variant="solid"
            borderRadius="100%"
            minWidth="3.125em"
            maxWidth="3.125em"
            minHeight="3.125em"
            maxHeight="3.125em"
            mr={{ xl: "1em", "2xl": "1em" }}
            ml={{ "2xl": "12em" }}
          >
            <ArrowBackIcon color="red" fontSize="3rem" onClick={prevSlide} />
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
            _hover={{ transform: "scale(1.2)", cursor: "pointer" }}
            variant="solid"
            borderRadius="100%"
            minWidth="3.125em"
            maxWidth="3.125em"
            minHeight="3.125em"
            maxHeight="3.125em"
            ml={{ sm: "0.4em", md: "0.4em", lg: "0.4em", xl: "1.5em" }}
          >
            <ArrowForwardIcon color="red" fontSize="3rem" onClick={nextSlide} />
          </Button>
        )}
      </>
    </Flex>
  );
}
