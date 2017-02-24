'use strict';

import angular from 'angular';
import common from '../util/common';
import CONFIG from '../../common/config';

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

    $http.get('/tpapi/v1/gateways?embed=true').then(function(res) {
      console.log(`gateways status=${res.status} data=`, res.data);

    }).catch(common.errorFn);
  }
}

angular.module(CONFIG.APP).controller('TabsCtrl', TabsCtrl);
