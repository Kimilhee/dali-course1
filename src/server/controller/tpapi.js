'use strict';

/**
* 검색 메인 모듈
*/

const CONFIG = require('../../common/config');
var request = require('request');

exports.forward = function(req, res) {
  console.log('forward');

  var accessToken = req.headers['x-session-token'];
  var tpapiUrl = CONFIG.TPAPI_HOST + req.url.substring(6);  // /tpapi 부분 제거
  console.log('tpapiUrl=', tpapiUrl);
  var options = {
      method: req.method,
      url: CONFIG.TPAPI_HOST + '/v1/gateways',
      headers: {
        'User-Agent': 'request',
        'authorization': 'Bearer ' + accessToken, // jshint ignore:line
      },
  };

  if (req.method === 'POST' || req.method === 'PUT') {
    options.form = req.body;
  }

  console.log('@options=', options);
  request(options).pipe(res);
};
