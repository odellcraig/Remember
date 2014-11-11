var pjson = require('../package.json');

// ************************************************************************************
app.get('/', function (req, res) {
    return res.send("Remember Version: " + pjson.version)
});