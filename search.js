var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("corona_testing_centres");
  var query = { city: "mumbai" };
  dbo.collection("test_centres").find(query).toArray(function(err, result) {
    if (err) throw err;
    // console.log(result);
    
    db.close();
  });
});