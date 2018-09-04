var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.get('/home', function(req, res, next) {
  res.render('home');
});

router.get('/data', function(req, res, next) {
  res.render('home');
});

router.get('/dataDate', function(req, res, next) {
  res.render('home');
});

router.get('/maps', function(req, res, next) {
  res.render('home');
});

router.get('/logout', function(req, res, next) {
  res.render('login');
});

module.exports = router;
