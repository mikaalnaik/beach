const express = require('express');
const router = express.Router();

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});


// Define the home page route
router.get('/', function(req, res) {
  res.send('Howdy Folks');
});

// Define the about route
router.get('/about', function(req, res) {
  res.send('About us');
});


module.exports = router;
