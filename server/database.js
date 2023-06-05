const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "postgresql://doadmin:AVNS_B9KNY74mSgqO-re-IQI@bangla-dev-db-do-user-12931183-0.b.db.ondigitalocean.com:25060/defaultdb?sslmode=no-verify",
  {
    define: {
      timestamps: false, // Disable timestamps for all models.
      freezeTableName: true, // Keeps model name same, and doesn't pluralize.
      logging: false, // stops logging queries in the console
    },
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    // Sync all models
    await sequelize.sync();
    console.log("All models have been synchronized.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connectDB();

module.exports = sequelize;
