import axios from "axios";

const getRandomMovie = (nbTotalPage) => {
  const randomPage =
    nbTotalPage <= 500
      ? Math.floor(Math.random() * nbTotalPage)
      : Math.floor(Math.random() * 500);

  return axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity_desc&include_adult=false&api_key=20d0a760d82811eb01a3f02b31edc400&language=en-US&page=${randomPage}`
    )
    .then((response) => response.data)
    .then((data) => {
      return data.results[Math.floor(Math.random() * data.results.length)];
    });
};

export default getRandomMovie;
