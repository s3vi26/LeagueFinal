const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/summonerzDB",
);

const sumSeed = [
  {
    name: "Test Name",
    accountID: 1234567890,
    date: new Date(Date.now())
  },
];

db.summonerz
  .remove({})
  .then(() => db.summonerz.collection.insertMany(sumSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
