const express = require("express");
const app = express();
const userRoutes = require("./routes/UsersRoutes");
const jobRoutes = require("./routes/JobRoutes");
const companyRoutes = require("./routes/CompanyRoutes");

const port = 4000;

// Middleware for parsing JSON data
app.use(express.json());

app.get("/", (req, res) => {
  res.send("server running here");
});

// Mount the router files
app.use(userRoutes);
app.use(jobRoutes);
app.use(companyRoutes);

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
