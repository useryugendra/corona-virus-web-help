
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("corona_testing_centres");
    var myobj = [{ centre_name: "Apollo", city: "mumbai" ,contact: "807xxxx136"},
    { centre_name: "Chem labs", city: "Hyderabad", contact: "958xxxx859"},
    {centre_name: "Prakash labs", city: "Hyderabadd", contact: "874xxxx356"}, 
    {centre_name: "Sanjay labs",city: "Hyderabad", contact: "789xxxx156"},
    {centre_name: "Vasulu labs", city: "Hyderabad", contact: "965xxxx587"},
    {centre_name: "Konnect labs", city: "Vizag", contact: "6300xxxx56"},
    {centre_name: "Udaya labs", city:"Vizag", contact: "895xxxx745"},
    {centre_name: "Roopa labs", city: "Vizag", contact: "785xxxx158"},
    {centre_name: "Satya labs", city: "Vizag", contact: "835xxxx426"},
    {centre_name: "Rama labs", city: "Delhi", contact: "962xxxx187"},
    {centre_naem: "Satyam labs", city: "Delhi", contact: "924xxxx459"},
    {centre_naem: "Vishal labs", city: "Delhi", contact: "924xxxx659"},
    {centre_naem: "Venkateshwara labs", city: "Banglore", contact: "724xxxx453"},
    {centre_naem: "Mahesh labs", city: "Banglore", contact: "824xxxx253"},
    {centre_naem: "Jeet labs", city: "Banglore", contact: "864xxxx483"}];
    dbo.collection("test_centres").insertMany(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });