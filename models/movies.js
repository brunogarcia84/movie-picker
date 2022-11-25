const Sequelize = require("sequelize");
const db = require("../database/db");

const Movies = db.define("movies", {
  Movie_Id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  Movie_Title: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  Movie_Year: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  Movie_Lang: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Movies;
