var br = angular.module('bullroarer', ['ui.bootstrap'])

br.config(function($interpolateProvider){
  $interpolateProvider.startSymbol('{[').endSymbol(']}');
});

br.controller('navbarCtrl', function ($scope) {
  $scope.isCollapsed = true;
});