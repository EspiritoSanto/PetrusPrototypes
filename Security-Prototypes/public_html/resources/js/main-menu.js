var module = angular.module('application', ['ngRoute']);

module.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when('/:module/:functionalityType/:functionalitySubtype/:functionalityScope/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/' + urlattr.functionalityType + '/' + urlattr.functionalitySubtype + '/' + urlattr.functionalityScope + '/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'SystemCtrl'
                })
                .when('/:module/:functionalityType/:functionalityScope/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/' + urlattr.functionalityType + '/' + urlattr.functionalityScope + '/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'SystemCtrl'
                })
                .when('/:module', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/default.html';
                    },
                    controller: 'SystemCtrl'
                })
                .when('/:module/', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/default.html';
                    },
                    controller: 'SystemCtrl'
                })
                .when('/:module/default', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/default.html';
                    },
                    controller: 'SystemCtrl'
                })
                .otherwise({
                    controller: function () {
                        window.location.replace('/security/views/message.html');
                    },
                    template: ''
                });
    }]);

module.controller('SystemCtrl', [
    '$rootScope',
    '$scope',
    '$http',
    '$location',
    '$route',
    '$routeParams',
    '$window',
    function (
            $rootScope,
            $scope,
            $http,
            $location) {

        $scope.setMainMenuStructure = function (moduleName) {
            if ($rootScope.currentModule !== moduleName) {
                $rootScope.currentModule = moduleName;
                $http.get('/security/json/indexes/' + $rootScope.currentModule + '-index.json')
                        .success(function (data, status, headers, config) {
                            $scope.mainMenuStructure = data;
                        })
                        .error(function (data, status, headers, config) {
                            window.location.replace('/security/views/message.html?messageCode=failInMenuLoad&module' + $rootScope.currentModule);
                        });
            }
        };

        $scope.$on('$routeChangeStart', function (event, next, current) {
            if (!next.pathParams.module) {
                $location.path('/security/default');
            } else if (next.pathParams.module && !next.pathParams.functionalityId) {
                $location.path('/' + next.pathParams.module + '/default');
                $scope.setMainMenuStructure(next.pathParams.module);
            } else if (next.pathParams.module && next.pathParams.functionalityId) {
                $scope.setMainMenuStructure(next.pathParams.module);
            }
        });

        $scope.$on('$routeChangeError', function (event, next, current) {
            window.location.replace('/security/views/message.html');
        });
    }]);

module.directive('menuItemLink', ['$location', function ($location) {
        return {
            restrict: 'A',
            link: function (scope, element) {
                scope.location = $location;
                scope.$watch('location.path()', function (newValue, oldValue) {
                    if ('#' + newValue === element[0].attributes['href'].value) {
                        element.parent().addClass('active');
                        element.focus();
                        element.closest('.collapse').addClass('in').css('height', 'auto');
                    }
                    if (newValue !== oldValue) {
                        if ('#' + oldValue === element[0].attributes['href'].value) {
                            element.parent().removeClass('active');

                            var getCollapseIdByValue = function (value) {
                                value = value.split("").reverse().join("");
                                value = value.substring(0, value.indexOf("/")).split("").reverse().join("");
                                return jQuery('#' + value).closest('.collapse').attr('id');
                            };
                            
                            newCollapse = getCollapseIdByValue(newValue);
                            oldCollapse = getCollapseIdByValue(oldValue);
                            if (oldCollapse !== undefined && oldCollapse !== newCollapse) {
                                element.closest('.collapse').removeClass('in');
                            }
                        }
                    }
                });
            }
        };
    }]);


