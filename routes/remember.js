// Notification Routes
var _rc = require('../controllers/remember');
var RememberController = new _rc.RememberController();
var util = require('util');
var logger = require('winston');
var url = require('url');


// CREATE ************************************************************************************
app.post('/remember', function(req, res) {
    logger.info("POST /remember");
    return postOrPut(req, res);
});


// READ ************************************************************************************
app.get('/remember', function(req, res) {
    logger.info("GET /remember");
    
    var requestUrl = url.parse(req.url, true);
    var query = requestUrl.query;

    if (!query || !query.userOid) {
        logger.warn("Requested items without a user oid. Aborting.");
        return res.send({error:"Invalid request: must provide userOid in query."});
    }

    return RememberController.read(query, function(err, dataArray) {
        if (err) {
            logger.error(util.inspect(err));
            return res.send({error: err});
        }
        return res.send(JSON.stringify(dataArray));
    });
});


// UPDATE ************************************************************************************
app.put('/remember', function(req, res) {
    logger.info("PUT /remember");
    return postOrPut(req, res);
});

// ************************************************************************************
function postOrPut(req, res) {
    if(!req.body || !req.body.userOid) {
        logger.warn("Attempted without body or with out userOid. Aborting.");
        logger.warn("Body: " + JSON.stringify(req.body));
        return res.send({error: "userOid or body missing."});
    }

    return RememberController.createOrUpdate(req.body, function(err, createdOrUpdated) {
        if (err) {
            logger.error(util.inspect(err));
            return res.send({error: err});
        }
        return res.send(JSON.stringify(createdOrUpdated));
    });
}


// DELETE ************************************************************************************
app.delete('/remember', function(req, res) {
    logger.info("DELETE /remember");
    if(!req.body || !req.body.userOid) {
        logger.warn("Attempted without body or with out userOid. Aborting.");
        logger.warn("Body: " + JSON.stringify(req.body));
        return res.send({error: "userOid or body missing."});
    }

    return RememberController.delete(req.body, function(err, deleted) {
        if (err) {
            logger.error(util.inspect(err));
            return res.send({error: err});
        }
        return res.send(JSON.stringify(deleted));
    });
});
