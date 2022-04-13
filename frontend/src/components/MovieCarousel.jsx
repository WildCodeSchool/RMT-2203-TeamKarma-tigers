import React, { useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

function MovieCarousel() {
  const [popularMovies, setPopularMovies] = React.useState([]);
  const [popularMoviePage, setPopularMoviePage] = React.useState(1);

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
    <div className="App">
      <div className="movie-container">
        {popularMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <button type="button" onClick={handleMoreMovies}>
        Get more Movies
      </button>
    </div>
  );
}

export default MovieCarousel;
