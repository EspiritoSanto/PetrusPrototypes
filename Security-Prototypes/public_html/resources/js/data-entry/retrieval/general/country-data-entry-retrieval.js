/* js here */

/*var app = angular.module('system.countryDataEntryRetrieval', ['system.dataEntryRetrieval']);*/

system.controller('countryDataEntryRetrievalCtrl', ['$scope', 'dataEntryRetrievalServiceLoadData',
    function($scope, serviceLoadData){
        serviceLoadData.getList('security', 'country')
            .then(function(response){
                $scope.data = response.data;
            })
            .catch(function(data, status){
                console.log('não deu certo');
            });
    }]);
