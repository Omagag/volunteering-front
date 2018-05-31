import homeRoute from "./segments/home/home.routes";
import mentorCardRoute from "./segments/mentor/card/card.routes";
import scholarshipHolderHomeRoute from "./segments/scholarshipHolder/scholarship-holder.routes";

import "./assets/styles/bbva-fonts.scss";
import "./assets/styles/bbva-colors.scss";
import "./assets/styles/coronita.scss";
import "./assets/styles/coronita-small.scss";
import "./assets/styles/bbva-main.scss";

import "./assets/js/main";
import "./assets/js/jquery.flowup-labels";

import "./segments/layout/header.component";
import "./segments/layout/nav.component";
import "./segments/layout/footer.component";


let routing = ( $routeSegmentProvider, $routeProvider, $locationProvider ) => {

    $routeSegmentProvider
        .segment( "home", homeRoute )
        .segment("mentorCard", mentorCardRoute)
        .segment("scholarshipHolderHome", scholarshipHolderHomeRoute);

    $routeSegmentProvider
		.when( "/", "home" )
        .when("/mentor/card", "mentorCard")
        .when("/scholarship-holder/", "scholarshipHolderHome");

    // configure html5 to get links working on jsfiddle
	$locationProvider.html5Mode( true );
};

routing.$inject = [ "$routeSegmentProvider", "$routeProvider", "$locationProvider" ];

export default routing;
