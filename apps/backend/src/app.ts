
import dotenv from 'dotenv'
dotenv.config()

import express from 'express';
const app = express();


import greetingsRoute from './routes/greetings';
import beachesRoute from './routes/beaches';
import historicalRoute from './routes/historical';
import backfillRoute from './routes/backfill';
import statusRoute from './routes/status';
import importRoute from './routes/import';
import healthRoute from './routes/health';


app.use('/', greetingsRoute);
app.use('/beaches', beachesRoute);
app.use('/historical', historicalRoute);
app.use('/backfill', backfillRoute);
app.use('/status', statusRoute);
app.use('/import', importRoute);
app.use('/health', healthRoute);

export default app;
