import express from 'express';

const router = express.Router();

router.get('/', async (_, res) => {
  res.sendStatus(200);
});


module.exports = router;
