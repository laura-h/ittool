/**
 * Created by laura on 28.11.15.
 */
'use strict';
//Udk.userManagementDelete = (function(){
//    var deleteUserButton = '#userManagementTable a.delete-button',
//    modalId = '#modal',
//    bodyTag = '.modal-body';
//
//    function eventHandler() {
//        var modal = $(modalId),
//            email = $(this).data('email'),
//            body = modal.find(bodyTag),
//            bodyText = body.data('text');
//
//        body.html('').append('<p>' + bodyText.replace('{email}', email) + '</p>');
//        modal.find('.btn-success').on("click", function () {
//            window.location.href = "/udk/usermanagement/delete?email=" + email;
//        });
//
//        modal.modal('show');
//    }
//
//    return {
//        linkAll: function () {
//            $(deleteUserButton).on("click", eventHandler);
//        },
//
//        unlinkAll: function() {
//            return $(deleteUserButton).off("click");
//        },
//
//        linkByEmail: function(email) {
//            $(deleteUserButton).each(function(){
//                if ($(this).data('email') == email) {
//                    $(this).on("click", eventHandler);
//                }
//            });
//        },
//
//        unlinkByEmail: function(email) {
//            $(deleteUserButton).each(function(){
//                if ($(this).data('email') == email) {
//                    $(this).off("click");
//                }
//            });
//        },
//
//        init: function () {
//            this.linkAll();
//        }
//    }
//})();

Ittool.userManagementTable = (function(){
    var dataTable = '#all-adsg',
        tableApi;

    function initTable() {
        tableApi = $(dataTable).dataTable({
            "responsive": true,
            "bDestroy": true,
            "autoWidth": false,
            "ajax": "/api/adsg/all",
            "columns": [

            ]
        })
    }

    return {
        init: function () {
            initTable();
        }
    }
})();
