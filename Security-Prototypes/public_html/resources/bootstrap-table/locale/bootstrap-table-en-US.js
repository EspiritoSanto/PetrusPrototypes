/**
 * Bootstrap Table English translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */
(function ($) {
    'use strict';

    $.fn.bootstrapTable.locales['en-US'] = {
        formatAllRows: function () {
            return 'All';
        },
        formatColumns: function () {
            return 'Columns';
        },
        formatLoadingMessage: function () {
            return 'Loading, please wait...';
        },
        formatNew: function () {
            return 'New';
        },
        formatNoMatches: function () {
            return 'No matching records found.';
        },
        formatPaginationSwitch: function () {
            return 'Hide/Show pagination';
        },
        formatRecordsPerPage: function (pageNumber) {
            return pageNumber + ' records per page.';
        },
        formatRefresh: function () {
            return 'Refresh';
        },
        formatSearch: function () {
            return 'Search';
        },
        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return pageFrom + ' to ' + pageTo + ' of ' + totalRows + ' records.';
        },
        formatToggle: function () {
            return 'Toggle';
        }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['en-US']);

})(jQuery);