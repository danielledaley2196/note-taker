// Setting up dependencies
const path = require("path");
const express = require("express");

// Setting up Express app
const app = express();
const PORT = 3000;

app.use(express.static("puclic"));

// routes
app.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", (req, res) => {
  return res.sendFile(path.join(__dirname, "notes.html"));
});

// listen function
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
