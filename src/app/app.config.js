
routing.$inject = ['$stateProvider', '$urlRouterProvider'];
export default function routing($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
    })
    .state('main', {
        url: '/main',
        templateUrl: 'templates/main.html',
        controller: 'MainCtrl'
    })
    // .state('secure', {
    //     url: '/secure',
    //     templateUrl: 'templates/secure.html',
    //     controller: 'SecureCtrl'
    // });
    $urlRouterProvider.otherwise('/');
}
console.log('app.config');
