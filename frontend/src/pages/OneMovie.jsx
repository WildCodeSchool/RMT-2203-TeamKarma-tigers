import { React } from "react";
import { useParams } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import ButtonGroupFilmNavigation from "../components/ButtonGroupFilmNavigation";

export default function OneMovie() {
  const { movieid } = useParams();

  return (
    <div>
      <Header isOnHome={false} />
      <ButtonGroupFilmNavigation movie={movieid} />
      <Footer />
    </div>
  );
}
