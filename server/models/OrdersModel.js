// orders.js
const { DataTypes } = require("sequelize");
const sequelize = require("../database"); // assuming you have configured Sequelize
const Employer = require("./EmployerModel"); // assuming you have defined the Employer model

const OrdersModel = sequelize.define("orders", {
  order_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  time: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  price: {
    type: DataTypes.NUMERIC(10, 2),
    allowNull: false,
  },
  duration: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  transaction_id: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  employer_id: {
    type: DataTypes.BIGINT,
    references: {
      model: Employer,
      key: "employer_id",
    },
    allowNull: false,
  },
});

module.exports = OrdersModel;
