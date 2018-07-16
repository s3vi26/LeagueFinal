const summoner = require ('../models/summoner.js')
const _ = require('lodash')

const controller = {
    getMatchingGames: function(body) {
        return Promise.all(_.values(body).map((name) => {
            return summoner.accountBySummonerName(name)
        })).then((bodies) => {
          let accountIds = bodies.map((body) => { return body.data.accountId })
          console.log(accountIds, "ACCOUNT IDS GET MATCHING GAMES IN THEN")
            return Promise.all(accountIds.map((accountId) => {
              return summoner.matchListByAccountId(accountId)
            }))
        }).catch((err) => console.log(err))
    }
}

// [{summonerID: 43, matches: []}, {summonerID: 43, matches: []}]
module.exports = controller

/* return matchering.generateList(accountIds.map((accountId) => {
 * }))
 */
// DONE
// get accountid first
// store account id
// pull acccount id
// get matchlist by account id
// filter down 2 matchlists by gameId to matching gameIds

// TODO
// store match data in DB in getMatchingGames function
// new endpoint to get champoin and game info
// get [champion ids] for each gameId from matchData in DB
// use api with champioin id to get champion data
// use data dragon api to generate src links to champion images
