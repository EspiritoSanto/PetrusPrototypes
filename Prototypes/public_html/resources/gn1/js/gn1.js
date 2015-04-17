/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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

var genericModule = angular.module('GenericModule', ['ngRoute']);

genericModule.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when('/filters/:name', {
                    templateUrl: function (urlattr) {
                        return 'filters/' + urlattr.name + '.html';
                    },
                    controller: 'FilterController'
                })
                .otherwise({
                    templateUrl: 'default.html',
                    controller: 'FilterController'
                });
    }]);

genericModule.controller('FilterController', ['$scope', function ($scope) {

        $scope.filterSChangeHandler = function () {
            $scope.methods = eval('filterTypes.' + $scope.filterField.domain + '.operators');
            $scope.method = $scope.methods[0];
        };

        $scope.filterFields = filterFields;
        $scope.filterField = $scope.filterFields[1];
        $scope.filterSChangeHandler();

    }]);