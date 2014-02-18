/*
 * Bootloader
 */
var CGrid = angular.module('CGrid', ['ngRoute', 'ngGrid']);

CGrid.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'partials/Basic.html',
            controller: 'BasicController'
        }).when('/colDefine', {
            templateUrl: 'partials/ColumnDefinitions.html',
            controller: 'ColumnDefinitionController'
        }).when('/grouping', {
            templateUrl: 'partials/Grouping.html',
            controller: 'GroupingController'
        }).when('/celltemplating', {
            templateUrl: 'partials/CellTemplating.html',
            controller: 'CellTemplatingController'
        }).when('/rowtemplating', {
            templateUrl: 'partials/RowTemplating.html',
            controller: 'RowTemplatingController'
        }).when('/theme', {
            templateUrl: 'partials/Theme.html',
            controller: 'ThemeController'
        }).when('/serverpaging', {
            templateUrl: 'partials/ServerSidePaging.html',
            controller: 'ServerpagingController'
        }).otherwise({
            redirectTo: '/'
        });
    }
]);