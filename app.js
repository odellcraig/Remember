// ************************************************************************************
// Copyright (c) Craig Odell 2013
// ************************************************************************************

/**
 * Module dependencies.
 */
var util = require('util');
var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var errorHandler = require("errorhandler");
var winston = require('winston');
winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, {timestamp:true, colorize:true});
winston.add(winston.transports.File, { filename: 'remember.log' });

// Don't define app with var => global
app = express();

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));

// Setup the routes
require('./routes');

var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
    app.use(errorHandler());
    app.locals.pretty = true;
}

var server = http.createServer(app).listen(app.get('port'), function() {
    console.log("Express server listening on port " + app.get('port'));
});
