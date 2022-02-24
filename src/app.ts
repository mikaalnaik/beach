
require('dotenv').config();
import express from 'express';

const app = express();

app.use('/beaches', require('./routes/beaches'));
app.use('/greetings', require('./routes/greetings'));
app.use('/backfill', require('./routes/backfill'));
app.use('/status', require('./routes/status'));
app.use('/import', require('./routes/import'));

export default app;
