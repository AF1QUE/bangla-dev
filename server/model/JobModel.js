const { DataTypes } = require("sequelize");
const sequelize = require("../config");

const JobModel = sequelize.define("Job", {
  job_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
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
    type: DataTypes.DATEONLY,
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
      model: "Location",
      key: "location_id",
    },
    allowNull: false,
  },
  category_id: {
    type: DataTypes.BIGINT,
    references: {
      model: "Category",
      key: "category_id",
    },
    allowNull: false,
  },
  employer_id: {
    type: DataTypes.BIGINT,
    references: {
      model: "Employer",
      key: "employer_id",
    },
    allowNull: false,
  },
});

module.exports = JobModel;
