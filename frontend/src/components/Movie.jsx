import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

export default function Movie({ movie, deleteMovie, setMoviesToWatch, setWatchedMovies }) {
  return (
    <Col>
      <Card>
        <Card.Header>
          <Card.Title>{movie.movie_title}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Img
            className="movie-list-img"
            src="https://placehold.co/400x600.png"
            alt={movie.movie_title}
          />
          <Button className="mt-2" onClick={() => deleteMovie(movie.id)}>Delete from DB</Button>
          <Button className="mt-2" onClick={() => setWatchedMovies(movie)}>Set as Watched</Button>
          <Button className="mt-2" onClick={() => setMoviesToWatch(movie)}>Set as To Watch</Button>
        </Card.Body>
        <Card.Footer>
          <Card.Text>Rating: {movie.movie_rating}</Card.Text>
        </Card.Footer>
      </Card>
    </Col>
  );
}