import angular from "angular";
import "angular-moment";
import ngRoute from "angular-route";
import ngSanitize from "angular-sanitize";
import "angular-translate";
import "angular-route-segment";
import ngCookies from "angular-cookies";
import "angular-translate-loader-static-files";

angular.module("webapp", [
	"angularMoment",
	ngRoute,
	"route-segment",
	"view-segment",
	ngSanitize,
	"pascalprecht.translate",
	ngCookies,
]);
