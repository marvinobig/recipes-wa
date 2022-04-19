const index_get = (req, res) => {
  res.render("index", { title: "Recipes" });
};

module.exports = {
  index_get,
};
