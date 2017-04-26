var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Program = require('../models/Program.js');

/* GET /programs listing. */
router.get('/', function(req, res, next) {
  Program.find(function (err, programs) {
    if (err) return next(err);
    res.json(programs);
  });
});

/* GET /programs/id */
router.get('/:id', function(req, res, next) {
  Program.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* POST /programs */
router.post('/', function(req, res, next) {
  Program.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /programs/:id */
router.put('/:id', function(req, res, next) {
  Program.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /programs/:id */
router.delete('/:id', function(req, res, next) {
  Program.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
