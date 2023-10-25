import { Col, Row, Container } from "react-bootstrap";
import fantasyBooks from "./json/fantasy.json";
import historyBooks from "./json/history.json";
import horrorBooks from "./json/horror.json";
import romanceBooks from "./json/romance.json";
import scifiBooks from "./json/scifi.json";

const AllTheBooks = () => {
  const allBooks = [...fantasyBooks, ...historyBooks, ...horrorBooks, ...romanceBooks, ...scifiBooks];
  return (
    <Container>
      <Row>
        {allBooks.map((book) => (
          <Col key={book.id} xs={12} sm={6} md={4} lg={2} className="mb-4 d-flex justify-content-center">
            <img src={book.img} alt={book.title} className="img-fluid" />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
