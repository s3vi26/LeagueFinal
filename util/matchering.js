const _ = require('lodash')

const matchering = {
    generateList: function(matches) {
        let [sum0, sum1] = matches
        let sum0ids = _.map(sum0.matches, (match) => { return match["gameId"]})
        let sum1ids = _.map(sum1.matches, (match) => { return match["gameId"]})
        let nonMatches = _.xor(sum0ids, sum1ids)
        let mergedIds = _.flatten([sum0ids, ...sum1ids])
        let matchedIds = _.xor(nonMatches, mergedIds)
        return matchedIds
    },
    mapToGameIds: function(matches) {
        return matches.map((match) => {
          return match.data
        })
    }
}

module.exports = matchering
