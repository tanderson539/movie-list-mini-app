import React from "react";
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function AppNavbar({ searchTerm, handleSubmit }) {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand>IMDB-But-Not</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="align-center">
          <Nav className="me-auto">
            <Link className="popLink" to="/">
              Home
            </Link>
            <Link className="popLink" to="/add">
              Add Movie
            </Link>
            <Link className="popLink" to="/towatch">
              Movies to Watch
            </Link>
            <Link className="popLink" to="/watched">
              Movies You've Watched
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e) => searchTerm(e.target.value)}
          />
          <Button variant="outline-success" onClick={(e) => handleSubmit(e)}>
            Search
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
