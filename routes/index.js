var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json([{
  	id: 1,
  	username: "testuser1"
  }, {
  	id: 2,
  	username: "testuser2"
  }]);
  //res.render('index', { title: 'Express' });
});

module.exports = router;
