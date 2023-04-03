import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieList from "../components/MovieList";

function MainPage({ movies, deleteMovie, setMoviesToWatch, setWatchedMovies }) {
  return (
    <Container fluid>
      <br />
      <div>
          <p className="text-center">Click on a movie to delete it from the database.</p>
      </div>
      <Row>
        <Col md={2}></Col>
        <Col md={8}>
          <MovieList movies={movies} deleteMovie={deleteMovie} setMoviesToWatch={setMoviesToWatch} setWatchedMovies={setWatchedMovies}/>
        </Col>
      </Row>
    </Container>
  );
}

export default MainPage;
