async function main(req, res){

  let data = req.body

const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'rupesh_db';


  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('collection_1');
  const insertResult = await collection.insertone([{a: 1},{a: 2}]);
  console.log('Inserted documents =>', insertResult);
  client.close()
  
}
  

  module.exports={
    main:main
  }