
import app from './app';
import mongo from './mongo';

mongo.connectToServer(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}.`);
  });
});
