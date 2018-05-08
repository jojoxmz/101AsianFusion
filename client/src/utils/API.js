import axios from "axios";

export default {
  // Gets all menus
  getMenu: function() {
    return axios.get("/api/menus");
  },
  getCategory: type => axios.get('/api/menus/' + type)
};

// API.getCategory("chicken"); //do this in the react client side
