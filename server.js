const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("{results}");
});

app.get("/about", (req, res) => {
  const name = req.name;
});

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
