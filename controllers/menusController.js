const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Menu
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(500).json(err));
  },
  findCategory: (req, res) => {
    db.Menu.find({ category: req.params.type })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(500).json(err));
  }
};
