import React from "react";
import { Container, Row } from "react-bootstrap";
import ListMovie from './ListMovie';

function MovieListRemoveable({ movies, removeFromList }) {
  return (
    <Container fluid>
    <Row md={5} className="g-4">
      {movies?.map((movie) => (
        <ListMovie movie={movie} key={movie.id} removeFromList={removeFromList}/>
      ))}
    </Row>
  </Container>
  )
}

export default MovieListRemoveable