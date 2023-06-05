// application.js
const { DataTypes } = require("sequelize");
const sequelize = require("../database"); // assuming you have configured Sequelize
const Employee = require("./EmployeeModel"); // assuming you have defined the Employee model
const Job = require("./JobModel"); // assuming you have defined the Job model

const ApplicationModel = sequelize.define("application", {
  application_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  attachment: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  employee_id: {
    type: DataTypes.BIGINT,
    references: {
      model: Employee,
      key: "employee_id",
    },
    allowNull: false,
  },
  job_id: {
    type: DataTypes.BIGINT,
    references: {
      model: Job,
      key: "job_id",
    },
    allowNull: false,
  },
});

module.exports = ApplicationModel;
