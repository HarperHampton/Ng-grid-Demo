/*
 * Bootloader
 */
var CGrid = angular.module('CGrid', ['ngRoute']);

CGrid.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'partials/BasicExample.html',
            controller: 'BasicController'
        }).otherwise({
            redirectTo: '/'
        });
    }
]);