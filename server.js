const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const app = express();
require("dotenv").config();
require("./config/db-config");

// TODO import routes
const homeRoute = require("./routes/welcome");
const animalRoute = require("./routes/animals");
const usersRoute = require("./routes/users");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(cors());

// TODO use routes
app.use("/", homeRoute);
app.use("/", animalRoute);
app.use("/users", usersRoute);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
