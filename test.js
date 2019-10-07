const MongoClient = require("mongodb").MongoClient;
const URI = "mongodb+srv://admin:admin@lighthouse-3rte9.mongodb.net/test?retryWrites=true&w=majority";


function hello() {
  MongoClient.connect(URI, function(err, db) {
    if (err) throw err;
    var dbo = db.db("lighthouse_test");
    dbo.collection("09032019").findOne({}, function(err, result) {
      if (err) throw err;
      db.close();
      console.log(JSON.stringify(result));
      return result;
    });
  });
  return null;
}

console.log(hello());