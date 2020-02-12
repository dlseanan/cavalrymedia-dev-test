const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 4000;
var connection = mysql.createConnection({
  host: "dedi350.flk1.host-h.net",
  user: "cavalcupjy_29",
  password: "MsXB7NN5y3n8pIzoXp2I",
  database: "hades_cavalryapps"
});

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

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
