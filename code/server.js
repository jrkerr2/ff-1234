// Dependencies
var express = require("express");
var compare = require("./app/data/calc");

var app = express();
var PORT = process.env.PORT || 3000;

// var bodyParser = require("body-parser");

var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes");

app.use(apiRoutes);
app.use(htmlRoutes);

// test calc logic -- REMOVE when wrapping up application

var testArray = [
  {
      "name":"Bobby Douglass",
      "photo":"file://code/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      "scores":[
          5,
          1,
          4,
          4,
          5,
          1,
          2,
          5,
          4,
          1
        ]
    },
  
    {
      "name":"Somebody Somewhere",
      "photo":"file://code/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/aa3.jpg",
      "scores":[
          3,
          1,
          2,
          3,
          5,
          1,
          5,
          5,
          3,
          2
        ]
    }
];

var returnDiff = compare.compareArrays(testArray[0].scores, testArray[1].scores);
console.log("This is my return from the compare func: " + returnDiff);
console.log("Made it to compare.");



app.get("/", function(req, res) {

  res.send("App is working.")
})

// call html routing





// listen on port 3000
app.listen(PORT, function() {
  console.log("App!! listening on express PORT " + PORT);
});
