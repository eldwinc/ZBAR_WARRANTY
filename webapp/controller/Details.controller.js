sap.ui.define([
	"sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel"
], function (Controller,JSONModel) {
	"use strict";

	return Controller.extend("tccc.zbar.warranty.controller.Details", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf tccc.zbar.warranty.view.Details
		 */
		onInit: function () {
			const oJSONData={
				ClaimInfoSet:[{
						Label:"Claim Number",
						Value:"Claim Number"
					},{
						Label:"Claimed to OEM",
						Value:"Claimed to OEM"
					},{
						Label:"Customer Invoice Number",
						Value:"Customer Invoice Number"
					},{
						Label:"Manual Claim Reason",
						Value:"Manual Claim Reason"
					},{
						Label:"Status",
						Value:"Status"
					},{
						Label:"OEM",
						Value:"OEM"
					},{
						Label:"Equipment Type",
						Value:"Equipment Type"
					},{
						Label:"Install Date",
						Value:"Install Date"
					},{
						Label:"Model",
						Value:"Model"
					},{
						Label:"Serial Number",
						Value:"Serial Number"
					}]
			};
			this.getView().setModel(new JSONModel(oJSONData));
			// this.byId("formClaimInfo").bindElement
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf tccc.zbar.warranty.view.Details
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf tccc.zbar.warranty.view.Details
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf tccc.zbar.warranty.view.Details
		 */
		//	onExit: function() {
		//
		//	}

	});

});