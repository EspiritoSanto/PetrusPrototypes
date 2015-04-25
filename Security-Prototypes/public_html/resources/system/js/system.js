var hasOwnProperty = Object.prototype.hasOwnProperty;

function isEmpty(obj) {
    var isEmpty = false;

    if (obj === null) {
        isEmpty = true;
    } else if (obj.length && obj.length <= 0) {
        isEmpty = true;
    } else {
        var index = 0;
        for (var key in obj) {
            if (hasOwnProperty.call(obj, key)) {
                index++;
            }
        }
        if (index === 0) {
            isEmpty = true;
        }
    }

    return isEmpty;
}

function eventFire(el, etype) {
    if (el.fireEvent) {
        el.fireEvent('on' + etype);
    } else {
        var evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
    }
}
function contains(a, obj) {
    var i = a.length;
    while (i--) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}

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


var moduleName = window.location.hash.substring(2);

var module = angular.module('security', ['ngRoute']);

module.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
                when('/:module/data-entry/retrieval/general/:functionalityId', {// data-entry/retrieval
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/data-entry/retrieval/general/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'DataEntryRetrievalCtrl'
                }).
                when('/:module/data-entry/retrieval/internal/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/data-entry/retrieval/internal/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'DataEntryRetrievalCtrl'
                }).
                when('/:module/data-entry/retrieval/licensed-s/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/data-entry/retrieval/licensed-s/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'DataEntryRetrievalCtrl'
                }).
                when('/:module/data-entry/retrieval-form/general/:functionalityId', {// data-entry/retrieval-form
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/data-entry/retrieval-form/general/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'DataEntryRetrievalFormCtrl'
                }).
                when('/:module/data-entry/retrieval-form/internal/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/data-entry/retrieval-form/internal/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'DataEntryRetrievalFormCtrl'
                }).
                when('/:module/data-entry/retrieval-form/licensed-s/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/data-entry/retrieval-form/licensed-s/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'DataEntryRetrievalFormCtrl'
                }).
                when('/:module/data-entry/form/general/:functionalityId', {// data-entry/form
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/data-entry/form/general/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'DataEntryFormCtrl'
                }).
                when('/:module/data-entry/form/internal/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/data-entry/form/internal/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'DataEntryFormCtrl'
                }).
                when('/:module/data-entry/form/licensed-s/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/data-entry/form/licensed-s/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'DataEntryFormCtrl'
                }).
                when('/:module/processing/general/:functionalityId', {// processing
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/processing/general/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'ProcessingCtrl'
                }).
                when('/:module/processing/internal/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/processing/internal/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'ProcessingCtrl'
                }).
                when('/:module/processing/licensed-s/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/processing/licensed-s/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'ProcessingCtrl'
                }).
                when('/:module/retrieval/report-preview/general/:functionalityId', {// retrieval/report-preview
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/retrieval/report-preview/general/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'RetrievalReportPreviewCtrl'
                }).
                when('/:module/retrieval/report-preview/internal/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/retrieval/report-preview/internal/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'RetrievalReportPreviewCtrl'
                }).
                when('/:module/retrieval/report-preview/licensed-s/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/retrieval/report-preview/licensed-s/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'RetrievalReportPreviewCtrl'
                }).
                when('/:module/retrieval/report/general/:functionalityId', {// retrieval/report
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/retrieval/report/general/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'RetrievalReportCtrl'
                }).
                when('/:module/retrieval/report/internal/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/retrieval/report/internal/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'RetrievalReportCtrl'
                }).
                when('/:module/retrieval/report/licensed-s/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/retrieval/report/licensed-s/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'RetrievalReportCtrl'
                }).
                when('/:module/complex-routine/general/:functionalityId', {// complex-routine
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/complex-routine/general/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'ComplexRoutineCtrl'
                }).
                when('/:module/complex-routine/internal/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/complex-routine/internal/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'ComplexRoutineCtrl'
                }).
                when('/:module/complex-routine/licensed-s/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/complex-routine/licensed-s/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'ComplexRoutineCtrl'
                }).
                when('/:module/default', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/default.html';
                    },
                    controller: 'SystemCtrl'
                }).
                otherwise({// not found
                    controller: function () {
                        window.location.replace('/security/views/message.html');
                    },
                    template: ''
                });
    }]);


module.controller('SystemCtrl', ['$rootScope', '$scope', '$http', '$location', '$route', '$routeParams', '$window', function ($rootScope, $scope, $http, $location, $route, $routeParams, $window) {

        /*
         * Retorna a URL absoluta do domímio do sistema.
         * 
         * @returns {String}
         */
        $rootScope.getDomainAbsUrl = function () {
            var absUrl = $location.$$protocol + '://' + $location.$$host;
            if ($location.$$port !== null && $location.$$port !== '') {
                absUrl += ':' + $location.$$port;
            }

            return absUrl;
        };

        /*
         * Configura o atributo $rootScope.systemModules com todos os módulos
         * que compõem o sistema.
         * 
         * @returns {undefined}
         */
        $rootScope.setSystemModules = function () {
            $http.get('/security/json/system-modules.json').success(function (data) {
                $rootScope.systemModules = data;
            });
        };

        /*
         * Inicializa o atributo $rootScope.systemModules quando o template
         * contendo a aplicação AngularJS for carregado.
         */
        $rootScope.setSystemModules();

        /*
         * Inicializa o atributo $rootScope.currentModule, que indica qual é o
         * módulo atual do sistema. Deve ser inicializado com uma string vazia.
         */
        $rootScope.currentModule = '';

        /*
         * Configura o menu principal do módulo informado e torna este o módulo
         * atual do sistema.
         * 
         * @param {type} moduleName
         * @returns {undefined}
         */
        $scope.setMainMenuStructure = function (moduleName) {
            if ($rootScope.currentModule !== moduleName) {
                $rootScope.currentModule = moduleName;
                // TODO: chamar uma url no controlador.
                $http.get('/security/json/indexes/' + $rootScope.currentModule + '-index.json')
                        .success(function (data, status, headers, config) {
                            $scope.mainMenuStructure = data;
                        })
                        .error(function (data, status, headers, config) {
                            // TODO: chamar o controlador que chamará error.jsp passando os parametros corretos.
                            $window.location.replace($rootScope.getDomainAbsUrl() + '/security/views/message.html?messageCode=failInMenuLoad&module' + $rootScope.currentModule);
                        });
            }
        };

        $scope.addActiveClassToMainMenuItem = function (mainMenuItemAlias) {
            for (var i = 0; i < $scope.mainMenuStructure.menus.length; i++) {
                for (var j = 0; j < $scope.mainMenuStructure.menus[i].menuItens.length; j++) {
                    $scope.mainMenuStructure.menus[i].menuItens[j].activeClass = '';
                    if ($scope.mainMenuStructure.menus[i].menuItens[j].alias === mainMenuItemAlias) {
                        $scope.mainMenuStructure.menus[i].menuItens[j].activeClass = 'active';
                    }
                }
            }
        };

        $scope.$on('$routeChangeStart', function (event, next, current) {
            if (isEmpty($location.$$url) || $location.$$url === '/') { // url vazia ou igual a '/'
                $location.path('/security/default');
            }
        });

        $scope.$on('$routeChangeSuccess', function (event, next, current) {
            console.log($routeParams.functionalityId);

            if (!isEmpty($routeParams)) {
                $scope.setMainMenuStructure($routeParams.module);
                if ($routeParams.functionalityId) {
                    $scope.addActiveClassToMainMenuItem($routeParams.functionalityId);
                    $('#' + $routeParams.functionalityId + '-link').focus();
                }
            }
        });

        $scope.$on('$routeChangeError', function (event, next, current) {
           // $window.location.replace($rootScope.getDomainAbsUrl() + '/security/views/message.html');
        });

        /*
         $scope.loadModule = function(moduleName){
         $http.get('/security/json/' + moduleName + '-index.json').success(function (data) {
         $scope.mainMenuStructure = data;
         
         if ($scope.currentModule !== moduleName) {
         $location.path('/' + moduleName);
         }
         });
         };
         
         
         
         var selectedModule = 'security';
         if ($routeParams.module !== undefined) {
         selectedModule = $routeParams.module;
         } 
         
         // load the default module, security
         $scope.loadModule(selectedModule);
         $scope.currentModule = selectedModule;
         
         console.log($routeParams);
         */
        eventsOnLoad();
    }]);

module.controller('DataEntryRetrievalCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
//        console.log($routeParams);
        // TODO: Menu selecion call iteracting $scope.mainMenuStructure for getting 
        // the current by comparing with the $routeParams.funcionalityId and passing
        // it as an argument of the function $scope.updateActive()
    }]);

module.controller('DataEntryRetrievalFormCtrl', ['$scope', '$http', function ($scope, $http) {
    }]);

module.controller('DataEntryFormCtrl', ['$scope', '$http', function ($scope, $http) {
    }]);

module.controller('ProcessingCtrl', ['$scope', '$http', function ($scope, $http) {
    }]);

module.controller('RetrievalReportPreviewCtrl', ['$scope', '$http', function ($scope, $http) {
    }]);

module.controller('RetrievalReportCtrl', ['$scope', '$http', function ($scope, $http) {
    }]);

module.controller('ComplexRoutineCtrl', ['$scope', '$http', function ($scope, $http) {
    }]);
    