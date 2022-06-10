sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("nl.star4it.web.controller.View1", {
            onInit: function () {

            },

            onPress: function() {
                sap.m.MessageToast.show("Testing");
            }
        });
    });
