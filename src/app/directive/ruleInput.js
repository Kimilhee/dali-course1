'use strict';

import angular from 'angular';
import CONFIG from '../../common/config';

let ruleInput = () => {
  return {
    template: require('./templates/ruleInput.html'),
    link: function(scope) {
      scope.reportLevel = 'warning';
    }
  };
};

angular.module(CONFIG.APP).directive('ruleInput', ruleInput);
