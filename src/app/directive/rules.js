'use strict';

import angular from 'angular';
import CONFIG from '../../common/config';

let rules = () => {
  return {
    template: require('./templates/rules.html'),
    scope: {
      rulelist: '=',
    }
  };
};

angular.module(CONFIG.APP).directive('rules', rules);
