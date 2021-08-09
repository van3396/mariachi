import React from "react";
import style from "./index.module.css"
import { Container, Row, Col } from "react-bootstrap";
import linkedin from '../../media/images/linkedingif.gif'

const Footer = () => {
  return (
    <footer className={`${style.footer} py-5`}>
      <Container className="py-1">
        <Row>
          <Col className="text-center text-light">
            Copyright &copy; Mariachi Veracruzano 2021 
          </Col>
        </Row>
        <Row>
          <Col className="text-center text-light">
            Created by: 
            &nbsp;&nbsp;&nbsp;&nbsp;
            Qui Van
            <a href="https://www.linkedin.com/in/qui-van/" className="text-light">
              <img src={linkedin} height='45' alt="Mariachi Veracruzano" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            Earl Cameron
            <a href="https://www.linkedin.com/in/earl-cameron/" className="text-light">
              <img src={linkedin} height='45' alt="Mariachi Veracruzano" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
