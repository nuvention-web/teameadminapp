app.factory("CurrentUser", ['$resource', function($resource) {
  return $resource('/api/currentUser');
}]);