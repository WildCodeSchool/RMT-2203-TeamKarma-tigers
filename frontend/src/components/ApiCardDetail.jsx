import axios from "axios";
import { useEffect, useState } from "react";
import CardDetail from "./CardDetail";

export default function ApiMovieCard() {
  const [movieDetail, setMovieDetail] = useState([]);

  const getMovieDetail = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/157336?api_key=20d0a760d82811eb01a3f02b31edc400&append_to_response=images"
      )
      .then((response) => response.data)
      .then((data) => setMovieDetail(data.results));
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  return (
    <>
      {movieDetail.map((movie) => (
        <CardDetail movie={movie} />
      ))}
    </>
  );
}
