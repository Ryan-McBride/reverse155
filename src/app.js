// server.js
(function(){"use strict";})();
var express = require('express');
var favicon = require('serve-favicon');
var app = express();
var path = require('path');


var port = process.env.PORT || '3000';

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.normalize(__dirname + '/')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

var server = app.listen(port, function() {
  var host = server.address().address;
  console.log('reverse155 is listening at http://%s:%s -- %s', host, port);
});
