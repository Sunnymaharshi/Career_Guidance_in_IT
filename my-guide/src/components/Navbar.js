import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <Navbar className="nav-bar" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Career Guide</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse> */}
        <Nav className="ml-auto nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/contact-us" className="nav-link">
            Contact Us
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavBar;
