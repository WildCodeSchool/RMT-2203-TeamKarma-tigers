import React from "react";
import MovieCarousel from "../components/MovieCarousel";

function AllMovies() {
  return (
    <div>
      <MovieCarousel
        type="alphabeticalMovies"
        url="https://api.themoviedb.org/3/discover/movie?sort_by=original_title.asc&include_adult=false"
      />
    </div>
  );
}

export default AllMovies;
