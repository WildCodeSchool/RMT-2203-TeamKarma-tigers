import React from "react";

function CardCasting({ cast }) {
  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`}
          alt=""
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
