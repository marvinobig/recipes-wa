const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const sass = require("node-sass-middleware");
const multer = require("multer");
const express = require("express");
const app = express();

dotenv.config();

// database setup
const db = process.env.MONGODB_URI;
mongoose.connect(db, () => {
  console.log("Connected");
});

// ejs setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// use static files setup
app.use(express.static(path.join(__dirname, "public")));

//scss setup
app.use(
  sass({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    indentedSyntax: false,
    sourceMap: true,
  })
);

//access to form body
app.use(express.urlencoded({ extended: true }));

//router files
const indexRouter = require("./routes/indexRouter");
const recipesRouter = require("./routes/recipesRouter");

app.use("/", indexRouter);
app.use("/recipes", recipesRouter);

module.exports = app;
