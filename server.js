const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const app = express();
require("dotenv").config();
require("./config/db-config");

// imported routes
const homeRoute = require("./routes/welcome");
const animalRoute = require("./routes/animals");
const usersRoute = require("./routes/users");
const mailerRoute = require("./routes/mailer");
const tasksRoute = require("./routes/tasks");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(cors());

// using routes
app.use("/", homeRoute);
app.use("/", animalRoute);
app.use("/users", usersRoute);
app.use("/", mailerRoute);
app.use("/", tasksRoute);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});

module.exports = app;

// TODO when deploying to heroku: heroku config:set ...
