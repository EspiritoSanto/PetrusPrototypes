var module = angular.module('application', ['ngRoute']);

module.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when('/:module/data-entry/retrieval/general/:functionalityId', {// data-entry/retrieval
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/data-entry/retrieval/general/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'DataEntryRetrievalCtrl'
                })
                .when('/:module/data-entry/retrieval/internal/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/data-entry/retrieval/internal/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'DataEntryRetrievalCtrl'
                })
                .when('/:module/data-entry/retrieval/licensed-s/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/data-entry/retrieval/licensed-s/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'DataEntryRetrievalCtrl'
                })
                .when('/:module/data-entry/retrieval-form/general/:functionalityId', {// data-entry/retrieval-form
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/data-entry/retrieval-form/general/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'DataEntryRetrievalFormCtrl'
                })
                .when('/:module/data-entry/retrieval-form/internal/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/data-entry/retrieval-form/internal/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'DataEntryRetrievalFormCtrl'
                })
                .when('/:module/data-entry/retrieval-form/licensed-s/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/data-entry/retrieval-form/licensed-s/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'DataEntryRetrievalFormCtrl'
                })
                .when('/:module/data-entry/form/general/:functionalityId', {// data-entry/form
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/data-entry/form/general/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'DataEntryFormCtrl'
                })
                .when('/:module/data-entry/form/internal/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/data-entry/form/internal/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'DataEntryFormCtrl'
                })
                .when('/:module/data-entry/form/licensed-s/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/data-entry/form/licensed-s/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'DataEntryFormCtrl'
                })
                .when('/:module/processing/general/:functionalityId', {// processing
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/processing/general/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'ProcessingCtrl'
                })
                .when('/:module/processing/internal/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/processing/internal/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'ProcessingCtrl'
                })
                .when('/:module/processing/licensed-s/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/processing/licensed-s/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'ProcessingCtrl'
                })
                .when('/:module/retrieval/report-preview/general/:functionalityId', {// retrieval/report-preview
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/retrieval/report-preview/general/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'RetrievalReportPreviewCtrl'
                })
                .when('/:module/retrieval/report-preview/internal/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/retrieval/report-preview/internal/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'RetrievalReportPreviewCtrl'
                })
                .when('/:module/retrieval/report-preview/licensed-s/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/retrieval/report-preview/licensed-s/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'RetrievalReportPreviewCtrl'
                })
                .when('/:module/retrieval/report/general/:functionalityId', {// retrieval/report
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/retrieval/report/general/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'RetrievalReportCtrl'
                })
                .when('/:module/retrieval/report/internal/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/retrieval/report/internal/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'RetrievalReportCtrl'
                })
                .when('/:module/retrieval/report/licensed-s/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/retrieval/report/licensed-s/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'RetrievalReportCtrl'
                })
                .when('/:module/complex-routine/general/:functionalityId', {// complex-routine
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/complex-routine/general/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'ComplexRoutineCtrl'
                })
                .when('/:module/complex-routine/internal/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/complex-routine/internal/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'ComplexRoutineCtrl'
                })
                .when('/:module/complex-routine/licensed-s/:functionalityId', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/complex-routine/licensed-s/' + urlattr.functionalityId + '.html';
                    },
                    controller: 'ComplexRoutineCtrl'
                })
                .when('/:module', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/default.html';
                    },
                    controller: 'DefaultCtrl'
                })
                .when('/:module/', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/default.html';
                    },
                    controller: 'DefaultCtrl'
                })
                .when('/:module/default', {
                    templateUrl: function (urlattr) {
                        return '/' + urlattr.module + '/views/default.html';
                    },
                    controller: 'DefaultCtrl'
                })
                .otherwise({// not found
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
 