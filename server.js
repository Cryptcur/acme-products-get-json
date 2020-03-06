const express = require("express");
const app = express();
const path = require("path");
const db = require("./db");

const PORT = process.send.PORT || 3000;

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.get("/api/products", (req, res, next) => {
  db.readJSON("./products.json")
    .then(products => res.send(products))
    .catch(ex => next(ex));
});

app.post("/api/products", (req, res, next) => {});

app.get("/api/companies", (req, res, next) => {
  db.readJSON("./companies.json")
    .then(companies => res.send(companies))
    .catch(ex => next(ex));
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
