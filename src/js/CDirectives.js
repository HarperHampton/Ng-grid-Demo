/**
 * Directive, c-infoswitch.
 */
CGrid.directive('cInfoswitch', ['Data',

    function(Data) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs, controller) {

                var findTabFromLocation = function(location) {
                    var index = location.indexOf("#/");
                    if (index < 0)
                        return;
                    return location.substr(index);
                };

                scope.$on('$locationChangeSuccess', function(event, newLoc, oldLoc) {
                    var tab = findTabFromLocation(newLoc);
                    if (!tab) {
                        return;
                    }
                    var actived = element.find("li a[href=\"" + tab + "\"]");
                    actived.parent().addClass('active');
                    actived.parent().siblings().removeClass('active');

                    var buttons = $('.panel-footer button');
                    buttons.removeClass('active');
                    buttons.first().addClass('active');
                    Data.setCount(buttons.first().text());
                });
            }
        };
    }
]);


/**
 * Directive, c-pagesize.
 */
CGrid.directive('cPagesize', ['Data', '$rootScope',

    function(Data, $rootScope) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs, controller) {
                $rootScope.totalCount = 100;

                element.find('.btn-group button').on('click', function(e) {
                    var _this = $(this);
                    if (_this.hasClass('active')) {
                        return;
                    }

                    _this.addClass('active');
                    _this.siblings().removeClass('active');
                    Data.setCount(_this.text());
                    $rootScope.totalCount = _this.text();
                    $rootScope.$digest();
                });
            }
        };
    }
]);