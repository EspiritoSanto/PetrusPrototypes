/* js here */

/*var app = angular.module('system.countryDataEntryRetrieval', ['system.dataEntryRetrieval']);*/

system.controller('countryDataEntryRetrievalCtrl', ['$scope', 'dataEntryRetrievalServiceLoadData',
    function($scope, serviceLoadData){        
        //$scope.data = serviceLoadData.getList('security', 'country', null);
        
        serviceLoadData.getList('security', 'country', null, function(data){            
            $scope.data = data;
        });
    }]);
