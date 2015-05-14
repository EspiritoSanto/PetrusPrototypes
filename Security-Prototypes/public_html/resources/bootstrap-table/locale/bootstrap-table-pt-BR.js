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
        formatRecordsPerPage: function (pageNumber) {
            return pageNumber + ' registros por página.';
        },
        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return 'Exibindo ' + pageFrom + ' até ' + pageTo + ' de ' + totalRows + ' registros.';
        },
        formatSearch: function () {
            return 'Pesquisar';
        },
        formatRefresh: function () {
            return 'Recarregar';
        },
        formatToggle: function () {
            return 'Alternar';
        },
        formatPaginationSwitch: function () {
            return 'Ocultar/Exibir paginação';
        },
        formatNoMatches: function () {
            return 'Nenhum registro encontrado.';
        }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['pt-BR']);

})(jQuery);
