async function main(req, res){

 const {get_mongo_connection}=require('../emp/base/mongo_connector');
 await get_mongo_connection();
  let data = req.body


    const { MongoClient } = require('mongodb');
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);
    
    const dbName = 'rupesh_db';
    
      await client.connect();
      console.log('Connected successfully to server');
      const db = client.db(dbName);
      const collection = db.collection('collection_1');
      const findResult = await collection.find({data}).toArray();
      console.log('Found documents =>', findResult);
      client.close()
    }
      
    
      module.exports={
        main:main
      }