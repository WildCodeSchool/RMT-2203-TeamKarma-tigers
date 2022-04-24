import React from "react";
import emptyImage from "../assets/emptyImage.svg";

function CardReview({ review }) {
  return (
    <div>
      <div>
        <img
          src={
            review.author_details.avatar_path === null ||
            review.author_details.avatar_path.includes("gravatar") === true
              ? `${emptyImage}`
              : `https://image.tmdb.org/t/p/w500/${review.author_details.avatar_path}`
          }
          alt=""
          width="200px"
          backgroundColor="grey"
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
