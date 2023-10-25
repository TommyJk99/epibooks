import { Card } from "react-bootstrap";

const SingleBook = ({ book }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title className="text-center fs-5">{book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};
export default SingleBook;
