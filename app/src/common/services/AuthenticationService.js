/**
 * Created by walter on 2/13/14.
 */
'use strict';

var AuthenticationService = function($http, $location) {

    this.login = function(username, password) {
        //attempt to use the $http service to authenticate the user
        if ((username === 'walter') && (password === 'password')) {
            //do something
        }
        $location.path('/');
    };

};
AuthenticationService.$inject = ['$http', '$location'];
module.exports = AuthenticationService;