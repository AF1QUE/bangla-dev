// location.js
const { DataTypes } = require("sequelize");
const sequelize = require("../database"); // assuming you have configured Sequelize

const LocationModel = sequelize.define("location", {
  location_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  street: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  city: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  division: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = LocationModel;
