const express = require("express");
const mysql = require("mysql");

const config = {
  host: process.env.REACT_APP_MYSQL_HOST.replace(/'/g, ""),
  user: process.env.REACT_APP_MYSQL_USER.replace(/'/g, ""),
  password: process.env.REACT_APP_MYSQL_PASSWORD.replace(/'/g, ""),
  database: process.env.REACT_APP_MYSQL_DATABASE.replace(/'/g, "")
};

const app = express();
const port = 4000;
const connection = mysql.createConnection(config);

connection.connect();

app.post("/", async (req, res) => {
  connection.query(`INSERT INTO Candles () VALUES (${req.body.item})`, function(
    err,
    rows,
    fields
  ) {
    if (err) throw err;
  });
  res.send({ result: "ok" });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
