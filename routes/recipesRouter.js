const express = require("express");
const router = express.Router();

const recipes = [
  {
    img: "",
    name: "Lasagne",
    category: "Dinner",
    description: "Best dinner",
    url: "",
    user: "Marv",
    dateAdded: new Date().toLocaleDateString(),
  },
  {
    img: "",
    name: "Fried Egg",
    category: "Breakfast",
    description: "Protein to start the day off.",
    url: "",
    user: "Simo",
    dateAdded: new Date().toLocaleDateString(),
  },
  {
    img: "",
    name: "Chocolate Brownie",
    category: "Snack",
    description: "Chocolaty goodness.",
    url: "",
    user: "Martin",
    dateAdded: new Date().toLocaleDateString(),
  },
  {
    img: "",
    name: "Turkey Sandwich",
    category: "Lunch",
    description: "Made with love.",
    url: "",
    user: "Simon",
    dateAdded: new Date().toLocaleDateString(),
  },
];

router.get("/", (req, res) => {
  res.render("viewAllRecipes", { title: "All Recipes", recipes: recipes });
});

module.exports = router;
