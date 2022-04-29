import React from "react";
import MovieCarousel from "../components/MovieCarousel";
import Header from "../components/Header";

function AllMovies({ sortType }) {
  return (
    <div>
      <Header isOnHome={false} />
      <MovieCarousel
        type="alphabeticalMovies"
        url={`https://api.themoviedb.org/3/discover/movie?sort_by=${sortType}&include_adult=false`}
      />
    </div>
  );
}

export default AllMovies;
