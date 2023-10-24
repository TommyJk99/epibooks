import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <Container>
      <hr />
      <Row>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <div className="bold">Cose</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
        </Col>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <div className="bold">Altro</div>
          <div>asdasd</div>
          <div>asdasd</div>
        </Col>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <div className="bold">Boh</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
        </Col>
      </Row>
      <hr />
    </Container>
  );
};

export default Footer;
