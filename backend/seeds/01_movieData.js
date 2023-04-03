/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("movies").del();
  await knex("movies").insert([
    { movie_title: "Mean Girls", movie_rating: "8.5" },
    { movie_title: "Hackers", movie_rating: "7.5" },
    { movie_title: "The Grey", movie_rating: "2.5" },
    { movie_title: "Sunshine", movie_rating: "1.5" },
    { movie_title: "Ex Machina", movie_rating: "9.0" },
  ]);
};
