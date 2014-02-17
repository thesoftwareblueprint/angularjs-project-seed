/**
 * Controller for the main application screen that controls the header and menu.
 * @param $scope
 * @param $window
 * @param $route
 * @param $location
 * @constructor
 */
var MainController = function($scope, $window, $location) {

    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];

    $scope.appTitle = "Applicant Tracking System";

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
       //dostuff
    };
    init();
};

MainController.$inject = ['$scope', '$window', '$location'];
module.exports = MainController;
