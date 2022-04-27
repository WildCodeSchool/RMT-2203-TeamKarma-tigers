import { React } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import CardDetailOverall from "../components/CardDetailOverall";

export default function OneMovie() {
  const { movieid } = useParams();

  return (
    <div>
      <Header />
      <CardDetailOverall movie={movieid} />
    </div>
  );
}
