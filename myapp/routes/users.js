var express = require('express');
var router 	= express.Router();
var db 		= require('./config/db');

/* Create new User. */
router.post('/signup', function(req, res, next) {
  res.send('respond with a resource');
});

/* Login User. */
router.get('/login', function(req, res, next) {
  res.send('respond with a resource');
});

/* Logout User. */
router.get('/logout', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
