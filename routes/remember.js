
// Notification Routes
var _rc = require('../controllers/remember');
var RememberController = new _rc.RememberController();
var util = require('util');
var logger = require('winston');

// ************************************************************************************
app.get('/remember', function (req, res) {
    logger.info("GET /remember");
    return res.send("some data here");
    // return RememberController.get(req, req.query.lastDataTime, function (err, newData) {
    //     if (newData) {
    //         return RememberController.list(req, req.query.lastDataTime, function (err, notifications) {
    //             if (err) { util.error('/notifications/updates' + util.inspect(err)); }
    //             if (notifications) {
    //                 // Since there was new data, set the lastDataTime to the latest Seen data.... to avoid clock sync wierdness
    //                 return res.send(JSON.stringify({lastDataTime: getMaxCreatedAt(notifications), notifications: notifications}));
    //             }
    //             return res.send(JSON.stringify({lastDataTime: new Date(), notifications:[]}));
    //         });
    //     }

    //     // Otherwise, wait on redis
    //     var channel = req.user._id+'-notifications';
    //     redisClient.subscribe(channel);
    //     var timeout = setTimeout(function (){
    //         redisClient.unsubscribe(channel);
    //         redisClient.removeListener('message', redisMessage);
    //         res.send(JSON.stringify({lastDataTime: new Date(), notifications: []}));
    //     }, 20000)

    //     var redisMessage = function (channel, message) {
    //         clearTimeout(timeout);
    //         redisClient.unsubscribe(channel);
    //         redisClient.removeListener('message', redisMessage);

    //         return RememberController.list(req, req.query.lastDataTime, function (err, notifications) {
    //             if (err) { util.error('/notifications/updates' + util.inspect(err)); }
    //             if (notifications) {
    //                 // Since there was new data, set the lastDataTime to the latest Seen data.... to avoid clock sync wierdness
    //                 return res.send(JSON.stringify({lastDataTime: getMaxCreatedAt(notifications), notifications: notifications}));
    //             }
    //             return res.send(JSON.stringify({lastDataTime: new Date(), notifications:[]}));
    //         });
    //     }
    //     redisClient.on('message', redisMessage);

    //     return RememberController.cleanOldNotifications(req, req.query.lastDataTime);
});
