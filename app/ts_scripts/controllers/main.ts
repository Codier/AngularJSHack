/// <reference path="../../../typings/angularjs/angular.d.ts" />

'use strict';

/**
 * @ngdoc function
 * @name angularHackApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularHackApp
 */
angular.module('angularHackApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
