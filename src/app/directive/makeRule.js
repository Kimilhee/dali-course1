'use strict';

import angular from 'angular';
import CONFIG from '../../common/config';

let makeRule = () => {
  return {
    template: require('./templates/makeRule.html'),
    scope: {
      rulelist: '=',
    }
  };
};

angular.module(CONFIG.APP).directive('makeRule', makeRule);
