import mongo from '../mongo';

const express = require('express');
const router = express.Router();
//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});


// Define the home page route
router.get('/', (req, res) => {
  console.log('mongo');
  const db = mongo.getDb();
  console.log('flks', db);
  const result = db.collection('records')
    .find({})
    .sort({ _id: -1 })
    .limit(10)
    .toArray();

  res.send(result);
});

// Define the about route
router.get('/about', function(req, res) {
  res.send('About us');
});


module.exports = router;
