import axios from "axios";

const getTotalPageResult = () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity_desc&include_adult=false&api_key=20d0a760d82811eb01a3f02b31edc400&language=en-US`
    )
    .then((response) => response.data)
    .then((data) => data.total_pages);
};

export default getTotalPageResult;
