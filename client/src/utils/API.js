import axios from "axios";

//const axios = require('axios');

const base_url = "https://na1.api.riotgames.com/lol";
const name_url =  "/summoner/v3/summoners/by-name/";
const API_Key = "?api_key=RGAPI-e394858c-d258-4f81-b97d-67d20fbdf1c8"
const summonerName = "wildhunt";

const test = base_url+name_url+summonerName+API_Key;
//console.log(test)

  
export default {
  

   // Gets Summoner
   getSummoner: function()
{
  console.log(test)
  //axios.get(test)
  return axios.get(test)
  
  .then(function (response) {
    console.log("accountID = " + response.data.accountId);
    console.log("summoner name = " + response.data.name);
  })
  .catch(function (error) {
    console.log(error);
  }); 


},

  // Gets all books
  getAllSums: function() {
    return axios.get("/api/summoners");
  },
  // Gets the book with the given id
  getSums: function(id) {
    return axios.get("/api/summoners/" + id);
  },
  // Deletes the book with the given id
  deleteSums: function(id) {
    return axios.delete("/api/summoners/" + id);
  },
  // Saves a book to the database
  saveSums: function(sumData) {
    return axios.post("/api/summoners", sumData);
  }
};
