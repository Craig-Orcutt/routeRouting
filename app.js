'use strict'

angular
.module('highways', ["ngRoute"])
.config($routeProvider=>{
    $routeProvider
    .when('/highwayOne', {
        templateUrl: 'partials/highwayOne.html',
        controller: 'highwayOneCtrl'
    })
    .when('/highwayTwo', {
        templateUrl: 'partials/highwayTwo.html',
        controller: 'highwayTwoCtrl'
    })
    .otherwise('/')
})