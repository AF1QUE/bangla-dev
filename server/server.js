const express = require("express");
const app = express();

const port = 4000;

app.get("/", (req, res) => {
  res.send("server running here");
});

app.get("/about", (req, res) => {
  const name = req.name;
});

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
