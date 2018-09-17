// Dependencies
var express = require("express");
var router = express.Router();

// Routes
var friends = require("../data/friends");

// call api routing
router.get("/api/friends", function(req, res) {

  res.send(friends);

  
})


// new route for questions

module.exports = router;