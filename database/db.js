const Sequelize = require("sequelize");
const sequelize = new Sequelize("movie_picker", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
