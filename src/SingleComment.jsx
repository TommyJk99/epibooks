import React from "react";

const SingleComment = ({ commentData }) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <h5>Valutazione: {commentData.rate}</h5>
      <p>{commentData.comment}</p>
    </div>
  );
};

export default SingleComment;
