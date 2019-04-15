// app.js - Business logic here

    // Creating module with name cordovaAngularApp
    var app = angular.module('cordovaAngularApp', []);
/*
    app.config(function($routeProvider){
        $routeProvider

        //route for home page
        .when('/home', {
            templateUrl : home/home.html,
            controller : 'homeController'
        })

        //route for login page
        .when('/login', {
            templateUrl : login/login.html,
            controller : 'loginController'
        })

        //route for register page
        .when('/register', {
            templateUrl : register/register.html,
            controller : 'registerController'
        });
    });
*/
    // creating the controller and inject Angular's $scope
    app.controller('mainController', function($scope) {

        // create a message to display in our view
        $scope.message = 'Excited to build hybrid app';

        //Function to capture image
        $scope.captureImage = function() {
            $scope.message="Button clicked";
        };

        //Display way to change data
        $scope.cScopeName = "This should be changeable";

        $scope.quantity = 0;
        $scope.cost = 0;
    });

    // create the controller for the home page
    app.controller('home Controller', function($scope) {
        $scope.message = 'This is the home page';
    });

    // create the controller for the login page
    app.controller('loginController', function($scope) {
        $scope.message = 'This is the login page';
    });

    // create the controller for the register page
    app.controller('registerController', function($scope) {
        $scope.message = 'This is the register page';
    });