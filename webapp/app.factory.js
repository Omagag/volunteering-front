/*eslint no-undef:0*/
/*eslint angular/module-getter:0*/

import angular from "angular";
import appDefaults from "./settings/app.defaults";

let appUtils = () => {

	return {
		configureApp : configureApp,
		registerAppAccess : registerAppAccess,
		registerSectionAccess : registerSectionAccess,
		registerAppAction : registerAppAction
	};

	function configureApp( pParams ) {

		bbva.front.global.Invoke( "configureApp", pParams );
		bbva.front.util.crossframe.SetAutoWindowResize( true );
	}

	function registerAppAccess() {
		bbva.front.global.Invoke( "registraSeguimientoAccesoApp", [
			"webapp"
		] );
	}

	function registerSectionAccess( pParams ) {
		bbva.front.global.Invoke( "registraSeguimientoAccesoPes", [
			"webapp",
			pParams.section
		] );
	}

	function registerAppAction( pParams ) {
		bbva.front.global.Invoke( "registraSeguimientoAccionApp", [
			"webapp",
			pParams.section,
			pParams.action
		] );
	}
};

appUtils.$inject = [];

angular.module( "webapp" )
       .factory( "appUtils", appUtils )
       .value( "appDefaults", appDefaults);
