import React, { useState } from "react";
import {Form, Button} from 'react-bootstrap';

function AddMovieForm({setMovies}) {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieRating, setMovieRating] = useState('');

  const handleAddSubmit = (e) => {
    e.preventDefault();

    if(movieTitle === '' || movieRating === '') return alert('Fields cannot be empty.');

    fetch('http://localhost:8080/movies', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({movie_title:movieTitle, movie_rating:movieRating})
    })
    .then(res => res.json())
    .then(data => setMovies(data))
    .catch((err) => console.log(err));
  }

  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Movie Title</Form.Label>
          <Form.Control type="text" placeholder="Movie title" onChange={(e)=>setMovieTitle(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Movie Rating</Form.Label>
          <Form.Control type="text" placeholder="Movie Rating" onChange={(e)=>setMovieRating(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" onClick={(e)=>handleAddSubmit(e)}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddMovieForm;
