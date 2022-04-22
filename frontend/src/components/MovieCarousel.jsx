import React, { useEffect } from "react";
import axios from "axios";
import { Button } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import "./MovieCarousel.css";

function MovieCarousel({ type, url }) {
  const [Movies, setMovies] = React.useState([]);
  const [MoviePage, setMoviePage] = React.useState(1);

  const getMovies = () => {
    axios
      .get(
        `${url}&api_key=20d0a760d82811eb01a3f02b31edc400&language=en-US&page=${MoviePage}`
      )
      .then((response) => response.data)
      .then((data) => {
        setMovies(Movies.concat(data.results));
      });
  };

  const handleMoreMovies = () => {
    setMoviePage(MoviePage + 1);
  };

  useEffect(() => {
    getMovies();
    // return () => {
    // window.stop();
    // };
  }, [MoviePage]);

  return (
    <div>
      <div className="Movie-Carousel">
        {Movies.filter((movie) => movie.release_date).map((movie) => (
          <MovieCard
            key={`${type}_${movie.id}_${movie.original_title}`}
            movie={movie}
          />
        ))}
      </div>
      <Button colorScheme="teal" size="lg" onClick={handleMoreMovies}>
        Load More
      </Button>
    </div>
  );
}

export default MovieCarousel;
