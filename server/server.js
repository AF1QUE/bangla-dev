const express = require("express");
const app = express();
const sequelize = require("./config"); // assuming config.js is in the same directory

const port = 4000;

app.get("/", (req, res) => {
  res.send("server running here");
});

app.get("/about", (req, res) => {
  const name = req.name;
});

// Endpoint to query all values from the Admin table
app.get("/admin", async (req, res) => {
  try {
    // Query all rows from the Admin table
    const adminData = await sequelize.query("SELECT * FROM Admin", {
      type: sequelize.QueryTypes.SELECT,
    });

    // Send the retrieved data as a response
    res.json(adminData);
  } catch (error) {
    console.error("Error querying Admin table:", error);
    res
      .status(500)
      .json({ error: "An error occurred while querying the Admin table" });
  }
});

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
