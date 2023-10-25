import { Col, Row, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import fantasyBooks from "./json/fantasy.json";
import historyBooks from "./json/history.json";
import horrorBooks from "./json/horror.json";
import romanceBooks from "./json/romance.json";
import scifiBooks from "./json/scifi.json";
import SingleBook from "./SingleBook";
import React, { useState } from "react";

const AllTheBooks = () => {
  const allBooks = [...fantasyBooks, ...historyBooks, ...horrorBooks, ...romanceBooks, ...scifiBooks];
  //qui salvo lo stato cosi da aggiornare allTheBooks ogni volta che inserisco un carattere
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  //mi serve per filtrare i libri ad ogni aggiornamento dell'input (input="to" -> filterBooks piglia solo testo con "to")
  const filterBooks = allBooks.filter((book) => book.title.toLowerCase().includes(input.toLowerCase()));

  return (
    <>
      <Form.Group className="mb-4 w-50 mx-auto" controlId="exampleForm.ControlInput1">
        <Form.Label style={{ color: " hsl(198, 100%, 42%)" }} className="text-center d-block fs-5">
          <strong>Cerca il tuo libro!</strong>
        </Form.Label>
        <Form.Control className="mb-4" type="search" placeholder="HalfLife" value={input} onChange={handleInput} />
      </Form.Group>

      <Container>
        <Row>
          {filterBooks.map((book) => (
            <Col key={book.id} sm={12} md={6} lg={3} className="mb-4 d-flex justify-content-center">
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default AllTheBooks;
