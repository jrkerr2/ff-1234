// Dependencies
var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');
var friends = require("../data/friends");
var calc = require("../data/calc");

// var urlencodedParser = bodyParser.urlencoded({ extended: false });
// var jsonParser = bodyParser.json()


//  api GET routing
router.get("/api/friends", function(req, res) {

  res.send(friends);
  
});

// api POST routing
// from example in https://www.npmjs.com/package/body-parser
router.post("/api/friends", function(req, res) {

  // Add new friend data posted through the URL
  friends.push(req.body);
  
  console.log(req.body);
  // console.log(friends);

  // Get the index of the best match
  var bestMatch = calc.compareFriends(friends);

  // Get the name, photo link of the friend that is the closest match
  var bestMatchName = friends[bestMatch].name;
  var bestMatchPhoto = friends[bestMatch].photo;
  console.log("This is your match: " + bestMatchName);
  console.log("This is his/her photo: " + bestMatchPhoto);
  res.send(friends[bestMatch]);

});

module.exports = router;