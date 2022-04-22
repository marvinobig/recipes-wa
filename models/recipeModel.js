const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  time: { type: Number, required: true },
  ingredients: { type: String, required: true },
  steps: { type: String, required: true },
  img: String,
});

const recipe = mongoose.model("food_recipe", recipeSchema);
module.exports = recipe;
