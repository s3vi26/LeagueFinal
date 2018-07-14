const router = require("express").Router();
const sumRoutes = require("./books");

// Book routes
router.use("/summonerz", sumRoutes);

module.exports = router;
