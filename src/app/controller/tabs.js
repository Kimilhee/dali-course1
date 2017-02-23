'use strict';

import angular from 'angular';
import APP from '../app';

class TabsCtrl {
    constructor($scope, $http) {
      console.log('TabsCtrl constructor!');

      $scope.tabs = [
        { title:'Dash Board', content:'content #1' },
        { title:'Rule Management', content:'content #2' }
      ];

      $scope.model = {
        name: 'Tabs'
      };

      $scope.selected = function(index) {
        console.log('tab selected #', index);
          // if (index === 1) {
          // }
      };
    }
}

angular.module(APP).controller('TabsCtrl', TabsCtrl)
