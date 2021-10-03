import express from 'express';

const app = express();
const PORT = 3000;

app.use(require('./routes/greetings'));

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}.`);
});
