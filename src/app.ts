require('dotenv').config();
import express from 'express';
import mongo from './mongo';

const app = express();
const PORT = 3000;

app.use('/greetings', require('./routes/greetings'));
app.use('/backfill', require('./routes/backfill'));

mongo.connectToServer(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on ${PORT}.`);
  });
});
