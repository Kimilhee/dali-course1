'use strict';

import angular from 'angular';
import CONFIG from '../../common/config';

let actions = () => {
  return {
    template: require('./templates/actions.html'),
    scope: {
      rulelist: '=',
    }
  };
};

angular.module(CONFIG.APP).directive('actions', actions);
