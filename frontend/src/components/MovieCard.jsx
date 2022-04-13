import React from "react";
import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <div className="Movie-Card">
      <img
        src={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}
        alt={movie.original_title}
      />
      <h3>{movie.original_title}</h3>
    </div>
  );
}

export default MovieCard;
