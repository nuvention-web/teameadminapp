app.controller('ProfileCtrl', ['$scope', 'CurrentUser', function($scope, CurrentUser) {
	// $scope.user = CurrentUser;
	CurrentUser.get(function(data) {
		$scope.user = data.local;
	});
	
}]);
