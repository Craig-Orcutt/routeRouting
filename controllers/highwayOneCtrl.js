"use strict"

angular
    .module('highways')
    .controller('highwayOneCtrl', function ($scope) {
        $scope.highwayName = 'Interstate 65';
        $scope.highwayDescription = 'A road that runs north to south through many states'
    })