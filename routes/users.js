var express = require('express');
var router = express.Router();

var users = [
  {id:1, name: 'alice'},
  {id:2, name: 'bek'},
  {id:3, name: 'chris'}
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  req.query.limit = req.query.limit || 10;
  const limit = parseInt(req.query.limit,10);
  if(Number.isNaN(limit)){
    return res.status(400).end();
  }
  res.json(users.slice(0,limit));
});

module.exports = router;
