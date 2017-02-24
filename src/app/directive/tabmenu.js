'use strict';

import angular from 'angular';
import CONFIG from '../../common/config';

let tabmenu = () => {
  return {
    template: require('./templates/tabmenu.html'),
    controller: 'TabsCtrl',
    controllerAs: 'tabmenu'
  };
};

angular.module(CONFIG.APP).directive('tabmenu', tabmenu);
