async function main(req, res){

    const { MongoClient } = require('mongodb');
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);
    
    const dbName = 'rupesh_db';
    
      await client.connect();
      console.log('Connected successfully to server');
      const db = client.db(dbName);
      const collection = db.collection('collection_1');
      const deleteResult = await collection.deleteMany({ a: 3 },{a:1});
      console.log('Deleted documents =>', deleteResult);
      client.close()
    }
      
    
      module.exports={
        main:main
      }