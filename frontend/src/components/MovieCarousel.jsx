import React, { useEffect } from "react";
import axios from "axios";
import { Button } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import "./MovieCarousel.css";

function MovieCarousel() {
  const [popularMovies, setPopularMovies] = React.useState([]);
  const [popularMoviePage, setPopularMoviePage] = React.useState(1);

  /*
  const [trendingMovies, setTrendingMovies] = React.useState([]);
  */

  const getPopularMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=20d0a760d82811eb01a3f02b31edc400&language=en-US&page=${popularMoviePage}`
      )
      .then((response) => response.data)
      .then((data) => {
        setPopularMovies(popularMovies.concat(data.results));
      });
  };

  const handleMoreMovies = () => {
    setPopularMoviePage(popularMoviePage + 1);
  };

  useEffect(() => {
    getPopularMovie();
  }, [popularMoviePage]);

  return (
    <div>
      <div className="Movie-Carousel">
        {popularMovies
          .filter((movie) => movie.release_date)
          .map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
      <Button colorScheme="teal" size="lg" onClick={handleMoreMovies}>
        Get more Movies
      </Button>
      {/* <button type="button" onClick={handleMoreMovies}>
        Get more Movies
      </button> */}
    </div>
  );
}

export default MovieCarousel;
