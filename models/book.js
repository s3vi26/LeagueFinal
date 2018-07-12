const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sumSchema = new Schema({
  name: { type: String, required: true },
  accountID: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const Summonerz = mongoose.model("Summonerz", sumSchema);

module.exports = Summonerz;
