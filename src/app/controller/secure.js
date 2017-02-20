import angular from 'angular';
import APP from '../app'

class SecureCtrl {
    constructor() {
        console.log('SecureCtrl constructor!');
    }
}

angular.module(APP).controller('SecureCtrl', SecureCtrl)
