// category.js
const { DataTypes } = require("sequelize");
const sequelize = require("../database"); // assuming you have configured Sequelize

const CategoryModel = sequelize.define("category", {
  category_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = CategoryModel;
