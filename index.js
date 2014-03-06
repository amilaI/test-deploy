//var express = require('express');
//var app = express();

//app.use(express.static(__dirname + '/public'));
//console.log('Project Squadra is successfully running on http://localhost:3000/');
//app.listen(process.env.PORT || 3000);

var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.send('Hello World!');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});