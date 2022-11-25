const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;

// const crud = require("./database/crud");

// const allMovies = require("./routes/AllMovies");
// const singleMovie = require("./routes/SingleMovie");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

// app.use("/allMovies", allMovies);
// app.use("/singleMovie", singleMovie);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
