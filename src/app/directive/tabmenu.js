import angular from 'angular';
import APP from '../app'

let tabmenu = () => {
  return {
    template: require('./templates/tabmenu.html'),
    controller: 'TabsCtrl',
    controllerAs: 'tabmenu'
  }
};

angular.module(APP).directive('tabmenu', tabmenu)
