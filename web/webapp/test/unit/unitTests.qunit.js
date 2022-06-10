/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"nlstar4it/web/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
