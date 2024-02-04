import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to={"/posts"}>
          Blog App
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} className="btn btn-light" to="/posts">
            Posts
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
