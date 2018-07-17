const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sumSchema = new Schema({
  name: { type: String, required: true },
  accountId: {type: Number, required: true},
  ttl: { type: Date, default: Date.now() + 1000000 }
});

const summonerz = mongoose.model("summonerz", sumSchema);

module.exports = summonerz;
