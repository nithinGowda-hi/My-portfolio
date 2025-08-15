import React from 'react';
import { Link } from 'react-scroll';
import { Navbar as BsNavbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css'

function Navbar() {
  return (
    <BsNavbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <BsNavbar.Brand href="#">My Portfoilo</BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="home" smooth={true} duration={500}>Home</Nav.Link>
            <Nav.Link as={Link} to="about" smooth={true} duration={500}>About</Nav.Link>
            <Nav.Link as={Link} to="projects" smooth={true} duration={500}>Projects</Nav.Link>
            <Nav.Link as={Link} to="contact" smooth={true} duration={500}>Contact</Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;
