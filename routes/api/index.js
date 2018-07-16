const router = require("express").Router();
const summonerRoutes = require("./summoner")

router.use("/summoners", summonerRoutes);

module.exports = router;
