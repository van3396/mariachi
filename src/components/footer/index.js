import React from "react";
import style from "./index.module.css"
import { Container, Row, Col } from "react-bootstrap";

console.log(style)

const Footer = () => {
  return (
    <footer className={`${style.footerBgColor} py-1`}>
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
