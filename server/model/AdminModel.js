const { DataTypes } = require("sequelize");
const sequelize = require("../config");

const AdminModel = sequelize.define("Admin", {
  admin_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
});

module.exports = AdminModel;
