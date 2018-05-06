const router = require("express").Router();
const menuRoutes = require("./menus");

// menus routes
router.use("/menus", menuRoutes);

module.exports = router;
