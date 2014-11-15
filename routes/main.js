var pjson = require('../package.json');
var logger = require('winston');
// ************************************************************************************
app.get('/', function (req, res) {
	logger.info("GET /");
    return res.send("Remember Version: " + pjson.version)
});

app.get('/version', function (req, res) {
	logger.info("GET /version");
    return res.send("Version: " + pjson.version);
})
