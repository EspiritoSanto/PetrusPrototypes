var filterTypes = {
    Id: {
        componentType: "input",
        operators: [
            {name: "equalTo", label: "Igual a"},
            {name: "differentThan", label: "Diferente de"},
            {name: "smallerThan", label: "Menor que"},
            {name: "greaterThan", label: "Maior que"},
            {name: "between", label: "Dentre"},
            {name: "notBetween", label: "Fora de"}
        ]
    },
    Denomination: {
        componentType: "input",
        operators: [
            {name: "startingWith", label: "Iniciando com"},
            {name: "containing", label: "Contendo"}
        ]
    },
    CountryISO2Code: {
        componentType: "input",
        operators: [
            {name: "equalTo", label: "Igual a"},
            {name: "differentThan", label: "Diferente de"}
        ]
    },
    CountryISO3Code: {
        componentType: "input",
        operators: [
            {name: "equalTo", label: "Igual a"},
            {name: "differentThan", label: "Diferente de"}
        ]
    },
    InternationDialingCode: {
        componentType: "input",
        operators: [
            {name: "equalTo", label: "Igual a"},
            {name: "differentThan", label: "Diferente de"},
            {name: "smallerThan", label: "Menor que"},
            {name: "greaterThan", label: "Maior que"},
            {name: "between", label: "Dentre"},
            {name: "notBetween", label: "Fora de"}
        ]
    },
    boolean: {
        componentType: "select",
        operators: [
            {name: "equalTo", label: "Igual a"}
        ]
    }
};

function eventsOnLoad() {

}

var moduleName = window.location.hash.substring(2);

var module = angular.module('security', ['ngRoute']);

module.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
                when('/:module/data-entry/retrieval/general/:functionalityId', {// data-entry/retrieval
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/data-entry/retrieval/general/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'DataEntryRetrievalCtrl'
                }).
                when('/:module/data-entry/retrieval/internal/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/data-entry/retrieval/internal/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'DataEntryRetrievalCtrl'
                }).
                when('/:module/data-entry/retrieval/licensed-s/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/data-entry/retrieval/licensed-s/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'DataEntryRetrievalCtrl'
                }).
                when('/:module/data-entry/retrieval-form/general/:functionalityId', {// data-entry/retrieval-form
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/data-entry/retrieval-form/general/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'DataEntryRetrievalFormCtrl'
                }).
                when('/:module/data-entry/retrieval-form/internal/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/data-entry/retrieval-form/internal/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'DataEntryRetrievalFormCtrl'
                }).
                when('/:module/data-entry/retrieval-form/licensed-s/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/data-entry/retrieval-form/licensed-s/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'DataEntryRetrievalFormCtrl'
                }).
                when('/:module/data-entry/form/general/:functionalityId', {// data-entry/form
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/data-entry/form/general/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'DataEntryFormCtrl'
                }).
                when('/:module/data-entry/form/internal/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/data-entry/form/internal/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'DataEntryFormCtrl'
                }).
                when('/:module/data-entry/form/licensed-s/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/data-entry/form/licensed-s/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'DataEntryFormCtrl'
                }).
                when('/:module/processing/general/:functionalityId', {// processing
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/processing/general/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'ProcessingCtrl'
                }).
                when('/:module/processing/internal/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/processing/internal/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'ProcessingCtrl'
                }).
                when('/:module/processing/licensed-s/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/processing/licensed-s/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'ProcessingCtrl'
                }).
                when('/:module/retrieval/report-preview/general/:functionalityId', {// retrieval/report-preview
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/retrieval/report-preview/general/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'RetrievalReportPreviewCtrl'
                }).
                when('/:module/retrieval/report-preview/internal/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/retrieval/report-preview/internal/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'RetrievalReportPreviewCtrl'
                }).
                when('/:module/retrieval/report-preview/licensed-s/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/retrieval/report-preview/licensed-s/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'RetrievalReportPreviewCtrl'
                }).
                when('/:module/retrieval/report/general/:functionalityId', {// retrieval/report
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/retrieval/report/general/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'RetrievalReportCtrl'
                }).
                when('/:module/retrieval/report/internal/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/retrieval/report/internal/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'RetrievalReportCtrl'
                }).
                when('/:module/retrieval/report/licensed-s/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/retrieval/report/licensed-s/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'RetrievalReportCtrl'
                }).
                when('/:module/complex-routine/general/:functionalityId', {// complex-routine
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/complex-routine/general/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'ComplexRoutineCtrl'
                }).
                when('/:module/complex-routine/internal/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/complex-routine/internal/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'ComplexRoutineCtrl'
                }).
                when('/:module/complex-routine/licensed-s/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/complex-routine/licensed-s/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'ComplexRoutineCtrl'
                }).
                when('/accounting', {// defaults
                    templateUrl: '/accounting/views/default.html',
                    controller: 'SystemCtrl'
                }).
                when('/associates', {
                    templateUrl: '/associates/views/default.html',
                    controller: 'SystemCtrl'
                }).
                when('/associationsite', {
                    templateUrl: '/associationsite/views/default.html',
                    controller: 'SystemCtrl'
                }).
                when('/bookkeeping', {
                    templateUrl: '/bookkeeping/views/default.html',
                    controller: 'SystemCtrl'
                }).
                when('/contracts', {
                    templateUrl: '/contracts/views/default.html',
                    controller: 'SystemCtrl'
                }).
                when('/costing', {
                    templateUrl: '/costing/views/default.html',
                    controller: 'SystemCtrl'
                }).
                when('/events', {
                    templateUrl: '/events/views/default.html',
                    controller: 'SystemCtrl'
                }).
                when('/journalsales', {
                    templateUrl: '/journalsales/views/default.html',
                    controller: 'SystemCtrl'
                }).
                when('/journalsite', {
                    templateUrl: '/journalsite/views/default.html',
                    controller: 'SystemCtrl'
                }).
                when('/medicalimproving', {
                    templateUrl: '/medicalimproving/views/default.html',
                    controller: 'SystemCtrl'
                }).
                when('/medicalresidency', {
                    templateUrl: '/medicalresidency/views/default.html',
                    controller: 'SystemCtrl'
                }).
                when('/money', {
                    templateUrl: '/money/views/default.html',
                    controller: 'SystemCtrl'
                }).
                when('/papers', {
                    templateUrl: '/papers/views/default.html',
                    controller: 'SystemCtrl'
                }).
                when('/productsales', {
                    templateUrl: '/productsales/views/default.html',
                    controller: 'SystemCtrl'
                }).
                when('/purchases', {
                    templateUrl: '/purchases/views/default.html',
                    controller: 'SystemCtrl'
                }).
                when('/security', {
                    templateUrl: '/security/views/default.html',
                    controller: 'SystemCtrl'
                }).
                when('/specialisttitle', {
                    templateUrl: '/specialisttitle/views/default.html',
                    controller: 'SystemCtrl'
                }).
                when('/workteam', {
                    templateUrl: '/workteam/views/default.html',
                    controller: 'SystemCtrl'
                }).
                otherwise({// not found
                    templateUrl: '/security/views/route-not-forund.html',
                    controller: 'SystemCtrl'
                });
    }]);

module.controller('SystemCtrl', ['$scope', '$http', '$location', '$route', function ($scope, $http, $location, $route) {

        $scope.$on('$routeChangeStart', function (next, current) {
            console.log('Estou no On');

            var newModule = $location.$$path.substring(1);
            if ((newModule.indexOf('/')) !== -1) {
                newModule = newModule.substring(0, newModule.indexOf('/'));
            }
            //console.log($scope.moduleName);
            if ($scope.moduleName === newModule) {
                
                return;
            }
            $scope.moduleName = newModule;
            $http.get('/security/json/' + $scope.moduleName + '-index.json').success(function (data) {
                $scope.mainMenuStructure = data;
            });
        });
            console.log('Estou fora');

        $scope.updateActive = function (mainMenuItem) {
            console.log('Estou no updateActive');
            for (var i = 0; i < $scope.mainMenuStructure.menus.length; i++) {
                for (var j = 0; j < $scope.mainMenuStructure.menus[i].menuItens.length; j++) {
                    if ($scope.mainMenuStructure.menus[i].menuItens[j].activeClass === 'active') {
                        $scope.mainMenuStructure.menus[i].menuItens[j].activeClass = '';
                        break;
                    }
                }
            }
            mainMenuItem.activeClass = 'active';
        };

        eventsOnLoad();
    }]);

module.controller('DataEntryRetrievalCtrl', ['$scope', '$http', function ($scope, $http) {
    }]);

module.controller('DataEntryRetrievalFormCtrl', ['$scope', '$http', function ($scope, $http) {
    }]);

module.controller('DataEntryFormCtrl', ['$scope', '$http', function ($scope, $http) {
    }]);

module.controller('ProcessingCtrl', ['$scope', '$http', function ($scope, $http) {
    }]);

module.controller('RetrievalReportPreviewCtrl', ['$scope', '$http', function ($scope, $http) {
    }]);

module.controller('RetrievalReportCtrl', ['$scope', '$http', function ($scope, $http) {
    }]);

module.controller('ComplexRoutineCtrl', ['$scope', '$http', function ($scope, $http) {
    }]);
    