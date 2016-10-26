let express = require('express');
let path = require('path');

let bodyParser = require('body-parser');
let mongodb = require('mongodb');

let ObjectID = mongodb.ObjectID;
let MongoClient = mongodb.MongoClient;

let assert = require('assert');

//Connect to database

let dbConnectURL = "mongodb://localhost:27017/bookstore";

let connection = MongoClient.connect(dbConnectURL);

connection.catch(err =>
{
	assert.equal(null, err, "Failed to connect to database!");
});





//Handle error

let handleError = (err, res, code = 500, msg) =>
{
	let errorMsg = {"error": msg};

	res.status(code).json(errorMsg);
}




//Setup application

let app = express();
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let server = app.listen(process.env.PORT || 8080, () =>
{
	let port = server.address().port;
	console.log(`App now running on port ${port}`);
});


app.get("/", (req, res) =>
{
	res.sendFile(path.join(__dirname, 'index.html'));
})



app.get("/books", (req, res) =>
{
	let getBooks = (db) =>
	{
		db.collection('bookCollection').find().toArray((err, docs) =>
		{
			res.status(200).json(docs);
		})
	}

	connection.then(getBooks)
		.catch(err => {handleError(err, res, "Failed to get books!")});
});

app.post("/books", (req, res) =>
{

})