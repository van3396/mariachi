import React from "react";
import "../css-components/Footer.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer-bg-color py-1">
      <Container className="py-1">
        <Row>
          <Col className="text-center">
            Copyright &copy; Mariachi Veracruzano 2021 
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            Created by Qui Van
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
