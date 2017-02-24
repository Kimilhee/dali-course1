'use strict';

import angular from 'angular';
import CONFIG from '../../common/config';

let rule = () => {
  return {
    template: require('./templates/rule.html'),
    scope: {
      rulelist: '=',
    }
  };
};

angular.module(CONFIG.APP).directive('rule', rule);
