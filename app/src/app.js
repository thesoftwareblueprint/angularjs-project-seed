'use strict';

var App = angular.module('testDriverApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    require('./modules/main').name
    ])

    .config(['$routeProvider', function ($routeProvider) {
        //default route
        $routeProvider
            .when('/', {
                templateUrl: 'modules/main/main.html',
                controller: 'MainController'
            })
            .otherwise({redirectTo: "/"});
    }]);

App.$inject = ['$routeProvider'];


