const sequelize = require("./config");
const User = require("./model/UserModel");

// Synchronize the model with the database
sequelize
  .sync()
  .then(() => {
    console.log("Database and tables created!");
  })
  .catch((error) => {
    console.error("Error creating database and tables:", error);
  });
