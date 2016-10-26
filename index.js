let MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/bookstore", (err, db) =>
{
	db.collection('bookCollection').find().toArray((err, docs) =>
	{
		console.log(docs);	
	});
	
	db.close();
});