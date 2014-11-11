// ************************************************************************************
// Copyright (c) Craig Odell 2013
// ************************************************************************************

// remember Controller

// Setup reqs
var async = require('async');
var util = require('util');
var mongoose = require('mongoose');
var remember = require('../models/remember');
var helper = require('../helpers/helper');

// Connect the database
var db = mongoose.createConnection(process.env.MONGO_URI);
db.on('error', function (err) {
    util.error('Mongo connection error! Abort!' + util.inspect(err));
});
db.once('open', function () {
    util.log('RememberController - Mongo connection successful.');
});


// ************************************************************************************
function RememberController() {
    "use strict";
    util.log('RememberController Connected.');
}

// ************************************************************************************
RememberController.prototype.Finish = function () {
    util.log('RememberController Finished.');
}


// ************************************************************************************
RememberController.prototype.list = function (req, callback) {
    return callback(null, "");
    // var query = {userId: req.user._id};
    // if (timeWindow) {
    //     query.createdAt = {$gt: timeWindow};
    // }
    // return remember.find(query).sort('createdAt').exec(function (err, remember) {
    //     if (err) { util.error('RememberController.list - error getting remember: ' + util.inspect(err)); return callback(err); }

    //     util.log('remember for query ' + JSON.stringify(query) + ':');
    //     util.log(JSON.stringify(remember));
    //     return callback(null, remember);
    // });
}
// ************************************************************************************
exports.RememberController = RememberController;
