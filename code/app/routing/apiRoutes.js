// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Routes
app.get("/", function(req, res) {
  res.send("Welcome to the Friends API!");
});

// Displays all friends
// app.get("/api/friends", function(req, res) {
//   return res.json(friends);
// });

// // Displays a single friend, or displays "No friend found"
// app.get("/api/friends/:friends", function(req, res) {
//   var chosen = req.params.friends;

//   console.log(chosen);

//   for (var i = 0; i < friends.length; i++) {
//     if (chosen === friends[i].routeName) {
//       return res.json(friends[i]);
//     }
//   }

//   return res.send("No friend found");

// });

// // Create New Characters - takes in JSON input
// app.post("/api/friends", function(req, res) {
//     // req.body hosts is equal to the JSON post sent from the user
//     // This works because of our body-parser middleware
//     var newFriend = req.body;
  
//     // Using a RegEx Pattern to remove spaces from newCharacter
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//     newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
  
//     console.log(newFriend);
  
//     friends.push(newFriend);
  
//     res.json(newFriend);
//   });

  app.listen(PORT);
  console.log("App listening on: " + PORT);
  