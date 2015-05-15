var dataEntryRetrieval = angular.module('system.dataEntryRetrieval', []);

dataEntryRetrieval.directive('dataEntryRetrievalDirectiveLoadData', [function () {
        return {
            restrict: 'A',
            link: function (scope, element) {
                scope.$watch('data', function (newValue) {                    
                    element.bootstrapTable('destroy');
                    element.bootstrapTable({
                        data: newValue,
                        pageList: [10, 25, 50, 100, jQuery.fn.bootstrapTable.defaults.formatAllRows()]
                    });
                });
            }
        };
    }]);

dataEntryRetrieval.factory('dataEntryRetrievalServiceLoadData', ['$http', 
    function ($http) {

        function getPath(module, funcionality, model) {
            return '/security/json/retrievals/country.json';
        }

        return {
            getList: function (module, funcionality, model) {
                var path = getPath(module, funcionality, model);
                return $http.get(path);
            },
            find: function (module, funcionality, id) {

            }
        }
    }]);

/*
 dataEntryRetrieval.controller('countryDataEntryRetrievalCtrl', ['$scope', '$http',
 function($scope, $http){
 $scope.data = [];
 
 $http.get('/security/json/retrievals/country.json')
 .success(function(data){
 $scope.data = data;
 }).error(function(data){
 console.log('erro ao carregar');
 });
 }]);
 
 
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
 
 */