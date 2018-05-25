/*eslint angular$window-service:0*/
/*eslint no-undef:0*/
/*eslint angular/on-watch:0*/

import angular from "angular";
import domUtils from "./utils/dom";

let setApp = ( $route, $window, appDefaults, appUtils ) => {
	
    /*
	 URL: https://github.com/angular/angular.js/issues/1213
	 FIX: Initial route update doesn't happen if ngView in a template loaded by ngInclude
	 */
    $route.reload();

	if ($window.location !==$window.parent.location ) {
		appUtils.configureApp( appDefaults.config );
	}
};

setApp.$inject = [ "$route", "$window", "appDefaults", "appUtils" ];

let setLanguage = ( $log, $rootScope, $translate, $window, amMoment, appDefaults ) => {

	$translate.use( appDefaults.locale.lang );
	amMoment.changeLocale( appDefaults.locale.moment );

	if ($window.location !==$window.parent.location ) {
		
		bbva.front.util.crossframe.Subscribe( "bbva.front.changeLanguage", setLang );
		bbva.front.global.Invoke( "getCurrentLanguage", setLang );
	}

	function setLang( params ) {
		domUtils.safeApply($rootScope, () => { 
			switch ( params.lang ? params.lang : params.language ) {
				case "en_US":
					appDefaults.locale.lang = "en-US";
					appDefaults.locale.moment = "en-us";
					break;
				case "en_GB":
					appDefaults.locale.lang = "en-GB";
					appDefaults.locale.moment = "en-gb";
					break;
				case "es_ES":
					appDefaults.locale.lang = "es-ES";
					appDefaults.locale.moment = "es";
					break;
				case "pt_PT":
					appDefaults.locale.lang = "pt-PT";
					appDefaults.locale.moment = "pt";
			}
			
			$translate.use( appDefaults.locale.lang );
			amMoment.changeLocale( appDefaults.locale.moment );
		});
	}
};

setLanguage.$inject = [ "$log", "$rootScope", "$translate", "$window", "amMoment", "appDefaults" ];

let setOrigin = ( $window, appDefaults ) => {
	if ( $window.location !== $window.parent.location ) {
		bbva.front.global.Invoke( "getGHPDLocation", function ( response ) {
			appDefaults.origin = response.ghpdLocation;
			appDefaults.ghpd = true;
		} );
	} else {
		appDefaults.origin = $window.location.origin;
	}
};

setOrigin.$inject = [ "$window", "appDefaults" ];

angular.module("webapp")
       .run( setApp )
	   .run( setLanguage )
	   .run( setOrigin );
