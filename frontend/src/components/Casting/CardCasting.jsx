import React from "react";
import emptyImage from "../../assets/emptyImage.svg";

function CardCasting({ cast }) {
  return (
    <div>
      <div>
        <img
          src={
            cast.profile_path
              ? `https://image.tmdb.org/t/p/w200/${cast.profile_path}`
              : `${emptyImage}`
          }
          alt=""
          width="200px"
          backgroundColor="grey"
        />
        <div>
          <h4>{cast.name}</h4>
          <p>{cast.character}</p>
        </div>
      </div>
    </div>
  );
}

export default CardCasting;
