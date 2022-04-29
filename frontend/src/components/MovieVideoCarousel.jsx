import axios from "axios";
import { useEffect, useState } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";

import Video from "./Video";
import "./MovieVideoCarousel.css";

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

  useEffect(() => {
    getVideos();
  }, []);

  const nextSlide = () => {
    setCurrent(current === allVideos.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? allVideos.length - 1 : current - 1);
  };
  if (allVideos.length === 1) {
    return current + 1;
  }

  return (
    <Flex className="slider">
      <ArrowLeftIcon className="left-arrow" onClick={prevSlide} />

      {allVideos.map((video, index) => (
        <div
          className={
            index === current || index === current + 1 || index === current + 2
              ? "slide active"
              : "slide"
          }
          key={video.key}
        >
          {(index === current ||
            index === current + 1 ||
            index === current + 2) && (
            <Video videoInfo={video} key={video.key} />
          )}
        </div>
      ))}
      <ArrowRightIcon className="right-arrow" onClick={nextSlide} />
    </Flex>
  );
}
