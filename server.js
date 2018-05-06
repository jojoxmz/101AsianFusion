// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
//   // const routes = require("./routes");
// const app = express();
// const PORT = process.env.PORT || 3001;
//
//
// var Menu= require("./models/menus.js");
//
// app.get("/testing",function(req,res){
// res.send(
//   "sending");
//
// })
//
// app.get ("/menuitems", function(req, res){
// console.log("My name is nono");
//
// const testObj = {
//   category: {
//       name: "Dinner",
//       subCategory: {
//           subName: "Chicken",
//           menusItems: [
//               {
//                   name: "Test Chicken",
//                   ingredients: "Delicious",
//                   lunchPrice: 9.00,
//                   dinnerPrice: 11.50,
//                   glutenFree: false
//               },
//               {
//                   name: "Sexy Chicken",
//                   ingredients: "Delicious and SEXY",
//                   lunchPrice: 16.95,
//                   dinnerPrice: 23,
//                   glutenFree: true
//               }
//           ]
//       }
//   }
// }
//
//   Menu.create(testObj).then(function(dbMenu){
//     res.json(dbMenu);
//   }).catch(function(err){
//     res.json(err);
//   });
//
// })
//
//
//
// // Configure body parser for AJAX requests
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// // Serve up static assets
// app.use(express.static("client/build"));
// // Add routes, both API and view
// // app.use(routes);
//
// // Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/101AsianFusionCherryCreek");
//
// // Start the API server
// app.listen(PORT, function() {
//   console.log(`  ==> API Server now listening on PORT ${PORT}!`);
// });

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/101AsianFusionCherryCreek");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
