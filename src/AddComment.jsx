import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment = ({ asin }) => {
  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: asin,
  });

  const handleChange = (e) => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Inizio della chiamata POST usando .then()
    fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNkMTA0MzYzZjE1ODAwMTQxMTg0NmYiLCJpYXQiOjE2OTg1MDA2NzUsImV4cCI6MTY5OTcxMDI3NX0.mNHBJaDLhswTMmHsN1KK6_6zVPXQwaEyehYgw3I0bFI",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore durante l'invio del commento");
        }
      })
      .then((data) => {
        alert("Commento aggiunto con successo!");
        setComment({ comment: "", rate: 1, elementId: asin }); // ripristina i valori iniziali
      })
      .catch((error) => {
        console.error("Si è verificato un errore:", error);
        alert("Si è verificato un errore durante l'aggiunta del commento");
      });
    // Fine della chiamata POST usando .then()
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="addCommentForm.ControlInput1">
        <Form.Label>Commento</Form.Label>
        {/* Assicurati che 'name' corrisponda a una chiave nello stato 'comment' */}
        <Form.Control
          as="textarea"
          rows={4}
          name="comment"
          value={comment.comment}
          onChange={handleChange} // Qui è collegato l'evento onChange
        />
      </Form.Group>

      <Form.Group controlId="addCommentForm.ControlSelect1">
        <Form.Label>Valutazione</Form.Label>
        <Form.Control
          as="select"
          name="rate"
          value={comment.rate}
          onChange={handleChange} // E qui di nuovo
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Control>
      </Form.Group>

      {/* Altri campi del form possono essere inseriti qui se necessario */}

      <Button variant="primary" type="submit" className="mt-3">
        Invia
      </Button>
    </Form>
  );
};

export default AddComment;
