// ************************************************************************************
// Copyright (c) 2010-2013 Fluke Corporation. All Rights Reserved.
//
// THIS IS UNPUBLISHED PROPRIETARY SOURCE CODE OF FLUKE NETWORKS.
//
// The copyright notice above does not evidence any actual
// or intended publication of such source code.
// ************************************************************************************


exports.validateMac = function (mac) {
    return /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/.test(mac);
}

exports.validateIp = function (ip) {
    if (ip === '' || typeof ip == "undefined") return true;
    return (/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(ip));
    //TODO: IPV6
}
