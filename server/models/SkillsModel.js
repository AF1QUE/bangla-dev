// skills.js
const { DataTypes } = require("sequelize");
const sequelize = require("../database"); // assuming you have configured Sequelize
const Job = require("./JobModel"); // assuming you have defined the Job model

const SkillsModel = sequelize.define("skills", {
  skill_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(50),
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

module.exports = SkillsModel;
