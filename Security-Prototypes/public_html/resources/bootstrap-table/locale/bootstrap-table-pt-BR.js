/**
 * Bootstrap Table Brazilian Portuguese Translation
 * Author: Eduardo Cerqueira<egcerqueira@gmail.com>
 * Update: João Mello<jmello@hotmail.com.br>
 */
(function ($) {
    'use strict';

    $.fn.bootstrapTable.locales['pt-BR'] = {
        formatAllRows: function () {
            return 'Todos';
        },
        formatColumns: function () {
            return 'Colunas';
        },
        formatLoadingMessage: function () {
            return 'Carregando, por favor aguarde...';
        },
        formatNewRecord: function () {
            return 'Novo';
        },
        formatNoMatches: function () {
            return 'Nenhum registro encontrado.';
        },
        formatPaginationSwitch: function () {
            return 'Ocultar/Exibir paginação';
        },
        formatRecordsPerPage: function (pageNumber) {
            return pageNumber + ' registros por página.';
        },
        formatRefresh: function () {
            return 'Recarregar';
        },
        formatSearch: function () {
            return 'Pesquisar';
        },
        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return pageFrom + ' até ' + pageTo + ' de ' + totalRows + ' registros.';
        },
        formatToggle: function () {
            return 'Alternar';
        }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['pt-BR']);

})(jQuery);
