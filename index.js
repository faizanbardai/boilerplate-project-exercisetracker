const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const createNewUser = require("./createNewUser");
const createNewExercise = require("./createNewExercise");
const getLogs = require("./getLogs");
const getUsers = require("./getUsers");
require("dotenv").config();

app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/users", getUsers);
app.post("/api/users", createNewUser);
app.post("/api/users/:id/exercises", createNewExercise);
app.get("/api/users/:_id/logs", getLogs);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
