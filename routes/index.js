var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', { title: 'Express' });
});

router.get('/body', function(req, res, next) {
  res.render('body', { name: 'Krzychu' });
});

router.get('/body2', function(req, res, next) {
  res.render('body2', { name: 'Krzychu' });
});

module.exports = router;
