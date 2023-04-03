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
  return knex("movies")
    .insert(movie)
    .then((data) => knex.select("*").from("movies"));
};

const deleteMovie = (id) => {
  return knex("movies")
    .where('id', '=', id)
    .del()
    .then((data) => knex.select("*").from("movies"));
};
module.exports = { getAllMovies, getSearchedMovies, postMovie, deleteMovie };
