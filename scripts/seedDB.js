const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/101AsianFusionCherryCreek", {useMongoClient: true});

const menuSeed = {
  categories: {
    lunch: {
      chicken: [
        {
          name: "Sesame Chicken",
          ingredients: "Crispy chicken nuggets tossed in sweet and spicy sesame sauce. Served on a bed of steamed vegetables.",
          price: 7.25,
          glutenfree: false
        }, {
          name: "Moon Harber",
          ingredients: "Minced chicken sauteed w/sweet basil, red and green peppers and onion.",
          price: 7.25,
          glutenfree: false
        }
      ],
      beef: [
        {
          name: "Sriracha Beef",
          ingredients: "Onions, broccoli & beef stir fried in the all-famous sriracha chili sauce.",
          price: 7.75,
          glutenfree: false
        },
        {
          name: "Mongolian Beef",
          ingredients: "Beef stir fried w/green and red onions.",
          price: 7.75,
          glutenfree: false
        }
      ],
      seafood: [
        {
          name: "Shrimp Tempura",
          ingredients: "Jumbo shrimp dipped in light & crispy batter then fried.",
          price: 8.50,
          glutenfree: false
        },
        {
          name: "Cantonese Shrimp",
          ingredients: "Shrimp & vegetables stir fried in a light lobster sauce.",
          price: 8.50,
          glutenfree: true
        }
      ]
    }

  }
};

db.Menu.remove({}).then(() => db.Menu.collection.insertMany(menuSeed)).then(data => {
  console.log(data.insertedIds.length + " records inserted!");
  process.exit(0);
}).catch(err => {
  console.error(err);
  process.exit(1);
});
