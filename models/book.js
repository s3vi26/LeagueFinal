const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sumSchema = new Schema({
  name1: { type: String, required: true },
  accountId1: {type: Number, required: true},
  name2: { type: String, required: true },
  accountId2: {type: Number, required: true},

  date: { type: Date, default: Date.now }
});

const summonerz = mongoose.model("summonerz", sumSchema);

module.exports = summonerz;
