const { DataTypes } = require("sequelize");
const sequelize = require("../config");

const UserModel = sequelize.define("User", {
  user_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  first_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  date_of_birth: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  avatar: {
    type: DataTypes.STRING(150),
  },
  role: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  admin_id: {
    type: DataTypes.BIGINT,
    references: {
      model: "Admin",
      key: "admin_id",
    },
    unique: true,
  },
  employee_id: {
    type: DataTypes.BIGINT,
    references: {
      model: "Employee",
      key: "employee_id",
    },
    unique: true,
  },
  employer_id: {
    type: DataTypes.BIGINT,
    references: {
      model: "Employer",
      key: "employer_id",
    },
    unique: true,
  },
});

module.exports = UserModel;
