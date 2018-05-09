import axios from "axios";

export default {
  // Gets all menus
  getMenu: function() {
    return axios.get("/api/menus");
  },
  getType: function(type) {
    console.log("Type API WORKING!");
    console.log("API type: ", type);

    return axios.get("/api/menus/" + type);
  },
  getCategory: function(category) {
    console.log("Category API WORKING!");
    console.log("API category: ", category);

    return axios.get("/api/menus/category/" + category);
  }
};
