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

module.directive('menuItemLink', ['$location', '$rootScope', function ($location, $rootScope) {
        return {
            restrict: 'A',
            link: function (scope, element) {
                scope.location = $location;
                scope.$watch('location.path()', function (newValue) {
                    var elementLi = element.parent();
                    if ('#' + newValue === element[0].attributes['href'].value) {
                        elementLi.addClass('active');
                        element.focus();
                        var elementCollapse = element.closest('.collapse');
                        if (!elementCollapse.is('.in')) {
                            if ($rootScope.elementCollapse !== undefined) {
                                $rootScope.elementCollapse.removeClass('in');
                            }
                            elementCollapse.addClass('in').css('height', 'auto');
                        }
                        $rootScope.elementCollapse = elementCollapse;
                    } else if (elementLi.is('.active')) {
                        elementLi.removeClass('active');
                    }
                });
            }
        };
    }]);
 