app.controller('ProgramDetailCtrl', ['$scope', '$routeParams', 'Programs', function($scope, $routeParams, Programs) {
    $scope.program = Programs[$routeParams.id];
}]);
