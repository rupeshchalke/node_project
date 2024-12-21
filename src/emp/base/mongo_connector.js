async function get_mongo_connection(){
    
    const { MongoClient } = require('mongodb');
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);
    
    const dbName = 'rupesh_db';
    
      await client.connect();
      console.log('Connected successfully to server');
      const db = client.db(dbName);
}

module.exports={
    get_mongo_connection
  }