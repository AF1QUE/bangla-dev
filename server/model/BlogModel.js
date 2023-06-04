const { DataTypes } = require("sequelize");
const sequelize = require("../config");

const BlogModel = sequelize.define("Blog", {
  blog_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
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
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  admin_id: {
    type: DataTypes.BIGINT,
    references: {
      model: "Admin",
      key: "admin_id",
    },
    allowNull: false,
  },
});

module.exports = BlogModel;
