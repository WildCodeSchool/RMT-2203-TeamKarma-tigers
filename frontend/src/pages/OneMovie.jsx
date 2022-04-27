import { React } from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import ButtonGroupFilmNavigation from "../components/ButtonGroupFilmNavigation";

export default function OneMovie() {
  const { movieid } = useParams();

  return (
    <div>
      <Header />
      <ButtonGroupFilmNavigation movie={movieid} />
    </div>
  );
}
