var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var CurrentUser = require('../models/CurrentUser.js');

// router.get('/', , function(req, res) {
// 	res.json(req.user)
// });

/* GET /currentUser listing. */
router.get('/', function(req, res, next) {
  CurrentUser.find(function (err, currentUser) {
    if (err) return next(err);
    res.json(req.user);
  });
});


/* POST /currentUser */
router.post('/', function(req, res, next) {
  CurrentUser.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(req.user);
  });
});

module.exports = router;


function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
		return next();
	res.redirect('/');
}

module.exports = router;
