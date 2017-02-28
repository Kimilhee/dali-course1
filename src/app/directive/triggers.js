'use strict';

import angular from 'angular';
import CONFIG from '../../common/config';

let triggers = () => {
  return {
    template: require('./templates/triggers.html'),
    scope: {
      ruleinfo: '=',
    },
    controller: function($scope, $timeout) {
      console.log('$scope.ruleinfo=', $scope.ruleinfo);
      $scope.selectedRule = 'temperture';
      $scope.ruleinfo.test = 123;

      /*
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
      */

      $scope.btnSelected = (ruleKind) => $scope.selectedRule = ruleKind;

      function newTempInfo(id, tempObj) {
        let info = { id };
        let rangeObj = {}

        switch (id) {
          case 'over':
            rangeObj.degree = tempObj.minValue;
            info.name = '이상';
            break;
          case 'under':
            console.log('tempObj.maxValue=', tempObj.maxValue);
            rangeObj.degree = tempObj.maxValue;
            info.name = '이하';
            break;
          case 'inRange':
            rangeObj.from = tempObj.minValue;
            rangeObj.to = tempObj.maxValue;
            info.name = '범위 내';
            break;
          case 'outOfRange':
            rangeObj.from = tempObj.minValue;
            rangeObj.to = tempObj.maxValue;
            info.name = '범위 외';
            break;
          default:
            console.log('잘못된 temp id 값!!!');
        }

        info[id] = rangeObj;

        console.log('@info=', info);
        return info;
      }

      //Range slider config
      $scope.tempSlider = {
          outOfRange: false,   // slider 범위를 뒤집는 옵션(내가 만든 거임.)
          minValue: 10,
          maxValue: 40,
          options: {
              floor: 0,
              ceil: 100,
              step: 1,

            // showSelectionBar: true,
            showTicksValues: 10,
            // showTicks: true,
            getTickColor: function (value) {
              if (value < 10) return 'blue';
              if (value < 30) return 'green';
              if (value < 50) return 'lime';
              if (value < 65) return 'yellow';
              if (value < 80) return 'orange';
              return 'red';
            },
          },
          onEnd: function(sliderId, modelValue, highValue, pointerType) {
            console.log('onEnd!! modelValue:', modelValue, '  highValue:', modelValue);
          }
          // translate
      };

      $scope.$on('slideEnded', function(e) {
        console.log('@e.targetScope.rzSliderModel=',e.targetScope.rzSliderModel);
        console.log('@e.targetScope.rzSliderHigh=',e.targetScope.rzSliderHigh);
        console.log('@$scope.radioModel=',$scope.radioModel);
        if ($scope.radioModel === 'under' && e.targetScope.rzSliderModel > $scope.tempSlider.options.floor) {
          console.log('under->inRange');
          $timeout(function() {
            $scope.radioModel = 'inRange';
            console.log('under->inRange', $scope.radioModel);
          });
        }

        if ($scope.radioModel === 'over' && e.targetScope.rzSliderHigh < $scope.tempSlider.options.ceil) {
          console.log('over->inRange');
          $timeout(function() {
            $scope.radioModel = 'inRange';
            console.log('over->inRange', $scope.radioModel);
          });
        }
        console.log('slideEnded:', e);
        $timeout(function() {
          $scope.ruleinfo.tempInfo = newTempInfo($scope.radioModel, $scope.tempSlider);
        });
      });

      $scope.radioModel = 'inRange';
      $scope.ruleinfo.tempInfo = newTempInfo('inRange', $scope.tempSlider);

      $scope.checkSliderKind = function(tempId) {
        // console.log('@@@$scope.radioModel=', $scope.radioModel);
        // $scope.ruleinfo.tempInfo.id = tempId;

        $scope.tempSlider.reverse = (tempId === 'outOfRange');
        switch (tempId) {
          case 'over':
            // $scope.tempSlider.minValue = $scope.tempSlider.maxValue;
            $scope.tempSlider.maxValue = $scope.tempSlider.options.ceil;
            break;
          case 'under':
            // $scope.tempSlider.maxValue = $scope.tempSlider.minValue;
            $scope.tempSlider.minValue = $scope.tempSlider.options.floor;
            break;
          case 'inRange':
            break;
          case 'outOfRange':
            break;
          default:
            console.log('잘못된 tempId 값!!');
        }

        $scope.ruleinfo.tempInfo = newTempInfo(tempId, $scope.tempSlider);
        $scope.radioModel = tempId;
        console.log('$scope.radioModel:', $scope.radioModel);
      };



      // rzSlider의 초기 표시가 잘 안되는 문제에 대한 임시 해결방법.
      // $timeout(function() {
      //   $scope.$broadcast('reCalcViewDimensions');
      // });

      // rzSlider가 tab arcodian 같은 표시되기도 하고 감춰지가도 하는 directive 에서 사용될 때는 초기에 표시가 잘 안될 수 있다.
      // 그래서 강제로 reCalcViewDimensions를 호출하면 정상적으로 표시 될 수도 있으나,
      // 그나마 이것도 다른 탭이 먼저 표시되고 이 탭이 나중에 탭을 눌렀을 때, 표시가 된다면 rzSlider가 제대로
      // 표시되지 않을 수 있다. (이미 reCalcViewDimensions를 전에 호출한 상태이기 때문에)
      // 그래서 그럴 땐 탭이 눌렸을 때, $scope.$broadcast('rzSliderForceRender'); 를 호출 하도록 하면
      // 정상적으로 표시할 수 있다.
      // https://github.com/angular-slider/angularjs-slider/issues/79
    }
  };
};

angular.module(CONFIG.APP).directive('triggers', triggers);
