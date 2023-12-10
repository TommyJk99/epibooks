import React from "react";
import CommentList from "./CommentList";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddComment from "./AddComment";

export default function CommentArea({ selected, asin, deselectBook }) {
  //queste informazioni servono per gestire il modal di react bootstrap
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    deselectBook(); // chiama 'deselectBook' quando il modal viene chiuso
  };

  useEffect(() => {
    if (selected) {
      setShow(true);
    }
  }, [selected]);

  const [reviews, setReviews] = useState([]);
  //faccio partire la fetch ogni volta che clicco su un elemento
  useEffect(() => {
    if (selected) {
      setShow(true);
      if (asin) {
        // Verifica che "asin" sia valido.
        fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`)
          .then((response) => response.json())
          .then((data) => setReviews(data))
          .catch((error) => console.error("Errore di fetch:", error)); // Registra errori di rete.
      }
    }
  }, [selected, asin]);
  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Recensioni</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Qui utilizzi CommentList invece di mappare direttamente le recensioni */}
          <CommentList reviews={reviews} />
          <AddComment asin={asin} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
