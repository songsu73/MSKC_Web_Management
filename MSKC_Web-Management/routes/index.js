var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Main');
});
router.get('/View', function(req,res) {
  res.render('View_whole' );
});
router.get('/Setting', function(req,res) {
  res.render('Setting' );
});
router.get('/View_Detail', function(req,res) {
  res.render('View_Detail' );
});
module.exports = router;
