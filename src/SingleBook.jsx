import { Card } from "react-bootstrap";
import React, { useState } from "react";
import CommentArea from "./CommentArea";

//pongo lo stato iniziale
const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false);

  //al click della card cambio lo stato di selected
  const handleClick = () => {
    setSelected(!selected);
  };

  const deselectBook = () => {
    setSelected(false); // Questa funzione cambia 'selected' in false
  };

  //se selected è tr allora inserisco il css all'interno della card quando aggiorno
  const cardBorder = selected ? { border: "2px solid red", width: "18rem" } : { width: "18rem" };

  return (
    <>
      {selected && <CommentArea selected={selected} asin={book.asin} deselectBook={deselectBook} />}
      <Card style={cardBorder} onClick={handleClick}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title className="text-center fs-5">{book.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};
export default SingleBook;
