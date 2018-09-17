var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:3000
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/home.html'));
});

app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname + '/home.html'));
});

app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname + '/survey.html'));
});

app.listen(3000);