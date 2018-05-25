/*eslint angular/no-private-call:0*/
let safeApply = ( $scope, fn ) => {

	$scope.$$phase || $scope.$root.$$phase ? fn() : $scope.$apply( fn );
};

export default safeApply;
