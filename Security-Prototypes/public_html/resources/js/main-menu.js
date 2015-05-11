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

            //$rootScope.hasNext = false;
            //$rootScope.hasCurrent = false;
            //if (next && next.pathParams.functionalityId)
            //    $rootScope.hasNext = true;
            //if (current && current.pathParams.functionalityId)
            //    $rootScope.hasCurrent = true;
            //if (next && current) {
            //    if (next.pathParams.module !== current.pathParams.module) {
            //        $rootScope.hasCurrent = false;
            //    }
           // }

            console.log('Estou no controlador');
            //console.log($rootScope.hasNext);
            //console.log($rootScope.hasCurrent);
            //console.log('Estou na diretiva compile');
            //$rootScope.newElementCollapse = undefined;
            //$rootScope.oldElementCollapse = undefined;

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
                scope.$watch('location.path()', function (newValue, oldValue) {

                        console.log(newValue);
                        console.log(oldValue);




                //console.log('Estou na diretiva link');
                //console.log($rootScope.newElementCollapse);
                //console.log($rootScope.oldElementCollapse);
                    //console.log($rootScope.hasNext);
                    //console.log($rootScope.hasCurrent);


                    /*if (!$rootScope.hasCurrent && $rootScope.hasNext) {
                        if ('#' + newValue === element[0].attributes['href'].value) {
                            element.parent().addClass('active');
                            element.focus();
                            element.closest('.collapse').addClass('in').css('height', 'auto');
                        }
                    }

                    if ($rootScope.hasCurrent && !$rootScope.hasNext) {
                        if ('#' + oldValue === element[0].attributes['href'].value) {
                            element.parent().removeClass('active');
                            element.closest('.collapse').removeClass('in');
                        }
                    }

                    if ($rootScope.hasNext && $rootScope.hasCurrent) {
                        console.log(newValue);
                        console.log(oldValue);
                    }*/





                    /*if (newValue !== oldValue) {
                     if ('#' + newValue === element[0].attributes['href'].value) {
                     element.parent().addClass('active');
                     element.focus();
                     
                     $rootScope.newElementCollapse = element.closest('.collapse');
                     
                     
                     console.log('new');
                     console.log($rootScope.newElementCollapse.attr('id'));
                     if (!$rootScope.oldElementCollapse === undefined)
                     console.log($rootScope.oldElementCollapse.attr('id'))
                     else
                     console.log($rootScope.oldElementCollapse);
                     
                     //var elementCollapse = element.closest('.collapse');
                     if ($rootScope.oldElementCollapse !== undefined && $rootScope.oldElementCollapse.attr('id') !== $rootScope.newElementCollapse.attr('id')) {
                     if (!$rootScope.newElementCollapse.is('.in')) {
                     $rootScope.newElementCollapse.addClass('in').css('height', 'auto');
                     }
                     }
                     }
                     if ('#' + oldValue === element[0].attributes['href'].value) {
                     element.parent().removeClass('active');
                     
                     $rootScope.oldElementCollapse = element.closest('.collapse');
                     
                     console.log('old');
                     console.log($rootScope.oldElementCollapse.attr('id'));
                     if (!$rootScope.newElementCollapse === undefined)
                     console.log($rootScope.newElementCollapse.attr('id'))
                     else
                     console.log($rootScope.newElementCollapse);
                     
                     //var elementCollapse = element.closest('.collapse');
                     if ($rootScope.newElementCollapse !== undefined && $rootScope.newElementCollapse.attr('id') !== $rootScope.oldElementCollapse.attr('id')) {
                     if ($rootScope.oldElementCollapse.is('.in')) {
                     $rootScope.oldElementCollapse.removeClass('in');
                     }
                     }
                     }
                     } else {
                     if ('#' + newValue === element[0].attributes['href'].value) {
                     element.parent().addClass('active');
                     element.focus();
                     $rootScope.newElementCollapse = element.closest('.collapse');
                     if (!$rootScope.newElementCollapse.is('.in')) {
                     $rootScope.newElementCollapse.addClass('in').css('height', 'auto');
                     }
                     }
                     }*/


                    /*var elementLi = element.parent();
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
                     }*/
                });
            }
        };
    }]);


