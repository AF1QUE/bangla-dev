// company.js
const { DataTypes } = require("sequelize");
const sequelize = require("../database"); // assuming you have configured Sequelize
const Location = require("./LocationModel"); // assuming you have defined the Location model
const Employer = require("./EmployerModel"); // assuming you have defined the Employer model

const CompanyModel = sequelize.define("company", {
  company_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  logo: {
    type: DataTypes.TEXT,
  },
  website: {
    type: DataTypes.TEXT,
  },
  facebook: {
    type: DataTypes.TEXT,
  },
  twitter: {
    type: DataTypes.TEXT,
  },
  linkedin: {
    type: DataTypes.TEXT,
  },
  employee_count: {
    type: DataTypes.NUMERIC,
    allowNull: false,
  },
  founding_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  location_id: {
    type: DataTypes.BIGINT,
    references: {
      model: Location,
      key: "location_id",
    },
    allowNull: false,
  },
  employer_id: {
    type: DataTypes.BIGINT,
    references: {
      model: Employer,
      key: "employer_id",
    },
    allowNull: false,
    unique: true,
  },
});

module.exports = CompanyModel;
