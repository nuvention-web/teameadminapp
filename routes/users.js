/* https://github.com/danielgynn/express-authentication/blob/local/routes/users.js */

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = require('../models/User.js');


router.get('/', function(req, res, next) {
  User.find(function (err, users) {
    if (err) return next(err);
    res.json(users);
  });
});

/* GET /User/id */
router.get('/:id', function(req, res, next) {
  User.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* POST /users */
router.post('/', function(req, res, next) {
  User.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
      return next();
  res.redirect('/');
}

module.exports = router;

// var express = require('express');
// var router = express.Router();

// var mongoose = require('mongoose');
// var User = require('../models/User.js');

// /* GET /users listing. */
// router.get('/', function(req, res, next) {
//   User.find(function (err, users) {
//     if (err) return next(err);
//     res.json(users);
//   });
// });

// /* GET /User/id */
// router.get('/:id', function(req, res, next) {
//   User.findById(req.params.id, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

// /* POST /users */
// router.post('/', function(req, res, next) {
//   User.create(req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

// /* PUT /users/:id */
// router.put('/:id', function(req, res, next) {
//   User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

// /* DELETE /users/:id */
// router.delete('/:id', function(req, res, next) {
//   User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

// module.exports = router;
