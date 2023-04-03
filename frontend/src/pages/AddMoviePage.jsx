import React from 'react'
import AddMovieForm from '../components/AddMovieForm';
import {Container, Col, Row} from 'react-bootstrap';

function AddMoviePage({setMovies}) {
  return (
    <Container fluid>
      <br />
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          <AddMovieForm setMovies={setMovies}/>
        </Col>
      </Row>
    </Container>
  );
}

export default AddMoviePage