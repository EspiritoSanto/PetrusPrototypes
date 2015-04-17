var module = angular.module('GenericModule', ['ngRoute']);

module.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when('/forms/general/:name', {
                    templateUrl: function (urlattr) {
                        return 'forms/general/' + urlattr.name + '.html';
                    },
                    controller: 'DefaultController'
                })
                .when('/forms/global/:name', {
                    templateUrl: function (urlattr) {
                        return 'forms/global/' + urlattr.name + '.html';
                    },
                    controller: 'DefaultController'
                })
                .when('/forms/licenseds/:name', {
                    templateUrl: function (urlattr) {
                        return 'forms/licenseds/' + urlattr.name + '.html';
                    },
                    controller: 'DefaultController'
                })
                .when('/lists/general/:name', {
                    templateUrl: function (urlattr) {
                        return 'lists/general/' + urlattr.name + '.html';
                    },
                    controller: 'DefaultController'
                })
                .when('/lists/global/:name', {
                    templateUrl: function (urlattr) {
                        return 'lists/global/' + urlattr.name + '.html';
                    },
                    controller: 'DefaultController'
                })
                .when('/lists/licenseds/:name', {
                    templateUrl: function (urlattr) {
                        return 'lists/licenseds/' + urlattr.name + '.html';
                    },
                    controller: 'DefaultController'
                })
                .otherwise({
                    templateUrl: 'default.html',
                    controller: 'DefaultController'
                });
    }]);

module.controller('DefaultController', ['$scope', '$routeParams', function ($scope, $routeParams) {
        $scope.mainMenuStructure = {
            moduleIconPath: '../resources/images/icons/softwares/security-software-white-icon.png',
            moduleName: "Security",
            menus: [
                {
                    denomination: "Cadastros Gerais",
                    alias: "GeneralRegisters",
                    menuItens: [
                        {
                            url: 'lists/general/country-list',
                            name: 'Países',
                            activeClass: ''
                        },
                        {
                            url: 'lists/general/admdivisionstructure-list',
                            name: 'Estruturas de Divisão Administrativa',
                            activeClass: ''
                        },
                        {
                            url: 'lists/general/currency-list',
                            name: 'Moedas',
                            activeClass: ''
                        },
                        {
                            url: 'lists/general/idiom-list',
                            name: 'Idiomas',
                            activeClass: ''
                        },
                        {
                            url: 'lists/general/timezone-list',
                            name: 'Fusos Horários',
                            activeClass: ''
                        },
                        {
                            url: 'lists/general/licensed-list',
                            name: 'Licenciados',
                            activeClass: ''
                        },
                        {
                            url: 'lists/general/currencyquotation-list',
                            name: 'Cotações de Moedas Globais',
                            activeClass: ''
                        },
                        {
                            url: 'lists/general/translation-list',
                            name: 'Traduções Globais',
                            activeClass: ''
                        }
                    ]
                },
                {
                    denomination: "Divisão Administrativa do Brasil",
                    alias: "BRAdmDivision",
                    menuItens: [
                        {
                            url: 'lists/general/brfederalunit-list',
                            name: 'Unidades Federativas do Brasil',
                            activeClass: ''
                        },
                        {
                            url: 'lists/general/brstatedistrict-list',
                            name: 'Distritos Estaduais do Brasil',
                            activeClass: ''
                        },
                        {
                            url: 'lists/general/brmunicipality-list',
                            name: 'Municípios do Brasil',
                            activeClass: ''
                        },
                        {
                            url: 'lists/general/brmunicipaldistrict-list',
                            name: 'Distritos Municipais do Brasil',
                            activeClass: ''
                        },
                        {
                            url: 'lists/general/bradmregion-list',
                            name: 'Regiões Administrativas do Brasil',
                            activeClass: ''
                        }
                    ]
                },
                {
                    denomination: "Cadastros Globais",
                    alias: "GlobalRegisters",
                    menuItens: [
                        {
                            url: 'lists/global/globalcurrencyquotation-list',
                            name: 'Cotações de Moedas Globais',
                            activeClass: ''
                        },
                        {
                            url: 'lists/global/globaltranslation-list',
                            name: 'Traduções Globais',
                            activeClass: ''
                        },
                        {
                            url: 'lists/global/globaloffice-list',
                            name: 'Cargos Globais',
                            activeClass: ''
                        },
                        {
                            url: 'lists/global/globalbrphysicalperson-list',
                            name: 'Pessoas Físicas Brasileiras Globais',
                            activeClass: ''
                        },
                        {
                            url: 'lists/global/globalbrlegalentity-list',
                            name: 'Pessoas Jurídicas Brasileiras Globais',
                            activeClass: ''
                        },
                        {
                            url: 'lists/global/globalforeignphysicalperson-list',
                            name: 'Pessoas Físicas Estrangeiras Globais',
                            activeClass: ''
                        },
                        {
                            url: 'lists/global/globalforeignlegalentity-list',
                            name: 'Pessoas Jurídicas Estrangeiras Globais',
                            activeClass: ''
                        }
                    ]
                },
                {
                    denomination: "Cadastros",
                    alias: "Registers",
                    menuItens: [
                        {
                            url: 'forms/licenseds/parameters-form',
                            name: 'Parâmetros',
                            activeClass: ''
                        },
                        {
                            url: 'lists/licenseds/licensedscurrencyquotation-list',
                            name: 'Cotações de Moedas',
                            activeClass: ''
                        },
                        {
                            url: 'lists/licenseds/licensedstranslation-list',
                            name: 'Traduções',
                            activeClass: ''
                        },
                        {
                            url: 'lists/licenseds/district-list',
                            name: 'Bairros',
                            activeClass: ''
                        },
                        {
                            url: 'lists/licenseds/publicpath-list',
                            name: 'Logradouros',
                            activeClass: ''
                        },
                        {
                            url: 'lists/licenseds/zipcode-list',
                            name: 'Códigos de Endereçamento Postal',
                            activeClass: ''
                        },
                        {
                            url: 'lists/licenseds/licensedsoffice-list',
                            name: 'Cargos',
                            activeClass: ''
                        },
                        {
                            url: 'lists/licenseds/licensedsbrphysicalperson-list',
                            name: 'Pessoas Físicas Brasileiras',
                            activeClass: ''
                        },
                        {
                            url: 'lists/licenseds/licensedsbrlegalentity-list',
                            name: 'Pessoas Jurídicas Brasileiras',
                            activeClass: ''
                        },
                        {
                            url: 'lists/licenseds/licensedsforeignphysicalperson-list',
                            name: 'Pessoas Físicas Estrangeiras',
                            activeClass: ''
                        },
                        {
                            url: 'lists/licenseds/licensedsforeignlegalentity-list',
                            name: 'Pessoas Jurídicas Estrangeiras',
                            activeClass: ''
                        }
                    ]
                },
                {
                    denomination: "Segurança Geral",
                    alias: "GeneralSecurity",
                    menuItens: [
                        {
                            url: 'lists/general/node-list',
                            name: 'Nós',
                            activeClass: ''
                        },
                        {
                            url: 'lists/general/routine-list',
                            name: 'Rotinas',
                            activeClass: ''
                        },
                        {
                            url: 'lists/general/event-list',
                            name: 'Eventos',
                            activeClass: ''
                        },
                        {
                            url: 'lists/general/genericmodule-list',
                            name: 'Módulos Genéricos',
                            activeClass: ''
                        }
                    ]
                },
                {
                    denomination: "Segurança Global",
                    alias: "GlobalSecurity",
                    menuItens: [
                        {
                            url: 'lists/global/globalprofile-list',
                            name: 'Perfis Globais',
                            activeClass: ''
                        },
                        {
                            url: 'lists/global/globalmodule-list',
                            name: 'Módulos Globais',
                            activeClass: ''
                        },
                        {
                            url: 'lists/global/globalmoduleprofile-list',
                            name: 'Perfis dos Módulos Globais',
                            activeClass: ''
                        },
                        {
                            url: 'lists/global/globalprogramuser-list',
                            name: 'Usuários Globais',
                            activeClass: ''
                        },
                        {
                            url: 'lists/global/globalmoduleprofileuser-list',
                            name: 'Perfis dos Módulos dos Usuários Globais',
                            activeClass: ''
                        },
                        {
                            url: 'lists/global/globalbookmark-list',
                            name: 'Favoritos Globais',
                            activeClass: ''
                        },
                        {
                            url: 'lists/global/globallogging-list',
                            name: 'Auditoria Global',
                            activeClass: ''
                        }
                    ]
                },
                {
                    denomination: "Segurança",
                    alias: "Security",
                    menuItens: [
                        {
                            url: 'lists/licenseds/licensedsprofile-list',
                            name: 'Perfis',
                            activeClass: ''
                        },
                        {
                            url: 'lists/licenseds/licensedsmodule-list',
                            name: 'Módulos',
                            activeClass: ''
                        },
                        {
                            url: 'lists/licenseds/licensedsmoduleprofile-list',
                            name: 'Perfis dos Módulos',
                            activeClass: ''
                        },
                        {
                            url: 'lists/licenseds/licensedsprogramuser-list',
                            name: 'Usuários',
                            activeClass: ''
                        },
                        {
                            url: 'lists/licenseds/licensedsmoduleprofileuser-list',
                            name: 'Perfis dos Módulos dos Usuários',
                            activeClass: ''
                        },
                        {
                            url: 'lists/licenseds/licensedsbookmark-list',
                            name: 'Favoritos',
                            activeClass: ''
                        },
                        {
                            url: 'lists/licenseds/licensedslogging-list',
                            name: 'Auditoria',
                            activeClass: ''
                        }
                    ]
                }
            ]
        };

        $scope.updateActive = function (mainMenuItem) {
            for (var i = 0; i < $scope.mainMenuStructure.menus.length; i++) {
                for (var j = 0; j < $scope.mainMenuStructure.menus[i].menuItens.length; j++) {
                    if ($scope.mainMenuStructure.menus[i].menuItens[j].activeClass === 'active') {
                        $scope.mainMenuStructure.menus[i].menuItens[j].activeClass = '';
                        break;
                    }
                }
            }
            mainMenuItem.activeClass = 'active';
        };

        eventsOnLoad();
    }]);
