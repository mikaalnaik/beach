
require('dotenv').config();
import express from 'express';

const app = express();

app.use('/', require('./routes/greetings'));
app.use('/beaches', require('./routes/beaches'));
app.use('/historical', require('./routes/historical'));
app.use('/backfill', require('./routes/backfill'));
app.use('/status', require('./routes/status'));
app.use('/import', require('./routes/import'));

export default app;
