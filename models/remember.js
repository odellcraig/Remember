// ************************************************************************************
// Copyright (c) Craig Odell 2013
// ************************************************************************************

// Notification Model

var mongoose = require('mongoose');
var util = require('util');

// Connect the database
var db = mongoose.createConnection(process.env.MONGO_URI);
db.on('error', function (err) {
    util.error('Mongo connection error! Abort!' + util.inspect(err));
});
db.once('open', function () {
    util.log('Notification - Mongo connection successful.');
});

// ************************************************************************************
var notificationSchema = new mongoose.Schema({
    createdAt: {type: Date, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, required: true},
    type: {type: String, required: true, enum: ['info', 'warning', 'error', 'success']},
    title: {type: String, required: true},
    content: {type: String, required: true},
});

// ************************************************************************************
var Notification = db.model('Notification', notificationSchema, 'notifications'); //Last arg is collection nam
module.exports = Notification;
