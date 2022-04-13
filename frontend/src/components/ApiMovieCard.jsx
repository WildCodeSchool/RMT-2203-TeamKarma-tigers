import axios from "axios";
import { React, useEffect, useState } from "react";

export default function ApiMovieCard() {
  const [movieDetail, setMovieDetail] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=20d0a760d82811eb01a3f02b31edc400&query=avenger&language=en-US&page=1&include_adult=false"
      )
      .then((response) => setMovieDetail(response.data.results));
  }, []);

  return (
    <div>
      {movieDetail.map((movie) => (
        <div className="main-container">
          <div className="movie-poster">
            <img
              src={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}
              alt=""
            />
          </div>
          <h2>{movie.original_title}</h2>
        </div>
      ))}
    </div>
  );
}
