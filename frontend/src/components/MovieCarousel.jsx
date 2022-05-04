import React, { useEffect } from "react";
import axios from "axios";
import { Button, Flex } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import GenreFilter from "./GenreFilter";

function MovieCarousel({ type, url, onResultChange = null }) {
  const [Movies, setMovies] = React.useState([]);
  const [MoviePage, setMoviePage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);

  const controller = new AbortController();
  const { signal } = controller;

  const getMovies = () => {
    axios
      .get(
        `${url}&api_key=20d0a760d82811eb01a3f02b31edc400&language=en-US&page=${MoviePage}`,
        { signal }
      )
      .then((response) => response.data)
      .then((data) => {
        setTotalPages(data.total_pages);

        if (onResultChange) {
          onResultChange(data.total_results);
        }

        if (MoviePage > 1) {
          setMovies(Movies.concat(data.results));
        } else {
          setMovies(data.results);
        }
      });
  };

  const handleMoreMovies = () => {
    setMoviePage(MoviePage + 1);
  };

  useEffect(() => {
    getMovies();
    return () => {
      controller.abort();
    };
  }, [MoviePage, url]);

  useEffect(() => {
    setMoviePage(1);
  }, [url]);
  // eslint-disable-next-line no-restricted-syntax
  console.log(Movies);

  return (
    <div width="90%">
      <GenreFilter movieList={Movies} setMovieList={setMovies} />
      <Flex wrap="wrap" align="center" justify="space-evenly">
        {Movies.filter((movie) => movie.release_date).map((movie) => (
          <MovieCard
            key={`${type}_${movie.id}_${movie.original_title}`}
            movie={movie}
          />
        ))}
      </Flex>
      )
      {totalPages > 1 && (
        <Button colorScheme="teal" size="lg" onClick={handleMoreMovies}>
          Load More
        </Button>
      )}
    </div>
  );
}

export default MovieCarousel;
