function linkFormatter(value, row) {
    var classes = null;
    var path = '#/security/data-entry/retrieval-detail/general/country-data-entry-retrieval-detail?id=' + row.id;
    var text = value;

    return tableLinkFormatter(classes, path, text);
}

function flagFormatter(value, row) {
    var classes = null;
    var path = value;
    var altText = 'Country flag of the ID: ' + row.id;

    return tableImageFormatter(classes, path, altText);
}

system.registerCtrl('countryDataEntryRetrievalCtrl', [
    '$scope',
    '$location',
    'dataEntryRetrievalServiceLoadData',
    function (
            $scope,
            $location,
            dataEntryRetrievalServiceLoadData) {

        $scope.refresh = function () {
            dataEntryRetrievalServiceLoadData.refresh('security', 'country')
                    .then(function (response) {
                        $scope.data = response.data;
                    })
                    .catch(function (data, status) {
                        console.log('não deu certo');
                    });
        };
        
        $scope.new = function () {
            $location.path('/security/data-entry/retrieval-form/general/country-data-entry-retrieval-form');
        };
        
        $scope.refresh();
    }]);
