import angular from "angular";
import "angular-moment";
import ngRoute from "angular-route";
import ngSanitize from "angular-sanitize";
import "angular-translate";
import "angular-route-segment";
import ngCookies from "angular-cookies";
import "angular-translate-loader-static-files";

// import popper from "popper.js";
// import bootstrap from "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/scss/bootstrap.scss";

import accordion from "angular-ui-bootstrap/src/accordion";
import datepicker from "angular-ui-bootstrap/src/datepicker";
import dateparser from "angular-ui-bootstrap/src/dateparser";
// import uiBootstrap from "angular-ui-bootstrap/dist/ui-bootstrap";
import "angular-ui-bootstrap/dist/ui-bootstrap-csp.css"

angular.module("webapp", [
	"angularMoment",
	ngRoute,
	"route-segment",
	"view-segment",
	ngSanitize,
	"pascalprecht.translate",
	ngCookies,
	// poper,
	// bootstrap,
	accordion,
	datepicker,
	dateparser
	// uiBootstrap
]);
