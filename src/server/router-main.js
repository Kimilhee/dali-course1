'use strict';

var tempertureController = require('./temperture-controller');

module.exports = function(app, api) {
    app.route('/').get(function(req, res) {
        console.log('main-router.js / ');
        res.send('Pizza API Server!');
    });


    console.log('I\'m main-router.js');

    /***************************
    검색관련.
    ****************************/
    // 새로운 검색엔진.
    api.route('/temperture')
        .get(tempertureController.getTemperture)
        // .post(tempertureController.newTemperture);
};
