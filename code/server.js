// Dependencies
var express = require("express");

var app = express();
var PORT = 3000;

// var bodyParser = require("body-parser");

var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes");

app.use(apiRoutes);
app.use(htmlRoutes);



app.get("/", function(req, res) {

  res.send("App is working.")
})

// call html routing





// listen on port 3000
app.listen(PORT, function() {
  console.log("App!! listening on express PORT " + PORT);
});
