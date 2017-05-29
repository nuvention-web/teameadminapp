/* https://github.com/danielgynn/express-authentication/blob/local/routes/index.js */

var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index', { title: 'Index', errors : req.flash('error')});
});

router.get('/loggedin', function(req, res) {
  res.send(req.isAuthenticated() ? req.user : '0');
});

// route to log out
router.get('/logout', function(req, res){
  req.logOut();
  res.redirect('/');
});

router.get('/signup', function(req, res){
  res.redirect('/#/signup');
});

router.get('/login', function(req, res){
  res.redirect('/#/login');
});

router.get('/profile', function(req, res){
  res.redirect('/#/profile');
});

router.get('/programs', function(req, res){
  res.redirect('/#/programs');
});

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/programs',
  failureRedirect: '/signup',
  failureFlash: true,
  })
);


router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/programs',
  failureRedirect: '/login',
  failureFlash: true,
}));


module.exports = router;

