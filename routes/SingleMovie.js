const express = require("express");
const router = express.Router();

const movies = require("../movies.json");

router.get("/", (req, res) => {
  const random = Math.floor(Math.random() * 10 + 1);
  const found = movies.some((movie) => movie.id === random);

  if (found) {
    res.json(movies.filter((movie) => movie.id === random));
  } else {
    res.status(400);
    send({ msg: `Film not found: ${random}` });
  }
});

module.exports = router;
