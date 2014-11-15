// ************************************************************************************
// Copyright (c) Craig Odell 2013
// ************************************************************************************

// Remember Controller

// Setup reqs
var async = require('async');
var util = require('util');
var mongoose = require('mongoose');
var Remember = require('../models/remember');
var helper = require('../helpers/helper');
var logger = require('winston');

// Connect the database
var db = mongoose.createConnection(process.env.MONGO_URI);
db.on('error', function(err) {
    util.error('Mongo connection error! Abort!' + util.inspect(err));
});
db.once('open', function() {
    util.log('RememberController - Mongo connection successful.');
});


// ************************************************************************************
function RememberController() {
    "use strict";
    util.log('RememberController Connected.');
}

// ************************************************************************************
RememberController.prototype.Finish = function() {
    util.log('RememberController Finished.');
}



// ************************************************************************************
RememberController.prototype.createOrUpdate = function(body, callback) {
    if (!body.userOid) {
        return callback("userOid is required.");
    }
    var query = {};
    query.userOid = body.userOid;
    if (body.type) {
        query.type = body.type;
    }
    if (body.name) {
        query.name = body.name;
    }
    if (body.createdAt) {
        query.createdAt = body.createdAt;
    }


    logger.info("Creating or updating:");
    logger.info(JSON.stringify(body))
    logger.info("Query:");
    logger.info(JSON.stringify(query))

    // Necessary because upserts skip them middleware (didn't want to do 2 queries, but want timestamps)
    return Remember.findOne(query, function(err, exists) {
        if (!exists) {
            logger.info("createOrUpdate - object did not exist. Creating new object.");
            var remember = new Remember(body);
            return remember.save(function(err, saved) {
                return callback(err, saved);
            });
        } else {
            logger.info("createOrUpdate - object existed. Updating existing object.");
            // findOneAndUpdate does not call middleware
            body.updatedAt = new Date();
            delete body.createdAt;
            return Remember.findOneAndUpdate(query, body, function(err, updated) {
                if (err) {
                    return callback(err);
                }
                return callback(null, updated);
            });
        }
    });
}


// ************************************************************************************
RememberController.prototype.read = function(urlQuery, callback) {
    var query = {
        userOid: urlQuery.userOid
    };

    if (urlQuery.type) {
        query.type = urlQuery.type;
    }

    return Remember.find(query).sort('updatedAt').exec(function(err, Remember) {
        if (err) {
            return callback(err);
        }

        logger.info("Results: ");
        logger.info(JSON.stringify(Remember));
        return callback(null, Remember);
    });
}

// ************************************************************************************
RememberController.prototype.delete = function(body, callback) {
    if (!body.userOid) {
        return callback("userOid is required.");
    }
    var query = {};
    query.userOid = body.userOid;
    if (body.type) {
        query.type = body.type;
    }
    if (body.name) {
        query.name = body.name;
    }
    if (body.createdAt) {
        query.createdAt = body.createdAt;
    }
    logger.info("Deleting:");
    logger.info(JSON.stringify(query))

    // Necessary because upserts skip them middleware (didn't want to do 2 queries, but want timestamps)
    return Remember.remove(query, function(err, removed) {
        return callback(err, removed);
    });

}


// ************************************************************************************
exports.RememberController = RememberController;
