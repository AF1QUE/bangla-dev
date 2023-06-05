// employer.js
const { DataTypes } = require("sequelize");
const sequelize = require("../database"); // assuming you have configured Sequelize

const EmployerModel = sequelize.define("employer", {
  employer_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
});

module.exports = EmployerModel;
