let translations = ( $translateProvider ) => {

	let enGB = require( "./../assets/lang/en-GB.json" );
	let enUS = require( "./../assets/lang/en-US.json" );
	let esES = require( "./../assets/lang/es-ES.json" );
	let ptPT = require( "./../assets/lang/pt-PT.json" );

	$translateProvider.useSanitizeValueStrategy( "sanitizeParameters" );

	$translateProvider
		.translations( "en-GB", enGB )
		.translations( "en-US", enUS )
		.translations( "es-ES", esES )
		.translations( "pt-PT", ptPT );
};

translations.$inject = [ "$translateProvider" ];

export default translations;
