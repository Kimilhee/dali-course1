'use strict';

import angular from 'angular';
import CONFIG from '../../common/config';

let gateway = ($http) => {
  return {
    template: require('./templates/gateway.html'),
    scope: {
      gwlist: '=',
    }
  };
};

angular.module(CONFIG.APP).directive('gateway', gateway);
