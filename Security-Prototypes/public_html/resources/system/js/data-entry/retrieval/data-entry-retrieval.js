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

        /* $scope.filterTypes = [
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
         ];*/







    }]);


module.controller('DataEntryRetrievalFilterCtrl', [
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

        $scope.filterFields = [
            {
                "columnLabel": "Código",
                "culumnName": "id",
                "domain": "Id"
            },
            {
                "columnLabel": "País",
                "culumnName": "country",
                "domain": "Denomination"
            },
            {
                "columnLabel": "ISO Alfa - 2",
                "culumnName": "iso2Code",
                "domain": "countryIso2Code"
            },
            {
                "columnLabel": "ISO Alfa - 3",
                "culumnName": "iso3Code",
                "domain": "countryIso3Code"
            },
            {
                "columnLabel": "CDI",
                "culumnName": "internationalDialingCode",
                "domain": "InternationalDialingCode"
            },
            {
                "columnLabel": "Ativo",
                "culumnName": "active",
                "domain": "boolean"
            }
        ];

        $scope.filterFieldChange = function (filterField) {
            console.log(filterField);
        };

    }]);

