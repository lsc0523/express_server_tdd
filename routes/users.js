var express = require('express');
var router = express.Router();

var users = [
  {id:1, name: 'alice'},
  {id:2, name: 'bek'},
  {id:3, name: 'chris'}
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

module.exports = router;
