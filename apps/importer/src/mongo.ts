import { Db, MongoClient } from 'mongodb';

const connectionString = process.env.MONGO_URL;
console.log('connectionString', connectionString);
const client = new MongoClient(connectionString);

let dbConnection: Db;

const mongo = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err) {
        console.error(err);
      }

      if (err || !db) {
        return callback(err);
      }


      dbConnection = db.db('staging_beach_db');
      console.log('Successfully connected to MongoDB.');

      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  },
};

export default mongo;
