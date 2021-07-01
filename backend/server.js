const express = require("express");
const db = require("./db");

const app = express();
const port = 4000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is starting on ${port}`);
});
