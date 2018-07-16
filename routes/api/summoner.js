const router = require("express").Router()
const summonerController = require("../../controllers/summonerController.js")
const matchering = require('../../util/matchering.js')

router.post("/matches",  (req, res) => {
    summonerController.getMatchingGames(req.body).then((matches) => {
        let matchData = matchering.generateList(matchering.mapToGameIds(matches))
        console.log(matchData, "MATCHES")
        return res.json(matchData)
    }).catch((err) => console.log(err))
})

module.exports = router
