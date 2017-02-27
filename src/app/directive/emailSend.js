'use strict';

import angular from 'angular';
import CONFIG from '../../common/config';

let emailSend = () => {
  return {
    template: require('./templates/emailSend.html'),
    scope: {
      rulelist: '=',
    }
  };
};

angular.module(CONFIG.APP).directive('emailSend', emailSend);
