const express = require("express");

const path = require("path");

const autocomplete = require("./autocomplete");

const search_results = require("./search_results");

const PORT = 3000 || process.env.PORT;

const app = express();

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/autocomplete/:query", (req, res) => {
  let query = req.params.query;
  res.json(autocomplete(query));
});

app.get("/search/:query", (req, res) => {
  let query = req.params.query;
  res.json(search_results(query));
});

app.listen(PORT, () => {
  console.log(`Your server is running on PORT: ${PORT}`);
});
