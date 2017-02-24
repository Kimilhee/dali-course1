'use strict';

import angular from 'angular';

import '../style/app.css';
/*
accordion alert buttons carousel collapse dateparser datepicker datepickerPopup debounce dropdown isClass modal multiMap
pager pagination paging popover position progressbar rating stackedMap tabindex tabs timepicker tooltip typeahead
*/
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import tabindex from 'angular-ui-bootstrap/src/tabindex';
import accordion from 'angular-ui-bootstrap/src/accordion';
import tabs from 'angular-ui-bootstrap/src/tabs';

import routing from './app.config';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  };
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [ngAnimate, uiRouter, tabindex, tabs, accordion])
  .config(routing)
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)
;

export default MODULE_NAME;

require('./service/httpInterceptor');
require('./controller/sessionCheck');
require('./controller/main');
require('./controller/login');
require('./controller/secure');
require('./controller/tabs');
require('./directive/tabmenu');
require('./directive/gateway');
require('./directive/rule');
