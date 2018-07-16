import axios from "axios"

export default {
  getMatches: function(params) {
    return axios.post("http://api.lolmatcher.com/api/summoners/matches/", params);
  }
}
