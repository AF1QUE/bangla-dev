const { DataTypes } = require("sequelize");
const sequelize = require("../config");

const EmployeeModel = sequelize.define("Employee", {
  employee_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  biography: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  profession: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  experience: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  skills: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  education: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  portfolio: {
    type: DataTypes.STRING(200),
  },
});

module.exports = EmployeeModel;
