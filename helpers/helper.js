// ************************************************************************************
// Copyright (c) Craig Odell 2013
// ************************************************************************************

// Shared Helpers


// ----------------------------------------------------------------------------------------------------
// setAppUrl - Set the main url of this application based on a request
// ----------------------------------------------------------------------------------------------------
exports.getFullUrl = function (req) {
    var url = req.protocol + '://';

    // Set the application url
    // including the redirect port
    url += req.header('host', null);
    if (req.app.httpsRedirectPort && parseInt(req.app.httpsRedirectPort) &&
        parseInt(req.app.httpsRedirectPort) != 443) {
        url += ':' + req.app.httpsRedirectPort;
    }
    url += req.url;
    return url;
};

exports.getRootUrl = function (req) {
    var url = req.protocol + '://';

    // Set the application url
    // including the redirect port
    url += req.header('host', null);
    if (req.app.httpsRedirectPort && parseInt(req.app.httpsRedirectPort) &&
        parseInt(req.app.httpsRedirectPort) != 443) {
        url += ':' + req.app.httpsRedirectPort;
    }
    return url;
};
