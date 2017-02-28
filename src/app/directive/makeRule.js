'use strict';

import angular from 'angular';
import CONFIG from '../../common/config';



function makeRuleBody(info) {
  var body = {
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
            // {
            //   'to': 'ilhee.kim+testyh1@daliworks.net',
            //   'subject': '메일제목',
            //   'body': '{{value}} {{triggerSensor}}@{{triggerGateway}} ({{triggerCondition}})'
            // }
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
      // {
      //   'name': '범위 내',
      //   'id': 'inRange',
      //   'inRange': {
      //     'from': 50,
      //     'to': 60,
      //     'target': {
      //       'type': 'gateway',
      //       'id': 'b827ebda7b2a',
      //       'sensors': [
      //         'b827ebda7b2a-0-temp'
      //       ]
      //     }
      //   }
      // },
      'filter': {
        'type': [
          'series'
        ],
        'gateway': '*',
        'sensor': [
          // 'b827ebda7b2a-0-temp'
          info.sensor
        ]
      }
    },
    '_user': '1',
    '_site': '3',
    '_service': '1',
    'mtime': 1487928623402,
    'ctime': 1487928623402,
    'id': '11'
  };
  /*
  "method": {
          "name": "이하",
          "id": "under",
          "under": {
            "degree": 66,
            "target": {
              "type": "gateway",
              "id": "ab7c994605844c27ac2fc2d225f8f3f9",
              "sensors": [
                "temperatureDaliworks-ab7c994605844c27ac2fc2d225f8f3f9"
              ]
            }
          }
        },

"method": {
        "name": "이상",
        "id": "over",
        "over": {
          "degree": 77,
          "target": {
            "type": "gateway",
            "id": "ab7c994605844c27ac2fc2d225f8f3f9",
            "sensors": [
              "temperatureDaliworks-ab7c994605844c27ac2fc2d225f8f3f9"
            ]
          }
        }
      }

  {
      "method": {
        "name": "범위 외",
        "id": "outOfRange",
        "outOfRange": {
          "from": 88,
          "to": 99,
          "target": {
            "type": "gateway",
            "id": "ab7c994605844c27ac2fc2d225f8f3f9",
            "sensors": [
              "temperatureDaliworks-ab7c994605844c27ac2fc2d225f8f3f9"
            ]
          }
        }
      },
  }
  */
}

let makeRule = () => {
  return {
    template: require('./templates/makeRule.html'),
    controller: function($scope) {
      console.log('makeRule controller');
      $scope.ruleinfo = {test: 999};
      $scope.onSubmit = function() {
        console.log('onSubmit');
        console.log('@$scope.ruleinfo=', $scope.ruleinfo);

      }
    }
  };
};

angular.module(CONFIG.APP).directive('makeRule', makeRule);
