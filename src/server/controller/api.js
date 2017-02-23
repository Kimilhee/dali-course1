'use strict';

/**
* eltemp 자체 api controller
*/

var request = require('request');

exports.sessionAuthorize = function(req, res) {
  console.log('sessionAuthorize');

  var accessToken = req.body.sessionId;
  console.log('@accessToken=', accessToken);
  var options = {
      method: 'GET',
      url: 'https://api.testyh.thingbine.com/gateways',
      headers: {
        'User-Agent': 'request',
        'authorization': 'Bearer ' + accessToken, // jshint ignore:line
      }
  };

  function callback(error, response, body) {
      console.log('@callback body=', body);
      if (!error && response.statusCode === 200) {
        res.json({result: 'OK'});
      } else {
        res.json({result: error});
      }
  }

  request(options, callback);
};
