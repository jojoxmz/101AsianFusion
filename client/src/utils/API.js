import axios from "axios";

export default {
  // Gets all menus
  getMenus: function() {
    return axios.get("/menus");
  }
};
