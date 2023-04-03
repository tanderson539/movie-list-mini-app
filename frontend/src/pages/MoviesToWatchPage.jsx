import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieListRemoveable from "../components/MovieListRemoveable";

function MoviesToWatchPage({moviesToWatch, deleteMovie}) {
  return (
    <Container fluid>
    <br />
    <div>
        <p className="text-center">Click on a movie to delete it from the list.</p>
    </div>
    <Row>
      <Col md={2}></Col>
      <Col md={8}>
        <MovieListRemoveable movies={moviesToWatch} deleteMovie={deleteMovie}/>
      </Col>
    </Row>
  </Container>
  )
}

export default MoviesToWatchPage