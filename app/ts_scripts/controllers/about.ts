/// <reference path="../../../typings/angularjs/angular.d.ts" />

'use strict';

/**
 * @ngdoc function
 * @name angularHackApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularHackApp
 */
angular.module('angularHackApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
