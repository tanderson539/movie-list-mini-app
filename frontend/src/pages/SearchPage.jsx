import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieList from "../components/MovieList";

function SearchPage({ searchedMovies, searchFailed, deleteMovie }) {

  const displayFailedSearch = () => {
    if(searchFailed){
      return (
        <div>
          <p className="text-center">Your search returned no results.</p>
        </div>
      )
    }
  }

  return (
    <Container fluid>
      <br />
      {displayFailedSearch()}
      <Row>
        <Col md={2}></Col>
        <Col md={8}>
          <MovieList movies={searchedMovies} deleteMovie={deleteMovie}/>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchPage;
