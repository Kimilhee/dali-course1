import angular from 'angular';
import APP from '../app'

class MainCtrl {
    constructor() {
        console.log('MainCtrl constructor!');
    }
}

angular.module(APP).controller('MainCtrl', MainCtrl)
