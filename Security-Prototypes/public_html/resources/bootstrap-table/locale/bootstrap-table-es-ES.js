/**
 * Bootstrap Table Spanish (España) translation
 * Author: Antonio Pérez <anpegar@gmail.com>
 */
(function ($) {
    'use strict';

    $.fn.bootstrapTable.locales['es-SP'] = {
        formatAllRows: function () {
            return 'Todos';
        },
        formatColumns: function () {
            return 'Columnas';
        },
        formatLoadingMessage: function () {
            return 'Cargando, por favor espera...';
        },
        formatNoMatches: function () {
            return 'No se han encontrado registros.';
        },
        formatPaginationSwitch: function () {
            return 'Mostrar/Ocultar la paginación';
        },
        formatRecordsPerPage: function (pageNumber) {
            return pageNumber + ' registros por página.';
        },
        formatRefresh: function () {
            return 'Actualizar';
        },
        formatSearch: function () {
            return 'Buscar';
        },
        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return 'Viendo ' + pageFrom + ' a ' + pageTo + ' de ' + totalRows + ' registros.';
        },
        formatToggle: function () {
            return 'Alternar';
        }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-SP']);

})(jQuery);