const recipeModel = require("../models/recipeModel");

const recipe_add_form_get = (req, res) => {
  try {
    res.render("addRecipeForm");
  } catch (err) {
    console.log(err);
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
    console.log(err);
    res.redirect("/");
  }
};

const recipes_get = async (req, res) => {
  try {
    const result = await recipeModel.find().sort({ dateAdded: 1 });
    const recipes = result;

    res.render("viewAllRecipes", { title: "All Recipes", recipes: recipes });
  } catch (err) {
    console.log(err);
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
    console.log(err);
  }
};

const view_recipe_get = async (req, res) => {
  try {
    const result = await recipeModel.findById(req.params.recipe);
    const recipe = result;

    res.render("viewRecipe", { title: recipe.name, recipe: recipe });
  } catch (err) {
    console.log(err);
  }
};

const recipe_update_form_get = async (req, res) => {
  try {
    const result = await recipeModel.findById(req.params.recipe);
    const recipe = result;

    res.render("updateRecipeForm", { recipeInfo: recipe });
  } catch (err) {
    console.log(err);
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
    console.log(err);
  }
};

const recipe_delete_form_get = async (req, res) => {
  try {
    const result = await recipeModel.findById(req.params.recipe);
    const recipe = result;

    res.render("deleteRecipeForm", { recipeInfo: recipe });
  } catch (err) {
    console.log(err);
  }
};

const recipe_delete_form_post = async (req, res) => {
  try {
    const password = "delete";

    if (password === req.body.password) {
      await recipeModel.findOneAndDelete({
        _id: req.params.recipe,
      });

      res.redirect("/recipes");
    } else {
      const result = await recipeModel.find({ _id: req.params.recipe });

      res.redirect(`/recipes/${result[0]._id}/`);
    }
  } catch (err) {
    console.log(err);
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
