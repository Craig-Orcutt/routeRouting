'use strict';

angular
    .module('highways')
    .controller('highwayTwoCtrl', function ($scope) {
        $scope.highwayName = 'Interstate 420';
        $scope.highwayDescription = 'A road that leads no where but also to the 7/11 and some other places';
    })