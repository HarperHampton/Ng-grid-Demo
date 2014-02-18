/*
 * The BasicController
 */
CGrid.controller("BasicController", ['$scope', 'Data',

    function($scope, Data) {
        $scope.options = {
            data: 'data'
        };

        $scope.data = Data.getUsers();
    }
]);

CGrid.controller("ColumnDefinitionController", ['$scope', 'Data',

    function($scope, Data) {
        $scope.options = {
            data: 'data',
            columnDefs: [{
                field: 'name',
                displayName: 'Random Name'
            }, {
                field: 'age',
                displayName: 'Random Age'
            }]
        };

        $scope.data = Data.getUsers();
    }
]);

CGrid.controller("GroupingController", ['$scope', 'Data',

    function($scope, Data) {
        $scope.options = {
            data: 'data',
            showGroupPanel: true
        };

        $scope.data = Data.getUsers();
    }
]);

CGrid.controller("CellTemplatingController", ['$scope', 'Data',

    function($scope, Data) {
        $scope.options = {
            data: 'data',
            columnDefs: [{
                field: 'name',
                displayName: 'Name'
            }, {
                field: 'age',
                displayName: 'Age',
                cellTemplate: 'partials/Templating/CellStyle.html'
            }]
        };

        $scope.data = Data.getUsers();
    }
]);

CGrid.controller("RowTemplatingController", ['$scope', 'Data',

    function($scope, Data) {
        $scope.options = {
            data: 'data',
            rowTemplate: 'partials/Templating/RowStyle.html'
        };

        $scope.data = Data.getUsers();
    }
]);

CGrid.controller("ThemeController", ['$scope', 'Data',

    function($scope, Data) {
        $scope.options = {
            data: 'data',
            jqueryUITheme: true
        };

        $scope.data = Data.getUsers();
    }
]);

CGrid.controller("ServerpagingController", ['$scope', 'Data',

    function($scope, Data) {

        $scope.totally = 0;
        $scope.pagingOptions = {
            pageSizes: [250, 500, 1000],
            pageSize: 250,
            currentPage: 1
        };

        $scope.options = {
            data: 'data',
            enablePaging: true,
            showFooter: true,
            totalServerItems: 'totally',
            pagingOptions: $scope.pagingOptions
        };

        var setPagingData = function(data, page, pageSize) {
            var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
            $scope.data = pagedData;
            $scope.totally = data.length;
            if (!$scope.$$phase) {
                $scope.$apply();
            }
        };
        $scope.$watch('pagingOptions', function(newVal, oldVal) {
            if (newVal !== oldVal) {
                setPagingData(Data.getUsers(), $scope.pagingOptions.currentPage, $scope.pagingOptions.pageSize);
            }
        }, true);

        $scope.$watch('totalCount', function(newVal, oldVal) {
            if (newVal !== oldVal) {
                $scope.pagingOptions.currentPage = 1;
                setPagingData(Data.getUsers(), $scope.pagingOptions.currentPage, $scope.pagingOptions.pageSize);
            }
        });

        setPagingData(Data.getUsers(), $scope.pagingOptions.currentPage, $scope.pagingOptions.pageSize);
    }
]);