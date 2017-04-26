app.config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
	//================================================
	// Check if the user is connected
	//================================================
	var checkLoggedin = function($q, $timeout, $http, $location, $rootScope) {
		// Initialize a new promise
		var deferred = $q.defer();

		// Make an AJAX call to check if the user is logged in
		$http.get('/loggedin').success(function(user) {
			// Authenticated
			if (user !== '0')
			/*$timeout(deferred.resolve, 0);*/
				deferred.resolve();

			// Not Authenticated
			else {
				$rootScope.message = 'You need to log in.';
				//$timeout(function(){deferred.reject();}, 0);
				deferred.reject();
				$location.url('/login');
			}
		});

		return deferred.promise;
	};
	//================================================

	//================================================
	// Add an interceptor for AJAX errors
	//================================================
	$httpProvider.interceptors.push(function($q, $location) {
		return {
			response: function(response) {
				// do something on success
				return response;
			},
			responseError: function(response) {
				if (response.status === 401)
					$location.url('/login');
				return $q.reject(response);
			}
		};
	});

	$routeProvider
		.when('/', {
			templateUrl: '/partials/login.html',
			controller: 'LoginCtrl',
			resolve: {
				loggedin: checkLoggedin
			}
		})
		.when('/login', {
			templateUrl: '/partials/login.html',
			controller: 'LoginCtrl'
		})
		.when('/signup', {
			templateUrl: '/partials/signup.html',
			// controller: 'SignupCtrl'
		})
		.when('/profile', {
			templateUrl: '/partials/profile.html',
			controller: 'ProfileCtrl',
			resolve: {
				loggedin: checkLoggedin
			}

		})
		.when('/appointments', {
			templateUrl: '/partials/appointments.html',
			// controller: 'AppointmentsCtrl'
			resolve: {
				loggedin: checkLoggedin
			}
		})
		.when('/programs', {
			templateUrl: '/partials/programs.html',
			controller: 'ProgramCtrl',
			resolve: {
				loggedin: checkLoggedin
			}
		})
		.otherwise({
			redirectTo: '/'
		});
}]).run(function($rootScope, $http) {
	$rootScope.message = '';

	// Logout function is available in any pages
	$rootScope.logout = function() {
		$rootScope.message = 'Logged out.';
		$http.post('/logout');
	};
});
