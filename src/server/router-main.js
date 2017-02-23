'use strict';

var authController = require('./controller/auth');
var apiController = require('./controller/api');
var tpapiController = require('./controller/tpapi');

module.exports = function(app, api, tpapi) {
    console.log('I\'m main-router.js');

    app.route('/').get(function(req, res) {
        console.log('main-router.js / ');
        res.send('Pizza API Server!');
    });

    app.route('/oauth').get(authController.oauth);

    api.route('/sessioin/authorize').post(apiController.sessionAuthorize);

    // /tpapi로 시작하는 모든 요청은 Think+ API로 forwarding
    tpapi.route('/*', tpapiController.forward);
};
