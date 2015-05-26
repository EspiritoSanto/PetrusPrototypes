function linkFormatter(value, row) {
    var classes = null;
    var path = '#/security/data-entry/retrieval-detail/general/country-data-entry-retrieval-detail?id=' + row.id;
    var text = value;

    return tableLinkFormatter(classes, path, text);
}

function flagFormatter(value, row) {
    var classes = null;
    var path = value;
    var altText = 'Flag of the ID: ' + row.id;

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
            var module = 'security';
            var functionality = 'country';

            dataEntryRetrievalServiceLoadData.list(module, functionality)
                    .then(function (response) {
                        $scope.data = response.data;
                    })
                    .catch(function (data, status) {
                        window.location.replace('/security/views/message.html?messageCode=failInDataEntryRetrievalLoadData&module=' + module + '&functionality=' + functionality);
                    });
        };

        $scope.new = function () {
            $location.path('/security/data-entry/retrieval-form/general/country-data-entry-retrieval-form');
        };

        $scope.refresh();
    }]);

jQuery("#btnRefresh").attr("title", jQuery.fn.bootstrapTable.defaults.formatRefresh());
jQuery("#btnNew").attr('title', jQuery.fn.bootstrapTable.defaults.formatNewRecord());
