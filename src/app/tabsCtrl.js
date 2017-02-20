export default class TabsCtrl {
    constructor($scope) {
      $scope.tabs = [
        { title:'Dash Board', content:'content #1' },
        { title:'Rule Management', content:'content #2' }
      ];

      $scope.model = {
        name: 'Tabs'
      };
  }
}
