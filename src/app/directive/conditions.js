'use strict';

import angular from 'angular';
import CONFIG from '../../common/config';

let conditions = () => {
  return {
    template: require('./templates/conditions.html'),
    scope: {
      rulelist: '=',
    }
  };
};

angular.module(CONFIG.APP).directive('conditions', conditions);
