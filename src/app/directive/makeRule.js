'use strict';

import angular from 'angular';
import CONFIG from '../../common/config';

function makeRuleBody(info) {
  return {
  	'conditions': [
  		[]
  	],
  	'actions': [
  		[
  		{
  			'agent': 'email',
  			'type': 'email',
  			'method': {
  				'name': 'send',
  				'id': 'send',
  				'send': info.send,
  			}
  		}
  		]
  	],
    'severity': info.rule.severity,
  	'timezone': '+9.00',
  	'name': info.rule.name,
  	'desc': info.rule.desc,
  	'status': 'activated',
  	'trigger': {
  		'agent': 'sensorValue',
  		'type': 'temperature',
  		'method': info.method,
      'filter': {
  			'type': [
  				'series'
  			],
  			'gateway': '*',
  			'sensor': [
  				'temperatureDaliworks-ab7c994605844c27ac2fc2d225f8f3f9'
  			]
  		}
  	}
  };
}

let makeRule = ($state, $http) => {
  return {
    template: require('./templates/makeRule.html'),
    scope: {
      gotoRule: '&'
    },
    controller: function($scope) {
      console.log('makeRule controller');
      $scope.ruleinfo = {
        send: { to: 'ilhee.kim+testyh1@daliworks.net' },
        rule: {},
      };
      $scope.onSubmit = function() {
        console.log('onSubmit');
        console.log('@$scope.ruleinfo=', $scope.ruleinfo);

        $scope.ruleinfo.method = $scope.ruleinfo.tempInfo;
        $scope.ruleinfo.method[$scope.ruleinfo.tempInfo.id].target = {
          'type': 'gateway',
          'id': 'b827ebda7b2a',
          'sensors': [
            'b827ebda7b2a-0-temp'
          ]
        };

        var body = makeRuleBody($scope.ruleinfo);
        console.log('/tpapi/v1/rules@body=', body);
        $http.post('/tpapi/v1/rules', body).then(function(res) {
          console.log(`/tpapi/v1/rules then status=${res.status} data=`, res.data);
          if (res.status === 201) {
            console.log('룰 생성 OK.');
            alert('룰 생성 성공!');
            $scope.gotoRule();
          } else {
            alert('룰 생성 실패!');
            console.log('룰 생성 실패!@res=', res);
          }
        }).catch(function(err) {
          alert('룰 생성 Fail!');
          console.log('룰 생성 Fail!@err=', err);
        });
      };
    }
  };
};

angular.module(CONFIG.APP).directive('makeRule', makeRule);
