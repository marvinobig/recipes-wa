const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("viewAllRecipes", { title: "All Recipes" });
});

module.exports = router;
