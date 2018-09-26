// Dependencies
var express = require("express");
var bodyParser = require('body-parser');
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(apiRoutes);
app.use(htmlRoutes);

app.use(express.static("app/data/images/"));
// app.use(express.static(path.join(__dirname, '../app/data/images')));

// listen on port 3000 (or Heroku-assigned port)
app.listen(PORT, function() {
  console.log(" --- App IS listening on Express() PORT " + PORT + " ---");

});
