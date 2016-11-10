var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static('../client'));
app.use(bodyParser.json());

//Your DB connection here
mongoose.connect('mongodb://');

require('./config/routes.js')(app, express);

app.listen(port);

console.log('Listening on port: ' + port);
