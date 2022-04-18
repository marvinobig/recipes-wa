const path = require("path");
const express = require("express");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

const indexRouter = require("./routes/indexRouter");
const recipesRouter = require("./routes/recipesRouter");

app.use("/", indexRouter);
app.use("/recipes", recipesRouter);

module.exports = app;
