const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");

router.get("/", recipeController.recipes_get);

router.get("/addRecipe", recipeController.recipe_add_form_get);

router.post("/newRecipe", recipeController.create_recipe);

router.get("/:recipe", recipeController.view_recipe_get);

router.get("/categories/:category", recipeController.category_get);

router.get(
  "/:recipe/updateRecipeForm",
  recipeController.recipe_update_form_get
);
router.post("/:recipe/updateRecipe", recipeController.recipe_update_form_post);

router.get(
  "/:recipe/deleteRecipeForm",
  recipeController.recipe_delete_form_get
);
router.post("/:recipe/deleteRecipe", recipeController.recipe_delete_form_post);

module.exports = router;
