const { DataTypes } = require("sequelize");
const sequelize = require("../config");

const EmployerModel = sequelize.define("Employer", {
  employer_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
});

module.exports = EmployerModel;
