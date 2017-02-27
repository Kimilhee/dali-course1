'use strict';

import angular from 'angular';
import common from '../util/common';
import CONFIG from '../../common/config';

let tempCount = 1;
class TabsCtrl {
  constructor($scope, $http, $timeout) {
    console.log('TabsCtrl constructor!');

    $scope.selected = (index) => {
      console.log('tab selected #', index);
      if (index === 0) {
        this.getGateways($scope, $http);
      } else {
        this.getRules($scope, $http);
      }
    };

    // console.log('kkk');
    // $timeout(function() {
    //   console.log('xxxx');
    //   $scope.selected(1);
    // });
  }

  getGateways($scope, $http) {
    console.log('getGateways');
    $http.get('/tpapi/v1/gateways').then(function(res) {
      console.log(`gateways status=${res.status} data=`, res.data);
      $scope.gwlist = res.data;
      $scope.gwlist[0].name += (tempCount++);
    }).catch(common.errorFn);
  }

  getRules($scope, $http) {
    console.log('getRules');
    $http.get('/tpapi/v1/rules?filter[status]=activated').then(function(res) {
      console.log(`getRules status=${res.status} data=`, res.data);
      $scope.rulelist = res.data;
      // $scope.rulelist = res.data.filter(rule => rule.status === 'activated');
      // console.log('rulelist=', );
      // $scope.trigerlist[0].name += (tempCount++);
      $scope.$broadcast('rzSliderForceRender');
    }).catch(common.errorFn);
  }
}

angular.module(CONFIG.APP).controller('TabsCtrl', TabsCtrl);
