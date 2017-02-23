'use strict';

/**
* OAuth 인증 모듈
*/

const CONFIG = require('../../common/config');

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;  //
var request = require('request');

exports.oauth = function(req, res) {
  console.log('oauth');

  var code = req.query.code;
  console.log('auth code =', code);

  if (!code) {
    return res.status(401).send('Unauthorized! abc');
  }

  var options = {
    url: 'https://api.testyh.thingbine.com/v1/oauth2/token',
    form: {
      'code': code,
      'client_id': 'eltempId1',
      'client_secret': 'eltempSecret1',
      'redirect_uri': CONFIG.REDIRECT_URI,
      'grant_type': 'authorization_code',
    },
  };


  // auth code로 accessToken 가져오기
  request.post(options, function(error, response, body) {
    console.log('error=', error);
    // console.log('response=', response);
    console.log('@callback body=', body);
    console.log('@callback typeof body=', typeof body);
    if (!error && response.statusCode === 200) {
      var info = JSON.parse(body);
      var host = req.headers.host;
      res.render('setSession.ejs', { sessionId: info.access_token, mainUrl:'http://' + host + '/#!/main' });
    } else {
      res.json({error: error || response.statusCode });
    }
  });
};
