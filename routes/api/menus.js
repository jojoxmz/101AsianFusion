const router = require("express").Router();
const menusController = require("../../controllers/menusController");

// Matches with "/api/menus"
router.route("/menus")
  .get(menusController.findAll);

module.exports = router;
