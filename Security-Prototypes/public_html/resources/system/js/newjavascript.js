module.controller('DataEntryRetrievalCtrl', [
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
            $location,
            $route,
            $routeParams,
            $window) {

        $scope.filterTypes = [
            {
                "domain": "Id",
                "operators": [
                    {"name": "equalTo", "label": "Igual a"},
                    {"name": "differentThan", "label": "Diferente de"},
                    {"name": "smallerThan", "label": "Menor que"},
                    {"name": "greaterThan", "label": "Maior que"},
                    {"name": "between", "label": "Entre"},
                    {"name": "notBetween", "label": "Fora de"}
                ]
            },
            {
                "domain": "Denomination",
                "operators": [
                    {"name": "startingWith", "label": "Iniciando com"},
                    {"name": "containing", "label": "Contendo"}
                ]
            },
            {
                "domain": "CountryISO2Code",
                "operators": [
                    {"name": "equalTo", "label": "Igual a"},
                    {"name": "differentThan", "label": "Diferente de"}
                ]
            },
            {
                "domain": "CountryISO3Code",
                "operators": [
                    {"name": "equalTo", "label": "Igual a"},
                    {"name": "differentThan", "label": "Diferente de"}
                ]
            },
            {
                "domain": "InternationDialingCode",
                "operators": [
                    {"name": "equalTo", "label": "Igual a"},
                    {"name": "differentThan", "label": "Diferente de"},
                    {"name": "smallerThan", "label": "Menor que"},
                    {"name": "greaterThan", "label": "Maior que"},
                    {"name": "between", "label": "Entre"},
                    {"name": "notBetween", "label": "Fora de"}
                ]
            },
            {
                "domain": "boolean",
                "operators": [
                    {name: "equalTo", label: "Igual a"}
                ]
            }
        ];
        
        
    }]);

module.controller('DataEntryRetrievalFormCtrl', [
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
            $location,
            $route,
            $routeParams,
            $window) {
    }]);

module.controller('DataEntryFormCtrl', [
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
            $location,
            $route,
            $routeParams,
            $window) {
    }]);

module.controller('ProcessingCtrl', [
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
            $location,
            $route,
            $routeParams,
            $window) {
    }]);

module.controller('RetrievalReportPreviewCtrl', [
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
            $location,
            $route,
            $routeParams,
            $window) {
    }]);

module.controller('RetrievalReportCtrl', [
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
            $location,
            $route,
            $routeParams,
            $window) {
    }]);

module.controller('ComplexRoutineCtrl', [
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
            $location,
            $route,
            $routeParams,
            $window) {
    }]);

module.controller('DefaultCtrl', [
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
            $location,
            $route,
            $routeParams,
            $window) {
    }]);
