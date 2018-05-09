const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/101AsianFusionCherryCreek");

const menuSeed = [
  {
    name: "101 Spring Rolls",
    category: "Appetizer",
    type: "Starts",
    ingredients: "shredded vegetables wrapped in a delicate pancake then fried",
    onePrice: 3.00
  }, {
    name: "Edamame",
    category: "Appetizer",
    type: "Starts",
    ingredients: "soy beans in the pod. Packed w/protein and fun to eat",
    onePrice: 4.50,
    glutenFree: true
  }, {
    name: "Crab Rangoon",
    category: "Appetizer",
    type: "Starts",
    ingredients: "6 crab & cream cheese filled wontons fried till golden brown",
    onePrice: 4.50
  }, {
    name: "Shrimp Tempura",
    category: "Appetizer",
    type: "Starts",
    ingredients: "4 pieces of crunchy shrimp",
    onePrice: 5.50
  }, {
    name: "Steamed Dumplings",
    category: "Appetizer",
    type: "Starts",
    ingredients: "6 steamed pork and vegetable filled dumplings",
    onePrice: 5.95
  }, {
    name: "Pot Stickers",
    category: "Appetizer",
    type: "Starts",
    ingredients: "6 steamed pork and vegetable filled dumplings",
    onePrice: 5.95
  }, {
    name: "Coconut Shrimp",
    category: "Appetizer",
    type: "Starts",
    ingredients: "5 crispy jumbo shrimp w/Coconut flavor",
    onePrice: 6.50
  }, {
    name: "Salt & Pepper Calamari",
    category: "Appetizer",
    type: "Starts",
    ingredients: "5 crispy jumbo shrimp w/Coconut flavor",
    onePrice: 6.50,
    spicy: true
  }, {
    name: "Thai Spring Rolls",
    category: "Appetizer",
    type: "Starts",
    ingredients: "choice of shrimp or tofu w/a hint of rice noodles, a tantalizing sauce makes this a must try",
    onePrice: 5.00,
    glutenFree: true
  }, {
    name: "Thai Tuna Spring Rolls",
    category: "Appetizer",
    type: "Starts",
    ingredients: "choice of shrimp or tofu w/a hint of rice noodles, a tantalizing sauce makes this a must try",
    onePrice: 7.00,
    glutenFree: true
  }, {
    name: "Shumai",
    category: "Appetizer",
    type: "Starts",
    ingredients: "open-faced dumplings filled with shrimp",
    onePrice: 4.50
  }, {
    name: "Vietnamese Egg Rolls",
    category: "Appetizer",
    type: "Starts",
    ingredients: "pork vegetables & vermicelli noodles wrapped in rice paper then fried. Served with chili-lime sauce",
    onePrice: 5.00
  }, {
    name: "Lettuce Wraps",
    category: "Appetizer",
    type: "Starts",
    ingredients: "stir fried minced chicken in our fabulous special sauce, served w/crispy lettuce on side",
    onePrice: 7.50,
    spicy: true
  }, {
    name: "Miso Soup",
    category: "soupsandsalads",
    type: "Soups",
    ingredients: "a Japanese favorite w/tofu, miso and seaweed",
    smallPrice: 1.95,
    largePrice: 3.90,
    glutenFree: true
  }, {
    name: "Egg Drop Soup",
    category: "soupsandsalads",
    type: "Soups",
    ingredients: "wispy beaten eggs in boiled clear broth",
    smallPrice: 1.95,
    largePrice: 3.90,
    glutenFree: true
  }, {
    name: "Wonton Soup",
    category: "soupsandsalads",
    type: "Soups",
    ingredients: "homemade pork & vegetable dumplings in a clear broth",
    smallPrice: 1.95,
    largePrice: 3.90,
    glutenFree: false
  }, {
    name: "Sandon Hot & Sour Soup",
    category: "soupsandsalads",
    type: "Soups",
    ingredients: "traditional Chinese hot and sour soup",
    smallPrice: 1.95,
    largePrice: 3.90,
    spicy: true,
    glutenFree: false
  }, {
    name: "Chicken Corn Egg Drop Soup",
    category: "soupsandsalads",
    type: "Soups",
    ingredients: "wispy beaten eggs, chicken, corn, peas, and carrots in boiled clear broth",
    smallPrice: 2.95,
    largePrice: 5.90,
    glutenFree: true
  }, {
    name: "Chicken Coconut Soup (Tom Kha Gai)",
    category: "soupsandsalads",
    type: "Soups",
    ingredients: "spicy Thai soup with all the essential spices",
    smallPrice: 2.95,
    largePrice: 5.90,
    spicy: true,
    glutenFree: true
  }, {
    name: "Thai Hot & Sour Soup",
    category: "soupsandsalads",
    type: "Soups",
    ingredients: "shrimp, lemongrass, you name it, it's there in this authentic Thai Tom Yum Goong soup",
    smallPrice: 2.95,
    largePrice: 5.90,
    spicy: true,
    glutenFree: true
  }, {
    name: "House Salad",
    category: "soupsandsalads",
    type: "Salads",
    ingredients: "spring mix with our special ginger dressing on the side",
    onePrice: 3.50,
    spicy: false
  }, {
    name: "Avocado & Crab Salad",
    category: "soupsandsalads",
    type: "Salads",
    ingredients: "spring salad mixed w/crab meat & avocado in a spicy mayo sauce",
    onePrice: 5.95,
    spicy: true
  }, {
    name: "Seaweed Salad",
    category: "soupsandsalads",
    type: "Salads",
    ingredients: "this is a must try if you're adventurous",
    onePrice: 4.95
  }, {
    name: "Beef or Chicken Salad",
    category: "soupsandsalads",
    type: "Salads",
    ingredients: "grilled beef or chicken strips w/fresh mixed greens in a chili-lime dressing",
    onePrice: 5.95
  }, {
    name: "Tuna Tataki Salad",
    category: "soupsandsalads",
    type: "Salads",
    ingredients: "spring salad mixed w/Tataki tuna in house sauce",
    onePrice: 8.95
  }, {
    name: "Sesame Chicken",
    category: "Main Dishes",
    type: "Chicken",
    ingredients: "crispy chicken nuggets tossed in sweet and spicy sesame sauce wtih a bed of steamed vegetables",
    lunchPrice: 7.25,
    dinnerPrice: 10.50,
    spicy: true
  }, {
    name: "Moon Harbor",
    category: "Main Dishes",
    type: "Chicken",
    ingredients: "minced chicken sauteed w/sweet basil, red and green peppers and onion",
    lunchPrice: 7.25,
    dinnerPrice: 10.50,
    spicy: true
  }, {
    name: "Sweet & Sour Chicken",
    category: "Main Dishes",
    type: "Chicken",
    ingredients: "served w/pineapple, bell pepper & onions in sweet & sour sauce",
    lunchPrice: 7.25,
    dinnerPrice: 10.50
  }, {
    name: "Orange Chicken",
    category: "Main Dishes",
    type: "Chicken",
    ingredients: "deep fried chicken in orange flavor sauce",
    lunchPrice: 7.25,
    dinnerPrice: 10.50,
    spicy: true
  }, {
    name: "General Tao's Chicken",
    category: "Main Dishes",
    type: "Chicken",
    ingredients: "deep fried chicken in hot & sweet sauce",
    lunchPrice: 7.25,
    dinnerPrice: 10.50,
    spicy: true
  }, {
    name: "Yushan Chicken",
    category: "Main Dishes",
    type: "Chicken",
    ingredients: "wok-tossed chicken & vegetables in a spicy garlic sauce",
    lunchPrice: 7.25,
    dinnerPrice: 10.50,
    spicy: true
  }, {
    name: "Royal Chicken",
    category: "Main Dishes",
    type: "Chicken",
    ingredients: "thai version of cashew chicken breast sauteed with cashews, red and green peppers, and onions",
    lunchPrice: 7.25,
    dinnerPrice: 10.50
  }, {
    name: "Lemongrass Chicken",
    category: "Main Dishes",
    type: "Chicken",
    ingredients: "tender slices of chicken, bell pepper and onions in a lemongrass garlic sauce",
    lunchPrice: 7.25,
    dinnerPrice: 10.50
  }, {
    name: "Basil Chicken",
    category: "Main Dishes",
    type: "Chicken",
    ingredients: "this is truly one of the favorite hot chicken dishes",
    lunchPrice: 7.25,
    dinnerPrice: 10.50,
    spicy: true
  }, {
    name: "Kung Pao Chicken",
    category: "Main Dishes",
    type: "Chicken",
    ingredients: "green and red bell peppers, celery, zucchini, peanuts, stir fried in a spicy brown sauce",
    lunchPrice: 7.25,
    dinnerPrice: 10.50,
    spicy: true
  }, {
    name: "Teriyaki Chicken",
    category: "Main Dishes",
    type: "Chicken",
    ingredients: "grilled marinated chicken covered with sweet and tempting teriyaki sauce",
    lunchPrice: 7.25,
    dinnerPrice: 10.50
  }, {
    name: "Chicken Broccoli",
    category: "Main Dishes",
    type: "Chicken",
    ingredients: "slices of chicken breast stir fried with broccoli and carrots in a tasty white sauce",
    lunchPrice: 7.25,
    dinnerPrice: 10.50,
    glutenFree: true
  }, {
    name: "Chicken with Green Bean",
    category: "Main Dishes",
    type: "Chicken",
    ingredients: "slices of chicken breast stir fried with green beans in a semi-sweet brown sauce",
    lunchPrice: 7.25,
    dinnerPrice: 10.50
  }, {
    name: "Sriracha Beef",
    category: "Main Dishes",
    type: "Beef",
    ingredients: "onions, broccoli & beef stir fried in the all-famous sriracha chili sauce",
    lunchPrice: 7.75,
    dinnerPrice: 10.50,
    spicy: true
  }, {
    name: "Mongolian Beef",
    category: "Main Dishes",
    type: "Beef",
    ingredients: "beef stir fried w/green and red onions",
    lunchPrice: 7.75,
    dinnerPrice: 10.50,
    spicy: true
  }, {
    name: "Teriyaki Beef",
    category: "Main Dishes",
    type: "Beef",
    ingredients: "grilled marinated beef covered with sweet and tempting teriyaki sauce",
    lunchPrice: 7.75,
    dinnerPrice: 10.50
  }, {
    name: "Kung Pao Beef",
    category: "Main Dishes",
    type: "Beef",
    ingredients: "hot Beef with seared chilies, peanuts & vegetables",
    lunchPrice: 7.75,
    dinnerPrice: 10.50,
    spicy: true
  }, {
    name: "Satay Beef",
    category: "Main Dishes",
    type: "Beef",
    ingredients: "tender slice beef tossed in satay sauce",
    lunchPrice: 7.75,
    dinnerPrice: 10.50
  }, {
    name: "Broccoli Beef",
    category: "Main Dishes",
    type: "Beef",
    ingredients: "slices of choice flank steak stir fried with broccoli and carrots in a tasty brown sauce",
    lunchPrice: 7.75,
    dinnerPrice: 10.50
  }, {
    name: "Pepper Steak",
    category: "Main Dishes",
    type: "Beef",
    ingredients: "slices of choice flank steak stir fried with broccoli and carrots in a tasty brown sauce",
    lunchPrice: 7.75,
    dinnerPrice: 10.50,
    spicy: true
  }, {
    name: "Beef with Green Bean",
    category: "Main Dishes",
    type: "Beef",
    ingredients: "slices of choice flank steak stir fried with green beans in a tasty brown sauce",
    lunchPrice: 7.75,
    dinnerPrice: 10.50
  }, {
    name: "Cantonese Shrimp",
    category: "Seafood",
    type: "Seafood",
    ingredients: "shrimp & vegetables stir fried in a light lobster sauce",
    lunchPrice: 8.50,
    dinnerPrice: 12.50,
    glutenFree: true
  }, {
    name: "Sesame Shrimp",
    category: "Main Dishes",
    type: "Seafood",
    ingredients: "crispy fried shrimp or scallops covered w/sweet spicy sauce",
    lunchPrice: 8.50,
    dinnerPrice: 12.50,
    spicy: true
  }, {
    name: "Shrimp Tempura",
    category: "Main Dishes",
    type: "Seafood",
    ingredients: "7 jumbo shrimp dipped in light & crispy batter then fried",
    lunchPrice: 8.50,
    dinnerPrice: 12.50
  }, {
    name: "Shrimp w/Garlic Sauce",
    category: "Main Dishes",
    type: "Seafood",
    ingredients: "wok-tossed shrimp & vegetables in a spicy garlic sauce",
    lunchPrice: 8.50,
    dinnerPrice: 12.50,
    spicy: true
  }, {
    name: "Shrimp Broccoli",
    category: "Main Dishes",
    type: "Seafood",
    ingredients: "shrimp stir fried with broccoli and carrots in a tasty white sauce",
    lunchPrice: 8.50,
    dinnerPrice: 12.50,
    glutenFree: true
  }, {
    name: "Shrimp with Green Bean",
    category: "Main Dishes",
    type: "Seafood",
    ingredients: "shrimp stir fried with green beans in a tasty brown sauce",
    lunchPrice: 8.50,
    dinnerPrice: 12.50
  }, {
    name: "Basil Shrimp",
    category: "Main Dishes",
    type: "Seafood",
    ingredients: "this is truly one the favorite hot shrimp dishes",
    lunchPrice: 8.50,
    dinnerPrice: 12.50,
    spicy: true
  }, {
    name: "Hot & Spicy Shrimp",
    category: "Main Dishes",
    type: "Seafood",
    ingredients: "shrimp stir fried in hot spicy tomato sauce",
    lunchPrice: 8.50,
    dinnerPrice: 12.50,
    spicy: true
  }, {
    name: "Kung Pao Shrimp",
    category: "Main Dishes",
    type: "Seafood",
    ingredients: "hot shrimp with seared chilies, peanuts & vegetables",
    lunchPrice: 8.50,
    dinnerPrice: 12.50,
    spicy: true
  }, {
    name: "Hot Fish",
    category: "Main Dishes",
    type: "Seafood",
    ingredients: "crispy slices of our fresh daily selection in a tomato chili sauce with vegetables",
    lunchPrice: 8.50,
    dinnerPrice: 12.50,
    spicy: true
  }, {
    name: "Fish Fillet in Blk Bean Sauce",
    category: "Main Dishes",
    type: "Seafood",
    ingredients: "fish fillet w/just the right amount of black beans to make this Chinese dish a must try",
    lunchPrice: 8.50,
    dinnerPrice: 12.50
  }, {
    name: "Hot & Spicy Scallops",
    category: "Main Dishes",
    type: "Seafood",
    ingredients: "scallops stir fried in hot spicy tomato sauce",
    lunchPrice: 9.50,
    dinnerPrice: 13.50,
    spicy: true
  }, {
    name: "Sesame Scallops",
    category: "Main Dishes",
    type: "Seafood",
    ingredients: "scallops stir fried in hot spicy tomato sauce",
    lunchPrice: 9.50,
    dinnerPrice: 13.50,
    spicy: true
  }, {
    name: "Cantonese Scallops",
    category: "Main Dishes",
    type: "Seafood",
    ingredients: "scallops in lobster sauce",
    lunchPrice: 9.50,
    dinnerPrice: 13.50,
    glutenFree: true
  }, {
    name: "Kung Pao Scallops",
    category: "Main Dishes",
    type: "Seafood",
    ingredients: "scallops with seared chilies, peanuts & vegetables",
    lunchPrice: 9.50,
    dinnerPrice: 13.50,
    spicy: true
  }, {
    name: "Stir fried Mix Veggies",
    category: "Main Dishes",
    type: "Vegetables",
    ingredients: "mixed vegetables in a white sauce",
    lunchPrice: 6.95,
    dinnerPrice: 8.95,
    glutenFree: true
  }, {
    name: "Tofu with Peanut Sauce",
    category: "Main Dishes",
    type: "Vegetables",
    ingredients: "lightly breaded tofu and onion tossed in Thai peanut sauce with steamed broccoli",
    lunchPrice: 6.95,
    dinnerPrice: 8.95
  }, {
    name: "Sesame Tofu",
    category: "Main Dishes",
    type: "Vegetables",
    ingredients: "golden tofu tossed in sweet and spicy sesame sauce. Served w/steamed vegetables",
    lunchPrice: 6.95,
    dinnerPrice: 8.95,
    spicy: true
  }, {
    name: "Szechuan Eggplant",
    category: "Main Dishes",
    type: "Vegetables",
    ingredients: "eggplant & Vegetables stir fried in a spicy Szechuan sauce",
    lunchPrice: 6.95,
    dinnerPrice: 8.95,
    spicy: true
  }, {
    name: "Shanghai Stir Fried Tofu",
    category: "Main Dishes",
    type: "Vegetables",
    ingredients: "tofu w/fresh mixed vegetables and Thai basil",
    lunchPrice: 6.95,
    dinnerPrice: 8.95
  }, {
    name: "Shanghai Stir Fried Tofu",
    category: "Main Dishes",
    type: "Vegetables",
    ingredients: "tofu w/fresh mixed vegetables and Thai basil",
    lunchPrice: 6.95,
    dinnerPrice: 8.95
  }

];

db.Menu.remove({}).then(() => db.Menu.collection.insertMany(menuSeed)).then(data => {
  console.log(data.insertedIds.length + " records inserted!");
  process.exit(0);
}).catch(err => {
  console.error(err);
  process.exit(1);
});
