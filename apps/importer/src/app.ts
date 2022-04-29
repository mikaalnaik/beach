
require('dotenv').config();
import express from 'express';

const app = express();

app.use('/', require('./routes/greetings'));
app.use('/import', require('./routes/import'));
app.use('/health', require('./routes/health'));

export default app;
