/**
 * Controller for the main application screen that controls the header and menu.
 * @param $scope
 * @param $window
 * @param $route
 * @param $location
 * @constructor
 */
var MainController = function($scope, $window, $route, $location) {

    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];

    $scope.appTitle = "Test Driver";

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
       //dostuff
    };
    init();
};

MainController.$inject = ['$scope', '$window', '$route', '$location'];
module.exports = MainController;
