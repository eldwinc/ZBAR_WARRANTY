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
				ClaimInfoSet:{
					"Claim Number":"1231231",
					"Claimed to OEM":"Heinz",
					"Customer Invoice Number":"134498",
					"Manual Claim Reason":"PTS/Service Invoice",
					Status:"Submitted",
					OEM:"Heinz",
					"Equipment Type":"FN",
					"Install Date":"01/01/2019",
					Model:"CRW",
					"Serial Number":"SerialNo"
				},
				WorkOrderSet:{
					"Work Order Number":"V431933481",
					Category:"No Repair",
					"Travel Time":"60 minutes",
					"Call Date":"10/30/2020",
					Service:"Reactive Service",
					"Work Time":"120 minutes",
					"Invoice Number":"2348349",
					"Issues Found":"None",
					"Invoice Date":"01/01/2021",
					Technician:"Kelly Barnes"
				},
				PartsSet:[],
				StoreSet:{
					"Account Number":"16000000723",
					"Region":"West",
					"Co-Op":"Yes",
					"Store Number":"4664",
					"Store BP Number":"0023",
					"Ownership BP Number":"47263748",
					"Owner/Operator":"Graham McAllan",
					"Physical Address Name":"PPG AFI FOODSVC",
					"Physical Address Street":"1 Center Dr",
					"Physical Address CityStateZip":"Elizabeth, NJ 07201-2906",
					"Mail Address Name":"PPG AFI FOODSVC",
					"Mail Address Street":"1 Center Dr",
					"Mail Address CityStateZip":"Elizabeth, NJ 07201-2906",
					"COM":"Andrea Daye",
					"Service Invoice Specialist":"Kyle Stone"
				}
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