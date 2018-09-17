// Dependencies
var express = require("express");
// var bodyParser = require("body-parser");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// listen on port 3000
app.listen(PORT, function() {
  console.log("App listening on express PORT " + PORT);
});
