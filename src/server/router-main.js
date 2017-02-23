'use strict';

var tempertureController = require('./temperture-controller');
var authController = require('./auth-controller');

module.exports = function(app, api) {
    console.log('I\'m main-router.js');

    app.route('/').get(function(req, res) {
        console.log('main-router.js / ');
        res.send('Pizza API Server!');
    });

    app.route('/oauth').get(authController.oauth);

    // 새로운 검색엔진.
    api.route('/temperture')
        .get(tempertureController.getTemperture);
        // .post(tempertureController.newTemperture);
};
