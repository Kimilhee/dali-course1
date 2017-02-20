import angular from 'angular';

import '../style/app.css';
import tabindex from 'angular-ui-bootstrap/src/tabindex';
import tabs from 'angular-ui-bootstrap/src/tabs';

import TabsCtrl from './tabsCtrl';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

let tabmenu = () => {
  return {
    template: require('./tabmenu.html'),
    controller: 'TabsCtrl',
    controllerAs: 'tabmenu'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [tabindex, tabs])
  .directive('app', app)
  .directive('tabmenu', tabmenu)
  .controller('AppCtrl', AppCtrl)
  .controller('TabsCtrl', TabsCtrl)
  ;

export default MODULE_NAME;
