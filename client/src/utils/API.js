import axios from "axios"

export default {
  getMatches: function(params) {
    return axios.post("/api/summoners/matches/", params);
  }
}
