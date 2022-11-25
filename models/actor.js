const Sequelize = require("sequelize");
const db = require("../database/db");

const Actors = db.define("actor", {
  Actor_Id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  Actor_First_Name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  Actor_Last_Name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  Actor_Gender: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Actors;
