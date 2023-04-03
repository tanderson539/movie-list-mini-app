import React from "react";
import { Container, Row } from "react-bootstrap";
import Movie from "./Movie";

export default function MovieList({ movies, deleteMovie, setMoviesToWatch, setWatchedMovies }) {
  return (
    <Container fluid>
      <Row md={5} className="g-4">
        {movies?.map((movie) => (
          <Movie movie={movie} key={movie.id} deleteMovie={deleteMovie} setMoviesToWatch={setMoviesToWatch} setWatchedMovies={setWatchedMovies}/>
        ))}
      </Row>
    </Container>
  );
}
