const express = require("express");
const db = require("./db");

const app = express();
const port = 4000;

app.use(express.json());

db.pool.query(
  `CREATE TABLE lists (
  id INTEGER AUTO_INCREMENT,
  value TEXT,
  PRIMARY KEY (id)
)`,
  (err, results, fields) => {
    console.log("results: ", results);
  }
);

// db에서 모든 정보 가져오기 => client에 전달
app.get("/api/values", (req, res) => {
  db.pool.query("SELECT * FROM lists;", (err, results, fields) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// client에서 입력한 값을 db에 전달하기
app.post("/api/value", (req, res) => {
  db.pool.query(`INSERT INTO lists (value) VALUES("${req.body.value}")`),
    (err, results, fields) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        res.json({ success: true, value: req.body.value });
      }
    };
});

app.listen(port, () => {
  console.log(`Server is starting on ${port}`);
});
