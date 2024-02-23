const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const database = "practice-node";
const client = new MongoClient(url);

const dbConnect = async () => {
  let response = await client.connect();

  let db = response.db(database);

  return db.collection("user");
};

module.exports = dbConnect();
