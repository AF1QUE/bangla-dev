const { DataTypes } = require("sequelize");
const sequelize = require("../config");

const CommentModel = sequelize.define("Comment", {
  comment_description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  date_commented: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  blog_id: {
    type: DataTypes.BIGINT,
    references: {
      model: "Blog",
      key: "blog_id",
    },
    allowNull: false,
  },
  user_id: {
    type: DataTypes.BIGINT,
    references: {
      model: "User",
      key: "user_id",
    },
    allowNull: false,
  },
});

module.exports = CommentModel;
