// // Dependencies
// import "angular-ui-bootstrap/dist/ui-bootstrap-csp.css";
// // import "angular-ui-bootstrap/dist/ui-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap";

import "./assets/styles/bbva-fonts.scss";
import "./assets/styles/bbva-colors.scss";
import "./assets/styles/coronita.scss";
import "./assets/styles/coronita-small.scss";
import "./assets/styles/bbva-main.scss";

// Made In-House JS
// import "./assets/js/main";
import "./assets/js/jquery.flowup-labels";

// TODO: I'm not sure: Global Services
import "./segments/services/scholar-level.service";

// Views
import homeRoute from "./segments/home/home.routes";
import mentorRoute from "./segments/mentor/mentor.routes";
import scholarshipHolderRoute from "./segments/scholarshipHolder/list/scholarship-holder-list.routes";
import scholarshipHolderCardRoute from "./segments/scholarshipHolder/card/scholarship-holder-card.routes";
import diaryRoute from "./segments/diary/diary.routes";
import mediaLoaderRoute from "./segments/staff/media-loader/media-loader.routes";
import mediaViewerRoute from "./segments/staff/media-viewer/media-viewer.routes";

// Components
import "./segments/layout/header.component";
import "./segments/layout/nav.component";
import "./segments/mentor/components/mentor-resume.component";
import "./segments/layout/footer.component";
import "./segments/layout/scholar-menu.component";
import "./segments/layout/evaluate.component";
import "./segments/layout/session-menu-component";
import "./segments/layout/empty-message.component";
import "./segments/layout/dialog.component";

let routing = ( $routeSegmentProvider, $routeProvider, $locationProvider ) => {

    $routeSegmentProvider
        .segment( "home", homeRoute )
        .segment("mentor", mentorRoute)
        .segment("scholarshipHolder", scholarshipHolderRoute)
        .segment("scholarshipHolderCard", scholarshipHolderCardRoute)
        .segment("diary", diaryRoute)
        .segment("mediaLoader" , mediaLoaderRoute)
        .segment("mediaViewer" , mediaViewerRoute);

    $routeSegmentProvider
		.when( "/", "home" )
        .when("/mentor/", "mentor")
        .when("/scholarship-holder/", "scholarshipHolder")
        .when("/scholarship-holder/:id/card", "scholarshipHolderCard")
        .when("/diary", "diary")
        .when("/staff/media/loader", "mediaLoader")
        .when("/staff/media/viewer", "mediaViewer");
        // .when("/staff/media/:id/viewer", "mediaViewer");

    // configure html5 to get links working on jsfiddle
	$locationProvider.html5Mode( true );
};

routing.$inject = [ "$routeSegmentProvider", "$routeProvider", "$locationProvider" ];

export default routing;
