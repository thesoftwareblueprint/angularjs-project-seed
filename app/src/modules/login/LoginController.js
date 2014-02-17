/**
 * Controller for the main application screen that controls the header and menu.
 * @param $scope
 * @param $window
 * @param $route
 * @param $location
 * @constructor
 */
var LoginController = function($scope, $window, $location, authenticationService) {

    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];

    $scope.appTitle = "Applicant Tracking System";

    $scope.login = function() {
        //attempt to login the user using the username and password.
        authenticationService.login('walter','password');
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
       //dostuff
    };
    init();
};

LoginController.$inject = ['$scope', '$window', '$location', 'authenticationService'];
module.exports = LoginController;
