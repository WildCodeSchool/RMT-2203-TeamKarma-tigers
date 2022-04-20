import { React, useEffect, useState } from "react";
import axios from "axios";
import "../style/searchbar.css";

function Searchbar() {
  const [moviesData, setMoviesData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=20d0a760d82811eb01a3f02b31edc400&query=${search}&language=en-US&page=1&include_adult=false`
      )
      .then((response) => [setMoviesData(response.data.results)]);
  }, [search]);

  return (
    <div className="seachbar-component">
      <form>
        <input
          className="movie-input"
          type="text"
          placeholder="   Nom de votre film ?"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      {moviesData.length !== 0 && search !== "" && (
        <div className="movie-list">
          {moviesData.map((movie) => (
            <a className="movie-link" href={`/movies/${movie.id}`}>
              {movie.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Searchbar;
