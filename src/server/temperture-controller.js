'use strict';

/**
* 검색 메인 모듈
*/
var _ = require('lodash');
var request = require('request');

exports.getTemperture = function(req, res) {
  console.log('getTemperture');

  var options = {
      method: 'GET',
      url: 'https://api.thingplus.net/v1/gateways/b827ebda7b2a/sensors/b827ebda7b2a-0-temp/series',
      headers: {
        'User-Agent': 'request',
        'authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI1NTAzIiwiY2xpZW50SWQiOiJteVJlcUlkIiwiaWF0IjoxNDg3MTUxNDQ1LCJleHAiOjE0ODg0NDc0NDV9.83Af6MjgPm-0M-x1uotydIaYgLOA8511UqGUHEsyK9U'
      }
  };

  function callback(error, response, body) {
      console.log('@callback body=', body);
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        res.json({result: info})
      } else {
        res.json({result: error})
      }
  }

  request(options, callback);

};
