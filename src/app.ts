require('dotenv').config();
import express from 'express';
import mongo from './mongo';

const app = express();

app.use('/beaches', require('./routes/beaches'));
app.use('/greetings', require('./routes/greetings'));
app.use('/backfill', require('./routes/backfill'));
app.use('/status', require('./routes/status'));
app.use('/import', require('./routes/import'));

mongo.connectToServer(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}.`);
  });
});
