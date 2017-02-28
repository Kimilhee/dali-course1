'use strict';

import angular from 'angular';
import CONFIG from '../../common/config';

let ruleInput = () => {
  return {
    template: require('./templates/ruleInput.html'),
    scope: {
      rule: '='
    },
    link: function(scope) {
      scope.rule.severity = 'warning';
    }
  };
};

angular.module(CONFIG.APP).directive('ruleInput', ruleInput);
