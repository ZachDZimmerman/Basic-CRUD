var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('players');
});

router.get('/add', function (req, res) {
  res.render('add');
})

router.post('/add', function (req, res, next) {
// grab information from post
knex('player').insert({
  name: req.body.name,
  country: req.body.country,
  age: req.body.age
  // insert it into DB
    }).then(function(message) {
// redirect to main page
    // console.log(message);
    res.redirect('/players')
  }).catch(function (error) {
    next(error);
  })
})


module.exports = router;
