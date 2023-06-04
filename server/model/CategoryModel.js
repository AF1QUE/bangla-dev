const { DataTypes } = require("sequelize");
const sequelize = require("../config");

const CategoryModel = sequelize.define("Category", {
  category_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = CategoryModel;
