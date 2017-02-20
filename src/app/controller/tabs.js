
import angular from 'angular';
import APP from '../app'

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
          if (index === 1) {
              $http({
                  method: 'GET',
                //   url: 'https://api.thingplus.net/v1/gateways/b827ebda7b2a/sensors/b827ebda7b2a-0-temp/series',
                  url: '/api/temperture',
                //   headers: {
                //       'AccessToken': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI1NTAzIiwiY2xpZW50SWQiOiJteVJlcUlkMiIsImlhdCI6MTQ4NzU1NjcyNSwiZXhwIjoxNDg3NTc4MzI1fQ.ocsNrjnZbwOTU29l6Ep7av3kteGvio2MAkhWoU6Pf40'
                //   }
              }).then(function(result) {
                  console.log('@@@result=');
                  console.log('@result=', result.data.result);
              }, function(err) {
                  console.log('@err=', err);
              });
          }
      }
    }
}

angular.module(APP).controller('TabsCtrl', TabsCtrl)
