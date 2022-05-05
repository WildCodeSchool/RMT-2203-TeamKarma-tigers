import axios from "axios";

const getGenreList = () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=20d0a760d82811eb01a3f02b31edc400&language=en-US`
    )
    .then((response) => response.data)
    .then((data) => data.genres);
};

export default getGenreList;
