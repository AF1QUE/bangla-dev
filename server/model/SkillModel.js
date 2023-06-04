const { DataTypes } = require("sequelize");
const sequelize = require("../config");

const SkillModel = sequelize.define("Skills", {
  skill_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  job_id: {
    type: DataTypes.BIGINT,
    references: {
      model: "Job",
      key: "job_id",
    },
    allowNull: false,
  },
});

module.exports = SkillModel;
