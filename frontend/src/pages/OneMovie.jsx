import { React } from "react";
import { useParams } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import CardDetailOverall from "../components/CardDetailOverall";

export default function OneMovie() {
  const { movieid } = useParams();

  return (
    <div>
      <Header isOnHome={false} />
      <CardDetailOverall movie={movieid} />
      <Footer />
    </div>
  );
}
