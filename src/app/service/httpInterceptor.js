'use strict';

import CONFIG from '../../common/config';
var app = angular.module(CONFIG.APP);

app.factory('sessionInjector', function() {
    return {
      request: function(config) {
        // if (config.method == 'GET') { }
        if (~config.url.indexOf('/tpapi')) {
          config.headers['x-session-token'] = sessionStorage.SESSION_ID;
        }
        return config;
      }
    };
});

app.config(function($httpProvider) {
    $httpProvider.interceptors.push('sessionInjector');
});
