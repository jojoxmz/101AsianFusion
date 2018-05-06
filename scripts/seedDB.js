const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/101AsianFusionCherryCreek", {useMongoClient: true});

const menuSeed = {
  category: {
      name: "Dinner",
      subCategory: {
          subName: "Chicken",
          menusItems: [
            {
              name: "Sesame Chicken",
              ingredients: "Crispy chicken nuggets tossed in sweet and spicy sesame sauce. Served on a bed of steamed vegetables.",
              lunchPrice: 7.25,
              dinnerPrice: 10.50,
              glutenfree: false
            }, {
              name: "Moon Harber",
              ingredients: "Minced chicken sauteed w/sweet basil, red and green peppers and onion.",
              price: 7.25,
              dinnerPrice: 10.50,
              glutenfree: false
            }
          ]
      },
      subCategory: {
          subName: "Beef",
          menusItems: [
            {
              name: "Sriracha Beef",
              ingredients: "Onions, broccoli & beef stir fried in the all-famous sriracha chili sauce.",
              price: 7.75,
              dinnerPrice: 10.50,
              glutenfree: false
            },
            {
              name: "Mongolian Beef",
              ingredients: "Beef stir fried w/green and red onions.",
              price: 7.75,
              dinnerPrice: 10.50,
              glutenfree: false
            }
          ]
      },
      subCategory: {
          subName: "Seafood",
          menusItems: [
            {
              name: "Shrimp Tempura",
              ingredients: "Jumbo shrimp dipped in light & crispy batter then fried.",
              price: 8.50,
              dinnerPrice: 10.50,
              glutenfree: false
            },
            {
              name: "Cantonese Shrimp",
              ingredients: "Shrimp & vegetables stir fried in a light lobster sauce.",
              price: 8.50,
              dinnerPrice: 10.50,
              glutenfree: true
            }
          ]
      },
      subCategory: {
          subName: "Vegetables",
          menusItems: [
            {
              name: "Stir fried Mix Veggies",
              ingredients: "Stir fry mix vegetables.",
              price: 6.95,
              dinnerPrice: 8.95,
              glutenfree: true
            },
            {
              name: "Sesame Tofu",
              ingredients: "Golden tofu tossed in sweet and spicy sesame sauce. Served w/steamed vegetables.",
              price: 6.95,
              dinnerPrice: 8.95,
              glutenfree: false
            }
          ]
      },
      subCategory: {
          subName: "Thai Curries",
          menusItems: [
            {
              name: "Red Curry",
              ingredients: "Spicy red curry w/peas, red & green peppers, onions & sweet basil.",
              price: 7.50,
              dinnerPrice: 10.50,
              glutenfree: true
            },
            {
              name: "Panang",
              ingredients: "Rich thick Panang curry sauce, cooked w/coconut milk, basil leaves and vegetables.",
              price: 7.50,
              dinnerPrice: 10.50,
              glutenfree: true
            }
          ]
      },
      subCategory: {
          subName: "Noodles & Rice",
          menusItems: [
            {
              name: "Pad Thai",
              ingredients: "Thailand's best known noodle dish. Rice noodles w/egg, green onions, bean sprouts and chopped peanuts.",
              price: 7.25,
              dinnerPrice: 8.95,
              glutenfree: false
            },
            {
              name: "Fried Rice",
              ingredients: "Green peas, carrots and egg.",
              price: 7.25,
              dinnerPrice: 8.95,
              glutenfree: false
            }
          ]
      },
      subCategory: {
          subName: "Vietnamese Noodle Bowls",
          menusItems: [
            {
              name: "Chicken, Beef, Pork or Tofu",
              ingredients: "Healthy and tasty rice noodle bowl with bean sprouts & lettuce, served with chili-lime sauce.",
              price: 6.95,
              dinnerPrice: 7.95,
              glutenfree: false
            },
            {
              name: "Shrimp or Combination",
              ingredients: "Healthy and tasty rice noodle bowl with bean sprouts & lettuce, served with chili-lime sauce.",
              price: 6.95,
              dinnerPrice: 7.95,
              glutenfree: false
            }
          ]
      },
      subCategory: {
          subName: "Rice Bowls",
          menusItems: [
            {
              name: "Chicken, Beef, Pork or Tofu",
              ingredients: "Grilled meat on top of steamed rice, served w/steamed vegetables and teriyaki sauce on the side.",
              price: 6.95,
              dinnerPrice: 7.95,
              glutenfree: false
            },
            {
              name: "Shrimp or Combination",
              ingredients: "Grilled meat on top of steamed rice, served w/steamed vegetables and teriyaki sauce on the side.",
              price: 6.95,
              dinnerPrice: 7.95,
              glutenfree: false
            }
          ]
      },
      name: "Soups & Salads",
      subCategory: {
          subName: "Soups",
          menusItems: [
            {
              name: "Miso Soup",
              ingredients: "A Japanese favorite w/tofu, miso and seaweed.",
              smallPrice: 7.25,
              largePrice: 10.50,
              glutenfree: true
            }, {
              name: "Egg Drop Soup",
              ingredients: "Wispy beaten eggs in boiled vegetable broth",
              smallPrice: 7.25,
              largePrice: 10.50,
              glutenfree: true
            }
          ]
      },
      subCategory: {
      subName: "Salads",
      menusItems: [
        {
          name: "House",
          ingredients: "Spring mix with our special house made sauce.",
          onePrice: 3.50,
          glutenfree: false
        }, {
          name: "Avocado & Crab Salad",
          ingredients: "Spring salad mixed w/crab meat & avocado in house sauce.",
          onePrice: 5.95,
          glutenfree: false
        }
      ]
  },
  name: "101 Specials",
  subCategory: {
      subName: "101 Specials",
      menusItems: [
        {
          name: "Happy Family",
          ingredients: "Stir-fried chicken, beef, shrimp, scallops and vegetables in brown sauce.",
          onePrice: 14.50,
          glutenfree: false
        }, {
          name: "Asparagus Shrimp",
          ingredients: "Jumbo shrimp w/asparagus in a light sauce.",
          onePrice: 13.50,
          glutenfree: false
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
