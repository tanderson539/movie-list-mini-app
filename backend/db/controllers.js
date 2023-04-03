const knex = require("./dbConnection");

const getAllMovies = () => {
  return knex.select("*").from("movies");
};

const getSearchedMovies = (term) => {
  return knex
    .select("*")
    .from("movies")
    .where("movie_title", "ilike", `%${term}%`);
};

const postMovie = (movie) => {
  knex("movies").insert(movie);
};

module.exports = { getAllMovies, getSearchedMovies, postMovie };
