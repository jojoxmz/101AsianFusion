const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MenuModel = new Schema({
    name: String, //dish name: lomein
    category: String, //lunch, dinner
    type: String, //beef, ck, soup, salad
    ingredients: String,
    lunchPrice: Number,
    dinnerPrice: Number,
    smallPrice: Number,
    largePrice: Number,
    onePrice: Number,
    spicy: Boolean,
    glutenFree: Boolean
});


const Menu = mongoose.model("Menu", MenuModel);

module.exports = Menu;
