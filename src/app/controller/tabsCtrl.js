
import angular from 'angular';
import APP from '../app'

class TabsCtrl {
    constructor($scope) {
      console.log('TabsCtrl constructor!');

      $scope.tabs = [
        { title:'Dash Board', content:'content #1' },
        { title:'Rule Management', content:'content #2' }
      ];

      $scope.model = {
        name: 'Tabs'
      };
    }
}

angular.module(APP).controller('TabsCtrl', TabsCtrl)
