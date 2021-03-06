const fs = require("fs");
const path = require("path");
const recipeModel = require("../models/recipeModel");

const recipe_add_form_get = (req, res) => {
  try {
    res.render("addRecipeForm");
  } catch (err) {
    res.render("404", { title: "Error", err: err });
  }
};

const create_recipe = async (req, res) => {
  try {
    await recipeModel.create({
      name: req.body.name,
      category: req.body.category,
      description: req.body.description,
      time: req.body.time,
      ingredients: req.body.ingredients,
      steps: req.body.steps,
    });

    res.redirect("/recipes");
  } catch (err) {
    res.redirect("/");
  }
};

const recipes_get = async (req, res) => {
  try {
    const result = await recipeModel.find().sort({ dateAdded: 1 });
    const recipes = result;

    res.render("viewAllRecipes", { title: "All Recipes", recipes: recipes });
  } catch (err) {
    res.render("404", { title: "Error", err: err });
  }
};

const category_get = async (req, res) => {
  try {
    const result = await recipeModel
      .find({ category: req.params.category })
      .sort({ dateAdded: 1 });
    const recipes = result;

    res.render("viewAllRecipes", {
      title: "All Recipes",
      recipes: recipes,
    });
  } catch (err) {
    res.render("404", { title: "Error", err: err });
  }
};

const view_recipe_get = async (req, res) => {
  try {
    const result = await recipeModel.findById(req.params.recipe);
    const recipe = result;
    const ingredients = recipe.ingredients.split(".");
    const steps = recipe.steps.split(".");

    res.render("viewRecipe", {
      title: recipe.name,
      recipe: recipe,
      ingredients: ingredients,
      steps: steps,
    });
  } catch (err) {
    res.render("404", { title: "Error", err: err });
  }
};

const recipe_update_form_get = async (req, res) => {
  try {
    const result = await recipeModel.findById(req.params.recipe);
    const recipe = result;

    res.render("updateRecipeForm", {
      title: "Update",
      recipeInfo: recipe,
    });
  } catch (err) {
    res.render("404", { title: "Error", err: err });
  }
};

const recipe_update_form_post = async (req, res) => {
  try {
    const result = await recipeModel.findByIdAndUpdate(
      req.params.recipe,
      {
        name: req.body.name,
        category: req.body.category,
        description: req.body.description,
        time: req.body.time,
        ingredients: req.body.ingredients,
        steps: req.body.steps,
      },
      { new: true }
    );

    res.redirect(`/recipes/${result._id}`);
  } catch (err) {
    res.render("404", { title: "Error", err: err });
  }
};

const recipe_delete_form_get = async (req, res) => {
  try {
    const result = await recipeModel.findById(req.params.recipe);
    const recipe = result;

    res.render("deleteRecipeForm", {
      title: "Delete",
      recipeInfo: recipe,
      action: "deleteRecipe",
    });
  } catch (err) {
    res.render("404", { title: "Error", err: err });
  }
};

const recipe_delete_form_post = async (req, res) => {
  try {
    const result = await recipeModel.findById(req.params.recipe);

    filePath = path.join(__dirname, "../public", result.img);
    fs.unlink(filePath, (err) => console.log(err));

    await result.deleteOne({
      _id: req.params.recipe,
    });

    res.redirect("/recipes");
  } catch (err) {
    res.render("404", { title: "Error", err: err });
  }
};

module.exports = {
  recipe_add_form_get,
  create_recipe,
  recipes_get,
  category_get,
  view_recipe_get,
  recipe_update_form_get,
  recipe_update_form_post,
  recipe_delete_form_get,
  recipe_delete_form_post,
};
