import { React, useParams } from "react";
import CardCastingCarousel from "../components/Casting/CardCastingCarousel";
import CardReviewCarousel from "../components/CardReviewCarousel";
import MovieVideoCarousel from "../components/MovieVideoCarousel";
import CardDetailSynopsis from "../components/CardDetailSynopsis";

function OneMovie() {
  const { movieId } = useParams();

  return (
    <div>
      <CardReviewCarousel movie={movieId} />
      <CardCastingCarousel movie={movieId} />
      <MovieVideoCarousel movie={movieId} />
      <CardDetailSynopsis />
    </div>
  );
}
export default OneMovie;
