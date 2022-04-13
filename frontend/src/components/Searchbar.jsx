import { React, useEffect, useState } from "react";
import axios from "axios";

function Searchbar() {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=20d0a760d82811eb01a3f02b31edc400&query=star&language=en-US&page=1&include_adult=false"
      )
      // eslint-disable-next-line no-restricted-syntax
      .then((response) => setMoviesData(response.data.results));
  }, []);
  return (
    <div className="seachbar-component">
      <form>
        <input
          className="movie-input"
          type="text"
          placeholder="Nom de votre film ?"
        />
      </form>
      <div className="movie-list">
        {moviesData.map((movie) => (
          <h3>{movie.title}</h3>
        ))}
      </div>
    </div>
  );
}

export default Searchbar;
