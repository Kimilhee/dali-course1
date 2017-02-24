'use strict';
import angular from 'angular';
import CONFIG from '../../common/config';

class SecureCtrl {
    constructor() {
        console.log('SecureCtrl constructor!');
    }
}

angular.module(CONFIG.APP).controller('SecureCtrl', SecureCtrl);
