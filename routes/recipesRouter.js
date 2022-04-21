const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");
const validateRecipe = require("../middleware/validators/formValidation");

router.get("/", recipeController.recipes_get);

router.get("/addRecipe", recipeController.recipe_add_form_get);

router.post(
  "/newRecipe",
  validateRecipe.validateRecipe,
  recipeController.create_recipe
);

router.get("/:recipe", recipeController.view_recipe_get);

router.get("/categories/:category", recipeController.category_get);

router.get(
  "/:recipe/updateRecipeForm",
  recipeController.recipe_update_form_get
);
router.post(
  "/:recipe/updateRecipe",
  validateRecipe.validateUpdateRecipe,
  validateRecipe.validateUpdateDeletePassword,
  recipeController.recipe_update_form_post
);

router.get(
  "/:recipe/deleteRecipeForm",
  recipeController.recipe_delete_form_get
);
router.post(
  "/:recipe/deleteRecipe",
  validateRecipe.validateUpdateDeletePassword,
  recipeController.recipe_delete_form_post
);

module.exports = router;
