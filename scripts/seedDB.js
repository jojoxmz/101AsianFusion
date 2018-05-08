const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/101AsianFusionCherryCreek");


// name: String, //dish name: lomein
// category: String, //Main
// type: String, //beef, ck, soup, salad
// ingredients: String,
// lunchPrice: Number,
// dinnerPrice: Number,
// smallPrice: Number,
// largePrice: Number,
// onePrice: Number,
// glutenFree: Boolean

const menuSeed =
[{
  name: "Sesame Chicken",
  category: "Main Dishes",
  type: "Chicken",
  ingredients: "Crispy chicken nuggets tossed in sweet and spicy sesame sauce. Served on a bed of steamed vegetables.",
  lunchPrice: 7.25,
  dinnerPrice: 10.50,
  glutenFree: false
},
{
  name: "Moon Harbor",
  category: "Main Dishes",
  type: "Chicken",
  ingredients: "Minced chicken sauteed w/sweet basil, red and green peppers and onion.",
  lunchPrice: 7.25,
  dinnerPrice: 10.50,
  glutenFree: false
},
{
  name: "Sriracha Beef",
  category: "Main Dishes",
  type: "Beef",
  ingredients: "Onions, broccoli & beef stir fried in the all-famous sriracha chili sauce.",
  lunchPrice: 7.75,
  dinnerPrice: 10.50,
  glutenFree: false
},
{
  name: "Cantonese Shrimp",
  category: "Seafood",
  type: "Chicken",
  ingredients: "Shrimp & vegetables stir fried in a light lobster sauce.",
  lunchPrice: 8.50,
  dinnerPrice: 10.50,
  glutenFree: true
}
];

db.Menu.remove({}).then(() => db.Menu.collection.insertMany(menuSeed)).then(data => {
  console.log(data.insertedIds.length + " records inserted!");
  process.exit(0);
}).catch(err => {
  console.error(err);
  process.exit(1);
});
