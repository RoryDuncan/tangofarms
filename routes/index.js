var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Tango Farms' });
});

router.get('/products', function(req, res) {
  res.render('products', { title: 'Our Products - Tango Farms' });
});


module.exports = router;
