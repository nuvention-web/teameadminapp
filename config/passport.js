/* https://github.com/danielgynn/express-authentication/blob/local/config/passport.js */

var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/User');

module.exports = function(passport) {

	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
		User.findById(id, function(err, user) {
			done(err, user);
		});
	});

	passport.use('local-signup', new LocalStrategy({
			usernameField: 'email',
			passwordField: 'password',
			passReqToCallback: true,
		},
		function(req, email, password, done) {
			console.log(req.body);
			var name = req.body.name;
			var university = req.body.university

			process.nextTick(function() {
				User.findOne({ 'local.email': email }, function(err, user) {
					if (err)
						return done(err);
					if (user) {
						console.log(req);
						return done(null, false, req.flash('error', 'Email is already taken.'));
					} else {
						var newUser = new User();
						newUser.local.email = email;
						newUser.local.name = name;
						newUser.local.password = newUser.generateHash(password);
						newUser.local.university = university;
						newUser.save(function(err) {
							if (err)
								throw err;
							return done(null, newUser);
						});
					}
				});
			});
		}));

	passport.use('local-login', new LocalStrategy({
			usernameField: 'email',
			passwordField: 'password',
			passReqToCallback: true,
		},
		function(req, email, password, done) {
			User.findOne({ 'local.email': email }, function(err, user) {
				if (err)
					return done(err);
				if (!user)
					return done(null, false, req.flash('error', 'No user found.'));
				if (!user.validPassword(password))
					return done(null, false, req.flash('error', 'Oops! Wrong password.'));
				return done(null, user);
			});
		}));

};
