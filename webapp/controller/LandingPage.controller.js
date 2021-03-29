sap.ui.define([
	"./BaseController"
	,"sap/m/MessageToast"
], function (BaseController,MessageToast) {
	"use strict";
	var that;
	return BaseController.extend("tccc.zbar.warranty.controller.LandingPage", {
		onInit: function () {
			that=this;
		},
		onPressTableRow:function(oEvent){
			const oRouter= sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("RouteDetails",{
				claimNo: oEvent.getParameter("listItem").getAggregation("cells")[0].getProperty("text")
			});
		},
		

	});

});