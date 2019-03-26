var faker = require('faker');

const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://mongodb-test-monorepo:Giving-Future-Greatly-Rose-0@supportcluster01-topws.mongodb.net/mongodb-test-monorepo?retryWrites=true";




module.exports = (req, res) => {
  const client = new MongoClient(uri, { useNewUrlParser: true });
  
  client.connect(err => {
    
    console.log("Connected successfully to server");

    const collection = client.db("mongodb-test-monorepo").collection("devices");
    // perform actions on the collection object
    client.close();
  });


  res.end(faker.internet.email() + ' ' + new Date().toString());
};
