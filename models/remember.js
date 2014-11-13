// ************************************************************************************
// Copyright (c) Craig Odell 2013
// ************************************************************************************

// Remember Model

var mongoose = require('mongoose');
var util = require('util');

// Connect the database
var db = mongoose.createConnection(process.env.MONGO_URI);
db.on('error', function(err) {
    util.error('Mongo connection error! Abort!' + util.inspect(err));
});
db.once('open', function() {
    util.log('Remember - Mongo connection successful.');
});

// ************************************************************************************
var RememberSchema = new mongoose.Schema({
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    },
    userOid: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
    // The rest of this document is free-form so we can remember anything
}, {
    strict: false
}); // We are not strict - allows for free-form data

RememberSchema.pre('save', function(next) {
    if (this.isNew) {
        this.createdAt = new Date();
    }
    this.updatedAt = new Date();
    return next();
});

// ************************************************************************************
var Remember = db.model('remember', RememberSchema, 'remember'); //Last arg is collection nam
module.exports = Remember;



/*
{createdAt: new Date(), updatedAt: new Date(), userOid: "1", type: "icvi", name: "Craig Odell", email: "odell.craig@gmail.com"}
*/
