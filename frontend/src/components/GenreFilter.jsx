import { useState, useEffect } from "react";
import { Select } from "@chakra-ui/react";

import getGenreList from "../services/GetGenreList";

export default function GenreFilter({ movieList, setMovieList }) {
  const [dropDownGenre, setDropDownGenre] = useState([]);
  // eslint-disable-next-line no-restricted-syntax
  console.log(dropDownGenre);

  useEffect(() => {
    getGenreList().then((result) => setDropDownGenre(result));
  }, []);

  const filterByGenre = (e) => {
    const currentMovieGenre = parseInt(e.target.value, 10);
    const movieFiltered = movieList.filter((movie) =>
      movie.genre_ids.includes(currentMovieGenre)
    );

    setMovieList(movieFiltered);
  };

  return (
    <Select
      placeholder="All Genres"
      size="lg"
      color="#15141f"
      width="100%"
      variant="filled"
      onChange={filterByGenre}
    >
      {dropDownGenre.map((genre) => (
        <option value={genre.id}>{genre.id}</option>
      ))}
    </Select>
  );
}
