import express from 'express';

const router = express.Router();

router.get('/', async (_, res) => {
  res.send(200);
});


module.exports = router;
