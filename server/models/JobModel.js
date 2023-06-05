// job.js
const { DataTypes } = require("sequelize");
const sequelize = require("../database"); // assuming you have configured Sequelize
const Location = require("./LocationModel"); // assuming you have defined the Location model
const Category = require("./CategoryModel"); // assuming you have defined the Category model
const Employer = require("./EmployerModel"); // assuming you have defined the Employer model

const JobModel = sequelize.define("job", {
  job_id: {
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
    type: DataTypes.TEXT,
    allowNull: false,
  },
  salary: {
    type: DataTypes.NUMERIC(10, 2),
    allowNull: false,
  },
  date_posted: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  featured: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  seniority_level: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  english_level: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING(50),
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
  category_id: {
    type: DataTypes.BIGINT,
    references: {
      model: Category,
      key: "category_id",
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
  },
});

module.exports = JobModel;
