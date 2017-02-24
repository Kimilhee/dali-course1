'use strict';

/**
* eltemp 자체 api controller
*/

var request = require('request');
const CONFIG = require('../../common/config');

exports.sessionAuthorize = function(req, res) {
  console.log('sessionAuthorize');

  var accessToken = req.body.sessionId;
  console.log('@accessToken=', accessToken);

  var options = {
      url: CONFIG.TPAPI_HOST + '/v1/gateways',
      headers: {
        'User-Agent': 'request',
        'authorization': 'Bearer ' + accessToken, // jshint ignore:line
      }
  };

  request.get(options, function(error, response, body) {
      console.log('@callback body=', body);
      if (!error && response.statusCode === 200) {
        res.json({result: 'OK'});
      } else {
        res.json({result: error});
      }
  });
};
