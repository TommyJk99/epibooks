import React from "react";
import SingleComment from "./SingleComment";

const CommentList = ({ reviews }) => {
  // Nel caso no ci fossero reviews
  if (!reviews.length) {
    return <p>Nessuna recensione disponibile.</p>;
  }

  return (
    <div>
      {reviews.map((review, index) => (
        // Passiamo i dati della recensione al componente SingleComment
        <SingleComment key={index} commentData={review} />
      ))}
    </div>
  );
};

export default CommentList;
