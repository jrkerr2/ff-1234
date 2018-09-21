// Dependencies
var express = require("express");
var compare = require("./app/data/calc");
var data = require("./app/data/friends");
var math = require('mathjs');

var app = express();
var PORT = process.env.PORT || 3000;

// var bodyParser = require("body-parser");

var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes");

app.use(apiRoutes);
app.use(htmlRoutes);

// listen on port 3000
app.listen(PORT, function() {
  console.log("App IS listening on Express() PORT " + PORT);
});
