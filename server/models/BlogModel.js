// blog.js
const { DataTypes } = require("sequelize");
const sequelize = require("../database"); // assuming you have configured Sequelize
const Admin = require("./AdminModel"); // assuming you have defined the Admin model

const BlogModel = sequelize.define("blog", {
  blog_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  paragraph: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  date_posted: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  admin_id: {
    type: DataTypes.BIGINT,
    references: {
      model: Admin,
      key: "admin_id",
    },
    allowNull: false,
  },
});

module.exports = BlogModel;
