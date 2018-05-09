const router = require("express").Router();
const menusController = require("../../controllers/menusController");

// Matches with "/api/menus"
router.route("/").get(menusController.findAll);

router.route('/:type').get(menusController.findType);

router.route('/category/:category').get(menusController.findCategory);

module.exports = router;
