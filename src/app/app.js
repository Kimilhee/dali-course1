import angular from 'angular';

import '../style/app.css';
import uiRouter from 'angular-ui-router';
import tabindex from 'angular-ui-bootstrap/src/tabindex';
import tabs from 'angular-ui-bootstrap/src/tabs';

import routing from './app.config';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uiRouter, tabindex, tabs])
  .config(routing)
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)
;

export default MODULE_NAME;

require('./controller/main');
require('./controller/login');
require('./controller/secure');
require('./controller/tabsCtrl');
require('./directive/tabmenu');
