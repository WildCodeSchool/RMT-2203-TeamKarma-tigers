import React from "react";
import MovieCarousel from "../components/MovieCarousel";
import Header from "../components/Header";

function AllMovies() {
  return (
    <div>
      <Header />
      <MovieCarousel
        type="alphabeticalMovies"
        url="https://api.themoviedb.org/3/discover/movie?sort_by=original_title.asc&include_adult=false"
      />
    </div>
  );
}

export default AllMovies;
