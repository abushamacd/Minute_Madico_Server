const { Sequelize } = require("sequelize");
const dotenv = require("dotenv").config();

const DB_NAME = process.env.DB_NAME;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
});

const DBConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log(`==== DB Connection is succesfully ====`.green.bold.italic);
  } catch (error) {
    console.log(`==== Database Connection Error ====`.red.bold.italic, error);
  }
};

module.exports = DBConnect;
