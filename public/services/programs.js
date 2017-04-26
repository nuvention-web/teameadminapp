app.factory('Programs', ['$resource', function($resource) {
    return $resource('/api/programs/:id', null, {
        'update': { method: 'PUT' }
    });
}]);