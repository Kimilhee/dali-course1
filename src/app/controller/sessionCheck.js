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

        $http.post('/api/sessioin/authorize', {sessionId: sessionStorage.SESSION_ID}).then(function(res) {
          console.log(`SESSION_ID auth then status=${res.status} data=`, res.data);
          if (res.data.result === 'OK') {
            console.log('SESSION_ID auth OK.');
            $state.go('main');
          } else {
            console.log('SESSION_ID auth failed.');
            $state.go('login');
          }
        }).catch(function(res) {
          console.log(`SESSION_ID auth Error! status=${res.status} data=`, res.data);
          $state.go('login');
        });
    }
}

angular.module(APP).controller('SessionCheckCtrl', SessionCheckCtrl);
