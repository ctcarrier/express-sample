var express = require('express');
var router = express.Router();

var movies = [ { id: 1, title: 'Citizen Kane'}, { id: 2, title: 'Bambi'} ]
var showtimes = [
  {
    id: 1,
    movieId: 1,
    time: new Date()
  },
  {
    id: 2,
    movieId: 1,
    time: new Date()
  },
  {
    id: 3,
    movieId: 2,
    time: new Date()
  },
  {
    id: 4,
    movieId: 2,
    time: new Date()
  },
  {
    id: 5,
    movieId: 2,
    time: new Date()
  }
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
