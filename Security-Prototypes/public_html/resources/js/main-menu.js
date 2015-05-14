var module = angular.module('system', ['ngRoute','system.countryDataEntryRetrieval']);

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

                    var newValueDataEntryRetrievalDetailSufix = newValue.substring(newValue.length - 27);
                    var newValueDataEntryRetrievalFormSufix = newValue.substring(newValue.length - 25);
                    var newValueDataEntryFormSufix = newValue.substring(newValue.length - 15);

                    if (newValueDataEntryRetrievalDetailSufix === 'data-entry-retrieval-detail') {
                        newValue = newValue.substring(0, newValue.length - 27).replace('-detail', '') + 'data-entry-retrieval';
                    }
                    if (newValueDataEntryRetrievalFormSufix === 'data-entry-retrieval-form') {
                        newValue = newValue.substring(0, newValue.length - 25).replace('-form', '') + 'data-entry-retrieval';
                    }
                    if (newValueDataEntryFormSufix === 'data-entry-form') {
                        newValue = newValue.substring(0, newValue.length - 15).replace('/form', '/form-detail') + 'data-entry-form-detail';
                    }

                    var oldValueDataEntryRetrievalDetailSufix = oldValue.substring(oldValue.length - 27);
                    var oldValueDataEntryRetrievalFormSufix = oldValue.substring(oldValue.length - 25);
                    var oldValueDataEntryFormSufix = oldValue.substring(oldValue.length - 15);

                    if (oldValueDataEntryRetrievalDetailSufix === 'data-entry-retrieval-detail') {
                        oldValue = oldValue.substring(0, oldValue.length - 27).replace('-detail', '') + 'data-entry-retrieval';
                    }
                    if (oldValueDataEntryRetrievalFormSufix === 'data-entry-retrieval-form') {
                        oldValue = oldValue.substring(0, oldValue.length - 25).replace('-form', '') + 'data-entry-retrieval';
                    }
                    if (oldValueDataEntryFormSufix === 'data-entry-form') {
                        oldValue = oldValue.substring(0, oldValue.length - 15).replace('/form', '/form-detail') + 'data-entry-form-detail';
                    }

                    if ('#' + newValue === element[0].attributes['href'].value) {
                        element.parent().addClass('active');
                        element.focus();
                        element.closest('.collapse').addClass('in').css('height', 'auto');
                    }

                    var getCollapseIdByValue = function (value) {
                        value = value.split("").reverse().join("");
                        value = value.substring(0, value.indexOf("/")).split("").reverse().join("");
                        return jQuery('#' + value).closest('.collapse').attr('id');
                    };

                    var newCollapse = getCollapseIdByValue(newValue);

                    if (newValue !== oldValue) {
                        if ('#' + oldValue === element[0].attributes['href'].value) {
                            element.parent().removeClass('active');
                        }
                    }
                    if (element.closest('.collapse').attr('id') !== newCollapse) {
                        element.closest('.collapse').removeClass('in');
                    }
                });
            }
        };
    }]);


