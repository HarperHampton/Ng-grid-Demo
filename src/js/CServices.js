/**
 * Service, Data layer.
 */
CGrid.factory('Data', ['$rootScope',

    function($rootScope) {
        var dictionary = 'abcdefghijklmnopqrstuvwxyz';

        var factory = {};
        var count = 100;
        var users = [];

        factory.setCount = function(num) {
            count = num;
            generateUsers();
        };

        var generateUsers = function() {

            if (users && users.length === count) {
                return users;
            }

            users.length = 0;

            _.times(count, function() {
                var name = '';
                var age = _.random(5, 100);
                _.times(8, function() {
                    name += dictionary.charAt(_.random(25));
                });
                users.push({
                    name: name,
                    age: age
                });
            });
            return users;
        };

        factory.getUsers = function() {
            return users;
        };

        return factory;
    }
]);