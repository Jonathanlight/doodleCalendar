var express = require('express');
var router = express.Router();

router.post('/ajouter', function(req, res, next) {
  res.send('respond with a resource');
});

router.delete('/effacer', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/preferences', function(req, res, next) {
	res.send('respond with a resource');
})

module.exports = router;