const { body, validationResult, check } = require("express-validator");

const validateRecipe = [
  body("name")
    .notEmpty()
    .withMessage("Name is empty")
    .isString()
    .withMessage("Name should be letters")
    .isLength({ min: 3 })
    .withMessage("Name should be longer than 3 letters")
    .trim()
    .escape(),
  body("description")
    .notEmpty()
    .withMessage("Description is empty")
    .isString()
    .withMessage("Description should be letters")
    .isLength({ min: 10 })
    .withMessage("Description should be longer than 10 letters")
    .trim()
    .escape(),
  body("time")
    .notEmpty()
    .withMessage("Time to make is empty")
    .isInt({ min: 1 })
    .withMessage("Time to make should be greater than 1")
    .trim()
    .escape(),
  body("ingredients")
    .notEmpty()
    .withMessage("Ingredients is empty")
    .isString()
    .withMessage("Ingredients should be letters")
    .isLength({ min: 10 })
    .withMessage("Ingredients should be longer than 10 letters")
    .trim()
    .escape(),
  body("steps")
    .notEmpty()
    .withMessage("Steps is empty")
    .isString()
    .withMessage("Steps should be letters")
    .isLength({ min: 10 })
    .withMessage("Steps should be longer than 10 letters")
    .trim()
    .escape(),
  (req, res, next) => {
    const err = validationResult(req);

    if (!err.isEmpty()) {
      return res
        .status(400)
        .render("error", { title: "Form errors", errs: err });
    } else {
      next();
    }
  },
];

const validateUpdateRecipe = [
  body("name")
    .notEmpty()
    .withMessage("Name is empty")
    .isString()
    .withMessage("Name should be letters")
    .isLength({ min: 3 })
    .withMessage("Name should be longer than 3 letters")
    .trim()
    .escape(),
  body("description")
    .notEmpty()
    .withMessage("Description is empty")
    .isString()
    .withMessage("Description should be letters")
    .isLength({ min: 10 })
    .withMessage("Description should be longer than 10 letters")
    .trim()
    .escape(),
  body("time")
    .notEmpty()
    .withMessage("Time to make is empty")
    .isInt({ min: 1 })
    .withMessage("Time to make should be greater than 1")
    .trim()
    .escape(),
  body("ingredients")
    .notEmpty()
    .withMessage("Ingredients is empty")
    .isString()
    .withMessage("Ingredients should be letters")
    .isLength({ min: 10 })
    .withMessage("Ingredients should be longer than 10 letters")
    .trim()
    .escape(),
  body("steps")
    .notEmpty()
    .withMessage("Steps is empty")
    .isString()
    .withMessage("Steps should be letters")
    .isLength({ min: 10 })
    .withMessage("Steps should be longer than 10 letters")
    .trim()
    .escape(),
  (req, res, next) => {
    const err = validationResult(req);

    if (!err.isEmpty()) {
      return res
        .status(400)
        .render("error", { title: "Form errors", errs: err });
    } else {
      next();
    }
  },
];

const validateUpdateDeletePassword = [
  body("password")
    .notEmpty()
    .withMessage("Password is empty")
    .matches("change")
    .withMessage("Password is wrong")
    .trim()
    .escape(),
  (req, res, next) => {
    const err = validationResult(req);

    if (!err.isEmpty()) {
      return res
        .status(400)
        .render("error", { title: "Form errors", errs: err });
    } else {
      next();
    }
  },
];

module.exports = {
  validateRecipe,
  validateUpdateRecipe,
  validateUpdateDeletePassword,
};
