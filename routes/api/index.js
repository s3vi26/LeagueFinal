const router = require("express").Router();
const sumRoutes = require("./books");

// Book routes
router.use("/summoners", sumRoutes);

module.exports = router;
