import React from "react";
import "../css-components/Header.css";
import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  const ytLogo =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg2b4AzEL5ltvxPV_DbclqmJhSdtTQgiXmQ_fk-GDlZwsSAhfuhp1hIHoJziYAA-1YRZY&usqp=CAU";
  return (
    <header>
      <Navbar className="header-bg-color py-1" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand className="header_brand" href="/">
            Mariachi Veracruzano
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#spanish">Espa&ntilde;ol</Nav.Link>
              <Nav.Link href="#english">English</Nav.Link>
              <Nav.Link
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="youtube_logo" src={ytLogo} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
