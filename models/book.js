const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sumSchema = new Schema({
  // name: { type: String, required: true },
  // accountID: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const summonerz = mongoose.model("summonerz", sumSchema);

module.exports = summonerz;
