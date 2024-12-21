async function main(req, res){

    const { MongoClient } = require('mongodb');
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);
    console.log('he');
    
    const dbName = 'rupesh_db';
    
    
      await client.connect();
      console.log('Connected successfully to server');
      const db = client.db(dbName);
      const collection = db.collection('collection_1');
      const updateResult = await collection.updateOne({ sarvesh: 3 }, { $set: { c: 1 } });
      console.log('Updated documents =>', updateResult);
      client.close()
    }
      
    
      module.exports={
        main:main
      }