/* js here */

var app = angular.module('system.countryDataEntryRetrieval', []);

app.controller('countryDataEntryRetrievalCtrl', ['$scope', '$http',
    function($scope, $http){
        $scope.data = [];
        
        $http.get('/security/json/retrievals/country.json')
                .success(function(data){
                    $scope.data = data;
                }).error(function(data){
                    console.log('erro ao carregar');
                });
    }]);

app.directive('countryDataEntryRetrievalDirective', [function(){
        return {
            restrict : 'A',
            link : function(scope, element){
                scope.$watch('data', function(newValue, oldValue){                    
                    jQuery('#CountryTable').bootstrapTable('load', newValue);
                });
            }
        };
}]);