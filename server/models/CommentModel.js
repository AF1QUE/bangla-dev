// comment.js
const { DataTypes } = require("sequelize");
const sequelize = require("../database"); // assuming you have configured Sequelize
const Blog = require("./BlogModel"); // assuming you have defined the Blog model
const User = require("./UsersModel"); // assuming you have defined the User model

const CommentModel = sequelize.define("comment", {
  comment_description: {
    type: DataTypes.TEXT,
  },
  date_commented: {
    type: DataTypes.DATE,
  },
  blog_id: {
    type: DataTypes.BIGINT,
    references: {
      model: Blog,
      key: "blog_id",
    },
    allowNull: false,
  },
  user_id: {
    type: DataTypes.BIGINT,
    references: {
      model: User,
      key: "user_id",
    },
    allowNull: false,
  },
});

module.exports = CommentModel;
