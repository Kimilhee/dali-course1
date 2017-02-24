'use strict';
import angular from 'angular';
import CONFIG from '../../common/config';

class MainCtrl {
    constructor() {
        console.log('MainCtrl constructor!');
    }
}

angular.module(CONFIG.APP).controller('MainCtrl', MainCtrl);
