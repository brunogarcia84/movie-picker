const crud = (async () => {
  const db = require("./database/db");
  const Actors = require("./models/actor");
  const Movies = require("./models/movies");

  await db.sync(); // Verify the models of tables and compare with the tables in the database

  const newActor = await Actors.create({
    Actor_First_Name: "Alan",
    Actor_Last_Name: "Rickman",
    Actor_Gender: "Male",
  });

  //   const newMovie = await Movies.create({
  //     Movie_Title: "Die Hard",
  //     Movie_Year: "1988",
  //     Movie_Lang: "English",
  //   });

  //   const findAllActors = await Actor.findAll();
  //   console.log(findAllActors);
})();

module.exports = crud;
