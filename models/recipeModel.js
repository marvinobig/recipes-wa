const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  img: String,
  name: { type: String, required: true },
  category: String,
  description: { type: String, required: true },
  time: Number,
  ingredients: { type: Array, required: true },
  steps: { type: Array, required: true },
});

const recipe = mongoose.model("food_recipe", recipeSchema);
module.exports = recipe;
