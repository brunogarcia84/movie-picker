const movies = require("./movies.json");

const show_all_movies = movies.map((movie) => {
  return movie.name;
});

const random_movie = movies.filter((movie) => {
  const random = Math.floor(Math.random() * 10 + 1);

  const movie_of_the_day = movie.id === random ? movie.name : "";
  return movie_of_the_day;
});

console.log(show_all_movies);
console.log(random_movie);

module.exports = {
  show_all_movies,
  random_movie,
};
