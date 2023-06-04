const { DataTypes } = require("sequelize");
const sequelize = require("../config");

const LocationModel = sequelize.define("Location", {
  location_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
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
