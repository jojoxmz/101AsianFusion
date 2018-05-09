const db = require("../models");

module.exports = {
  findAll: (req, res) => {
    console.log("All controller working");
    db.Menu
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(500).json(err));
  },
  findType: (req, res) => {
    console.log("Type Contoller working");
    db.Menu.find({ type: req.params.type })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(500).json(err));
  },
  findCategory: (req, res) => {
    console.log("Category controller working");
    db.Menu.find({ category: req.params.category })
    .sort([['type', 1]])
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(500).json(err));
  }
};
