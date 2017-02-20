
routing.$inject = ['$stateProvider', '$urlRouterProvider'];
export default function routing($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('login', {
        url: '/login',
        template: require('./templates/login.html'),
        controller: 'LoginCtrl'
    })
    .state('main', {
        url: '/main',
        template: require('./templates/main.html'),
        controller: 'MainCtrl'
    })
    .state('secure', {
        url: '/secure',
        template: require('./templates/secure.html'),
        controller: 'SecureCtrl'
    });
    $urlRouterProvider.otherwise('/');
}
console.log('app.config');
