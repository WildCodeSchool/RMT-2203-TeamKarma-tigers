import React from "react";

function CardReview({ review }) {
  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${review.author_details.avatar_path}`}
          alt=""
        />
        <div>
          <h4>{review.author}</h4>
          <p>{review.updated_at}</p>
        </div>
      </div>
      <div>
        <p>{review.author_details.rating}</p>
        <p>{review.content}</p>
      </div>
    </div>
  );
}

export default CardReview;
