import angular from 'angular';
import APP from '../app'

class LoginCtrl {
    constructor($scope) {
        console.log('LoginCtrl constructor!');
        $scope.login = function() {
            console.log('Login Button clicked!');
            // window.location.href = "https://api.imgur.com/oauth2/authorize?client_id=" + "CLIENT_ID_HERE" + "&response_type=token"
        }
    }
}

angular.module(APP).controller('LoginCtrl', LoginCtrl)
