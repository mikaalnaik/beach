import express from 'express';
import mongo from '../../mongo';

const router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});


// Define the home page route
router.get('/latest', async (req, res) => {
  const db = mongo.getDb();
  const result = await db.collection('records')
    .find({ beachReadings: { $exists: true }})
    .sort({ _id: 1 })
    .limit(1)
    .toArray();

  // TODO: standardize the response type from the mongo response
  // NOTE: Maybe not?

  res.send(result);
});

// Define the about route
router.get('/about', async (_, res) =>{
  res.send('About us');
});


module.exports = router;
