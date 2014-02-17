'use strict';
require('ats-templates');

var App = function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
};

App.$inject = ['$urlRouterProvider'];

angular.module('atsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.router',
    'ats.templates',
    require('./modules/main').name,
    require('./modules/login').name,
    require('./common/services').name
    ], App);





