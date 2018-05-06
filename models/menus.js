const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MenusItem = new Schema({
    name: String,
    ingredients: String,
    lunchPrice: Number,
    dinnerPrice: Number,
    smallPrice: Number,
    largePrice: Number,
    onePrice: Number,
    glutenFree: Boolean
});

const Menus = new Schema({
    // main level category (appetizers, dinner, etc)
    category: {
        name: String,
        // sub category (chicken, beef, soups, etc)
        subCategory: { subName: String, menusItems: [MenusItem] },
        menusItems: [MenusItem]
    }
});

const MenusModel = mongoose.model("MenusModel", Menus);

module.exports = MenusModel;
