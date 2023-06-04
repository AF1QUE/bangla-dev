const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "postgresql://doadmin:AVNS_B9KNY74mSgqO-re-IQI@bangla-dev-db-do-user-12931183-0.b.db.ondigitalocean.com:25060/defaultdb?sslmode=no-verify"
);

// const connectDB = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// };

// connectDB();

module.exports = sequelize;
