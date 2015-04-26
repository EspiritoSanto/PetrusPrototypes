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
                when('/:module', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/default.html';
                    },
                    controller: 'SystemCtrl'
                }).
                when('/:module/', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/default.html';
                    },
                    controller: 'SystemCtrl'
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


module.controller('SystemCtrl', [
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
                $http.get('/security/json/indexes/' + $rootScope.currentModule + '-index.json')
                        .success(function (data, status, headers, config) {
                            $scope.mainMenuStructure = data;
                        })
                        .error(function (data, status, headers, config) {
                            $window.location.replace($rootScope.getDomainAbsUrl() + '/security/views/message.html?messageCode=failInMenuLoad&module' + $rootScope.currentModule);
                        });
            }
        };

        /*
         * Adiciona a classe .active para o item de menu selecionado e retira
         * dos demais.
         * 
         * @param {type} mainMenuItemAlias
         * @returns {undefined}
         */
        $scope.addActiveClassToMainMenuItem = function (mainMenuItemAlias) {
            if ($scope.mainMenuStructure !== undefined) {
                for (var i = 0; i < $scope.mainMenuStructure.menus.length; i++) {
                    for (var j = 0; j < $scope.mainMenuStructure.menus[i].menuItens.length; j++) {
                        $scope.mainMenuStructure.menus[i].menuItens[j].activeClass = '';
                        if ($scope.mainMenuStructure.menus[i].menuItens[j].alias === mainMenuItemAlias) {
                            $scope.mainMenuStructure.menus[i].menuItens[j].activeClass = 'active';
                        }
                    }
                }
            }
        };

        /*
         * Reescreve a rota para a página defaul do módulo de segurança
         * (security) quando o módulo não é informado na barra de endereço do
         * navegador.
         */
        $scope.$on('$routeChangeStart', function (event, next, current) {
            if (isEmpty($location.$$url) || $location.$$url === '/') { // url vazia ou igual a '/'
                $location.path('/security/default');
            }
        });

        /*
         * Inicializa o menu principal do módulo informado na rota
         * ($routeParams.module) e adiciona a classe .active para o item de menu
         * selecionado.
         */
        $scope.$on('$routeChangeSuccess', function (event, next, current) {
            if (!isEmpty($routeParams)) {
                $scope.setMainMenuStructure($routeParams.module);
                if ($routeParams.functionalityId) {
                    $scope.addActiveClassToMainMenuItem($routeParams.functionalityId);
                    $('#' + $routeParams.functionalityId + '-link').focus();
                }
            }
        });

        /*
         * Caso ocorra algum erro durante a busca de um template, recurso ou
         * informação, redireciona para a página de mensagem fora da aplicação
         * AngularJS. 
         */
        $scope.$on('$routeChangeError', function (event, next, current) {
            $window.location.replace($rootScope.getDomainAbsUrl() + '/security/views/message.html');
        });

        /*
         * Executa quaisquer métodos necessários no momento do carregamento da
         * aplicação AngularJS.
         */
        eventsOnLoad();
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
    