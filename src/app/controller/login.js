'use strict';

import angular from 'angular';
import CONFIG from '../../common/config';

// var CLIENT_NAME = 'eltempName1';
var CLIENT_ID = 'eltempId1';
// var CLIENT_SECRETE = 'eltempSecret1';

class LoginCtrl {
    constructor($scope) {
        console.log('LoginCtrl constructor!');
        $scope.login = function() {
            console.log('Login Button clicked!');
            location.href = 'https://api.testyh.thingbine.com/oauth2/authorize?client_id=' +
              CLIENT_ID + '&response_type=code&redirect_uri=' + CONFIG.REDIRECT_URI;
        };
    }
}

angular.module(CONFIG.APP).controller('LoginCtrl', LoginCtrl);
