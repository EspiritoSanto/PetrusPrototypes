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


var module = angular.module('application', ['ngRoute']);

module.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
                when('/:module/:functionalityType/:functionalitySubtype/:functionalityScope/:functionalityId', {// data-entry/retrieval
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/' + urlattr.functionalityType + '/' + urlattr.functionalitySubtype + '/' + urlattr.functionalityScope + '/' + urlattr.functionalityId + '.html';
                    },
                    controller: function (urlattr) {
                        return  urlattr.functionalityType.charAt(0).toUpperCase() + urlattr.functionalityType.substr(1).toLowerCase() + urlattr.functionalitySubtype.charAt(0).toUpperCase() + urlattr.functionalitySubtype.substr(1).toLowerCase() + 'Ctrl';
                    }
                }).
                when('/:module/:functionalityType/:functionalityScope/:functionalityId', {// complex-routine
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/' + urlattr.functionalityType + '/' + urlattr.functionalityScope + '/' + urlattr.functionalityId + '.html';
                    },
                    controller: function (urlattr) {
                        return  urlattr.functionalityType.charAt(0).toUpperCase() + urlattr.functionalityType.substr(1).toLowerCase() + 'Ctrl';
                    }
                }).
                when('/:module', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/default.html';
                    },
                    controller: 'DefaultCtrl'
                }).
                when('/:module/', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/default.html';
                    },
                    controller: 'DefaultCtrl'
                }).
                when('/:module/default', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/default.html';
                    },
                    controller: 'DefaultCtrl'
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
         * atual do sistema. Também sincroniza o menu principal conforme o
         * objeto função passado, caso exista.
         * 
         * @param {type} moduleName
         * @returns {undefined}
         */
        $scope.setMainMenuStructure = function (moduleName, renderizeMainMenuCallback) {
            if ($rootScope.currentModule !== moduleName) {
                $rootScope.currentModule = moduleName;
                $http.get('/security/json/indexes/' + $rootScope.currentModule + '-index.json')
                        .success(function (data, status, headers, config) {
                            $scope.mainMenuStructure = data;
                            if (renderizeMainMenuCallback !== undefined) {
                                setTimeout(renderizeMainMenuCallback, 300);
                            }
                        })
                        .error(function (data, status, headers, config) {
                            window.location.replace('/security/views/message.html?messageCode=failInMenuLoad&module' + $rootScope.currentModule);
                        });
            } else {
                if (renderizeMainMenuCallback !== undefined) {
                    renderizeMainMenuCallback();
                }
            }
        };

        /*
         * Inicializa (ou reinicializa) e sincroniza o menu principal de acordo
         * com a rota informada. Nos casos em que a nova rota pertence ao módulo
         * atual, não irá precisar reinicializar o menu principal, apenas
         * realizará a sincronização do mesmo.
         */
        $scope.$on('$routeChangeStart', function (event, next, current) {
            if (current === undefined && !next.pathParams.module) {
                
                console.log('Situação 1: if (current === undefined && !next.pathParams.module) {');
                
                $location.path('/security/default');
                
            } else if (current === undefined && next.pathParams.module && !next.pathParams.functionalityId) {
                
                console.log('Situação 2: } else if (current === undefined && next.pathParams.module && !next.pathParams.functionalityId) {');
                
                $location.path('/' + next.pathParams.module + '/default');
                $scope.setMainMenuStructure(next.pathParams.module);
                
            } else if (current === undefined && next.pathParams.module && next.pathParams.functionalityId) {
                
                console.log('Situação 3: } else if (current === undefined && next.pathParams.module && next.pathParams.functionalityId) {');
                
                $scope.setMainMenuStructure(next.pathParams.module, function () {
                    var nextFunctionalityId = jQuery('#' + next.pathParams.functionalityId);
                    var nextFunctionalityIdLink = jQuery('#' + next.pathParams.functionalityId + '-link');

                    if (!(jQuery("#" + nextFunctionalityId.attr("menu-id")).hasClass("in"))) {
                        jQuery("#" + nextFunctionalityId.attr("menu-id")).collapse('toggle');
                    }
                    nextFunctionalityId.addClass('active');
                    nextFunctionalityIdLink.focus();
                });
                
            } else if (current !== undefined && !current.pathParams.functionalityId && !next.pathParams.module) {
                
                console.log('Situação 4: } else if (current !== undefined && !current.pathParams.functionalityId && !next.pathParams.module) {');
                
                $location.path('/security/default');
                
            } else if (current !== undefined && !current.pathParams.functionalityId && next.pathParams.module && !next.pathParams.functionalityId) {
                
                console.log('Situação 5: } else if (current !== undefined && !current.pathParams.functionalityId && next.pathParams.module && !next.pathParams.functionalityId) {');
                
                $location.path('/' + next.pathParams.module + '/default');
                $scope.setMainMenuStructure(next.pathParams.module);
                
            } else if (current !== undefined && !current.pathParams.functionalityId && next.pathParams.module && next.pathParams.functionalityId) {
                
                console.log('Situação 6: } else if (current !== undefined && !current.pathParams.functionalityId && next.pathParams.module && next.pathParams.functionalityId) {');
                
                $scope.setMainMenuStructure(next.pathParams.module, function () {
                    var nextFunctionalityId = jQuery('#' + next.pathParams.functionalityId);
                    var nextFunctionalityIdLink = jQuery('#' + next.pathParams.functionalityId + '-link');

                    if (!(jQuery("#" + nextFunctionalityId.attr("menu-id")).hasClass("in"))) {
                        jQuery("#" + nextFunctionalityId.attr("menu-id")).collapse('toggle');
                    }

                    nextFunctionalityId.addClass('active');
                    nextFunctionalityIdLink.focus();
                });
                
            } else if (current !== undefined && current.pathParams.functionalityId && !next.pathParams.module) {
                
                console.log('Situação 7: } else if (current !== undefined && current.pathParams.functionalityId && !next.pathParams.module) {');
                
                $location.path('/security/default');
                
            } else if (current !== undefined && current.pathParams.functionalityId && next.pathParams.module && !next.pathParams.functionalityId) {
                
                console.log('Situação 8: } else if (current !== undefined && current.pathParams.functionalityId && next.pathParams.module && !next.pathParams.functionalityId) {');
                
                $location.path('/' + next.pathParams.module + '/default');
                $scope.setMainMenuStructure(next.pathParams.module, function () {
                    if (next.pathParams.module) {
                        if (current.pathParams.module === next.pathParams.module) {
                            var currentFunctionalityId = jQuery('#' + current.pathParams.functionalityId);

                            if ((jQuery("#" + currentFunctionalityId.attr("menu-id")).hasClass("in"))) {
                                jQuery("#" + currentFunctionalityId.attr("menu-id")).collapse('toggle');
                            }

                            currentFunctionalityId.removeClass('active');
                        }
                    }
                });
                
            } else if (current !== undefined && current.pathParams.functionalityId && next.pathParams.module && next.pathParams.functionalityId) {
               
                console.log('Situação 9: } else if (current !== undefined && current.pathParams.functionalityId && next.pathParams.module && next.pathParams.functionalityId) {');
                
                $scope.setMainMenuStructure(next.pathParams.module, function () {
                    var currentFunctionalityId = jQuery('#' + current.pathParams.functionalityId);
                    var nextFunctionalityId = jQuery('#' + next.pathParams.functionalityId);
                    var nextFunctionalityIdLink = jQuery('#' + next.pathParams.functionalityId + '-link');

                    if (current.pathParams.module === next.pathParams.module) {
                        currentFunctionalityId.removeClass('active');
                    }

                    // primeiro este teste
                    if (!(jQuery("#" + nextFunctionalityId.attr("menu-id")).hasClass("in"))) {
                        jQuery("#" + nextFunctionalityId.attr("menu-id")).collapse('toggle');
                    }
                    // depois este teste, não inverter a ordem.
                    if (currentFunctionalityId.attr("menu-id") !== nextFunctionalityId.attr("menu-id")) {
                        jQuery("#" + currentFunctionalityId.attr("menu-id")).collapse('hide');
                    }

                    nextFunctionalityId.addClass('active');
                    nextFunctionalityIdLink.focus();
                });
                
            }
        });

        /*
         * Caso ocorra algum erro durante o processo de mudança de rota, a
         * camada controladora web será invocada e redirecionará para a página
         * de mensagem, com os parâmetros corretos, fora da aplicação AngularJS. 
         */
        $scope.$on('$routeChangeError', function (event, next, current) {
            window.location.replace('/security/views/message.html');
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

module.controller('DefaultCtrl', [
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
    