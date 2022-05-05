import React, { useEffect } from "react";

import axios from "axios";
import { Button, Flex } from "@chakra-ui/react";

import MovieCard from "./MovieCard";
import GenreFilter from "./GenreFilter";

function MovieCarousel({
  type,
  url,
  onResultChange = null,
  isFilterable = false,
}) {
  const [Movies, setMovies] = React.useState([]);
  const [MoviePage, setMoviePage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [genreFilter, setGenreFilter] = React.useState("");
  const [rating, setRating] = React.useState([0, 10]);

  const controller = new AbortController();
  const { signal } = controller;

  const getMovies = () => {
    axios
      .get(
        genreFilter.length === 0
          ? `${url}&api_key=20d0a760d82811eb01a3f02b31edc400&vote_average.gte=${rating[0]}&vote_average.lte=${rating[1]}&language=en-US&page=${MoviePage}`
          : `${url}&with_genres=${genreFilter}&api_key=20d0a760d82811eb01a3f02b31edc400&vote_average.gte=${rating[0]}&vote_average.lte=${rating[1]}&language=en-US&page=${MoviePage}`,
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
  }, [MoviePage, url, genreFilter, rating]);

  useEffect(() => {
    setMoviePage(1);
  }, [url, genreFilter, rating]);

  return (
    <div width="90%">
      <Flex direction="row">
        {isFilterable && (
          <GenreFilter setGenreFilter={setGenreFilter} setRating={setRating} />
        )}
        <Flex direction="column" align="center">
          <Flex wrap="wrap" align="center" justify="space-evenly">
            {Movies.filter((movie) => movie.release_date).map((movie) => (
              <MovieCard
                key={`${type}_${movie.id}_${movie.original_title}`}
                movie={movie}
              />
            ))}
          </Flex>
          {totalPages > 1 && (
            <Button
              colorScheme="teal"
              size="lg"
              onClick={handleMoreMovies}
              maxW="10%"
              marginBottom="1em"
            >
              Load More
            </Button>
          )}
        </Flex>
      </Flex>
    </div>
  );
}

export default MovieCarousel;
