'use strict';

import angular from 'angular';
import APP from '../app';

class SessionCheckCtrl {
    constructor($scope, $http, $state) {
        console.log('SessionCheckCtrl constructor!');

        if (!sessionStorage.SESSION_ID) {
          console.log('NO SESSION_ID');
          return $state.go('login');
        }

        $http.post('/api/sessioin/authorize', {sessionId: sessionStorage.SESSION_ID}).success(function(data) {
          if (data === 'OK') {
          console.log('SESSION_ID auth OK.');
            $state.go('main');
          } else {
          console.log('SESSION_ID auth failed.');
            $state.go('login');
          }
        }).error(function() {
          console.log('SESSION_ID auth error!');
          $state.go('login');
        });
    }
}

angular.module(APP).controller('SessionCheckCtrl', SessionCheckCtrl);
