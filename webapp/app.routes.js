import homeRoute from "./segments/home/home.routes";

let routing = ( $routeSegmentProvider, $routeProvider, $locationProvider ) => {

    $routeSegmentProvider
        .segment( "home", homeRoute );
    
    $routeSegmentProvider
		.when( "/", "home" );
    
    // configure html5 to get links working on jsfiddle
	$locationProvider.html5Mode( true );
};

routing.$inject = [ "$routeSegmentProvider", "$routeProvider", "$locationProvider" ];

export default routing;
