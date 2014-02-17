/**
 * Created with IntelliJ IDEA.
 * User: walter
 * Date: 2/13/14
 * Time: 12:35 AM
 * To change this template use File | Settings | File Templates.
 */
module.exports = angular.module('atsApp.login', ['ui.router'])
    .controller('LoginController', require('./LoginController'))
    .config(function($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: '../app/src/modules/login/login.tpl.html',
                controller: 'LoginController'
            });
        $urlRouterProvider.otherwise('/');
    });
