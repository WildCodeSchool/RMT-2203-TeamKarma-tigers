import React, { useEffect } from "react";
import axios from "axios";

import CardCasting from "./CardCasting";

function CardCastingCarousel({ movie }) {
  const [casting, setCasting] = React.useState([]);

  const getCastFromMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie}/credits?api_key=20d0a760d82811eb01a3f02b31edc400&language=en-US`
      )
      .then((response) => response.data)
      .then((data) => {
        setCasting(casting.concat(data.cast));
      });
  };

  useEffect(() => {
    getCastFromMovie();
  }, []);

  return (
    <div>
      <div>
        {casting.map((cast) => (
          <CardCasting cast={cast} />
        ))}
      </div>
    </div>
  );
}

export default CardCastingCarousel;
