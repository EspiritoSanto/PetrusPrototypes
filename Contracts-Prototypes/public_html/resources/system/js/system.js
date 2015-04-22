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

var moduleName = $('html').attr('ng-app');
var module = angular.module(moduleName, ['ngRoute']);

module.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
                when('/data-entry/grids/generals/:functionalityId', {// data-entry/grids
                    templateUrl: function (urlattr) {
                        return '/' + module.name + '/views/data-entry/grids/generals/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'DataEntryGridCtrl'
                }).
                when('/data-entry/grids/company-s/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + module.name + '/views/data-entry/grids/company-s/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'DataEntryGridCtrl'
                }).
                when('/data-entry/grids/licensed-s/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + module.name + '/views/data-entry/grids/licensed-s/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'DataEntryGridCtrl'
                }).
                when('/data-entry/grid-forms/generals/:functionalityId', {// data-entry/grid-forms
                    templateUrl: function (urlattr) {
                        return '/' + module.name + '/views/data-entry/grid-forms/generals/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'DataEntryGridFormCtrl'
                }).
                when('/data-entry/grid-forms/company-s/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + module.name + '/views/data-entry/grid-forms/company-s/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'DataEntryGridFormCtrl'
                }).
                when('/data-entry/grid-forms/licensed-s/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + module.name + '/views/data-entry/grid-forms/licensed-s/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'DataEntryGridFormCtrl'
                }).
                when('/data-entry/forms/generals/:functionalityId', {// data-entry/forms
                    templateUrl: function (urlattr) {
                        return '/' + module.name + '/views/data-entry/forms/generals/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'DataEntryFormCtrl'
                }).
                when('/data-entry/forms/company-s/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + module.name + '/views/data-entry/forms/company-s/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'DataEntryFormCtrl'
                }).
                when('/data-entry/forms/licensed-s/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + module.name + '/views/data-entry/forms/licensed-s/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'DataEntryFormCtrl'
                }).
                when('/processing/generals/:functionalityId', {// processing
                    templateUrl: function (urlattr) {
                        return '/' + module.name + '/views/processing/generals/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'ProcessingCtrl'
                }).
                when('/processing/company-s/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + module.name + '/views/processing/company-s/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'ProcessingCtrl'
                }).
                when('/processing/licensed-s/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + module.name + '/views/processing/licensed-s/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'ProcessingCtrl'
                }).
                when('/recovery/grids/generals/:functionalityId', {// recovery/grids
                    templateUrl: function (urlattr) {
                        return '/' + module.name + '/views/recovery/grids/generals/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'RecoveryGridCtrl'
                }).
                when('/recovery/grids/company-s/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + module.name + '/views/recovery/grids/company-s/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'RecoveryGridCtrl'
                }).
                when('/recovery/grids/licensed-s/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + module.name + '/views/recovery/grids/licensed-s/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'RecoveryGridCtrl'
                }).
                when('/recovery/reports/generals/:functionalityId', {// recovery/reports
                    templateUrl: function (urlattr) {
                        return '/' + module.name + '/views/recovery/reports/generals/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'RecoveryReportCtrl'
                }).
                when('/recovery/reports/company-s/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + module.name + '/views/recovery/reports/company-s/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'RecoveryReportCtrl'
                }).
                when('/recovery/reports/licensed-s/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + module.name + '/views/recovery/reports/licensed-s/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'RecoveryReportCtrl'
                }).
                when('/recovery/graphs/generals/:functionalityId', {// recovery/graphs
                    templateUrl: function (urlattr) {
                        return '/' + module.name + '/views/recovery/graphs/generals/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'RecoveryGraphCtrl'
                }).
                when('/recovery/graphs/company-s/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + module.name + '/views/recovery/graphs/company-s/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'RecoveryGraphCtrl'
                }).
                when('/recovery/graphs/licensed-s/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + module.name + '/views/recovery/graphs/licensed-s/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'RecoveryGraphCtrl'
                }).
                when('/complex-routines/generals/:functionalityId', {// complex-routines
                    templateUrl: function (urlattr) {
                        return '/' + module.name + '/views/complex-routines/generals/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'ComplexRoutineCtrl'
                }).
                when('/complex-routines/company-s/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + module.name + '/views/complex-routines/company-s/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'ComplexRoutineCtrl'
                }).
                when('/complex-routines/licensed-s/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + module.name + '/views/complex-routines/licensed-s/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'ComplexRoutineCtrl'
                }).
                when('/', {// deafult
                    templateUrl: 'default.html',
                    controller: 'SystemCtrl'
                }).
                otherwise({// not found
                    templateUrl: 'route-not-forund.html',
                    controller: 'SystemCtrl'
                });
    }]);

module.controller('SystemCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
       
        $http.get('/' + module.name + '/json/index.json').success(function (data) {
            $scope.mainMenuStructure = data;
        });
        $location.path('/');

        $scope.updateActive = function (mainMenuItem) {
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

module.controller('DataEntryGridCtrl', ['$scope', '$http', function ($scope, $http) {
    }]);

module.controller('DataEntryGridFormCtrl', ['$scope', '$http', function ($scope, $http) {
    }]);

module.controller('DataEntryFormCtrl', ['$scope', '$http', function ($scope, $http) {
    }]);

module.controller('ProcessingCtrl', ['$scope', '$http', function ($scope, $http) {
    }]);

module.controller('RecoveryGridCtrl', ['$scope', '$http', function ($scope, $http) {
    }]);

module.controller('RecoveryReportCtrl', ['$scope', '$http', function ($scope, $http) {
    }]);

module.controller('RecoveryGraphCtrl', ['$scope', '$http', function ($scope, $http) {
    }]);

module.controller('ComplexRoutineCtrl', ['$scope', '$http', function ($scope, $http) {
    }]);
    