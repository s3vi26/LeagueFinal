import axios from "axios";

//const axios = require('axios');

const base_url = "https://na1.api.riotgames.com/lol";
const name_url =  "/summoner/v3/summoners/by-name/";
const API_Key = "?api_key=RGAPI-91deb021-dceb-4b13-ad1e-a7415d0e3397"
const summonerName = "";

const test = base_url+name_url+summonerName+API_Key;
//console.log(test)

  
export default {
  

   // Gets Summoner
   getSummoner: function(summonerName)
{

  const stupid = base_url+name_url+summonerName+API_Key;
  //axios.get(test)
  return axios.get(stupid)
  .then(response => response.data.accountId)
  .catch(function (error) {
    console.log(error);
  }); 


},

  // Gets all books
  getAllSums: function() {
    return axios.get("/api/summoners");
  },
  // Gets the book with the given id
  getSums: function(params) {
    return axios.get("/api/summoners/",params);
  },
  // Deletes the book with the given id
  deleteSums: function(id) {
    return axios.delete("/api/summoners/");
  },
  // Saves a book to the database
  saveSums: function(sumData) {
    return axios.post("/api/summoners", sumData);
  }
};
