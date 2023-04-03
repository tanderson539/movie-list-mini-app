const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const {
  getAllMovies,
  getSearchedMovies,
  postMovie,
} = require("./db/controllers");

const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).send("The API is working!");
});

app.get("/movies", (req, res) => {
  return getAllMovies()
    .then((data) => res.status(200).json(data))
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});

app.get("/search", (req, res) => {
  let term = req.query.term;

  if(term.length < 3) return res.status(400).json('Search term is to small. Ensure search term is at least 3 characters long.');

  return getSearchedMovies(term)
    .then((data) => res.send(data))
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});

app.post("/movies", (req, res) => {
  if (Array.isArray(req.body)) {
  } else {
    const { movie_title, movie_rating } = req.body;
    if (movie_title === undefined || movie_rating === undefined)
      res.status(400).send();

    postMovie(req.body);
  }
});

module.exports = app;
