let express = require('express');
let path = require('path');

let bodyParser = require('body-parser');
let mongodb = require('mongodb');

let ObjectID = mongodb.ObjectID;
let MongoClient = mongodb.MongoClient;

let assert = require('assert');


const HTTP_OK = 200;
const HTTP_INTERNAL_SERVER_ERROR = 500;


//Connect to database

let dbConnectURL = "mongodb://localhost:27017/bookstore";

let connection = MongoClient.connect(dbConnectURL);

connection.catch(err =>
{
	assert.equal(null, err, "Failed to connect to database!");
});





//Handle error

let handleError = (err, res, code = HTTP_INTERNAL_SERVER_ERROR, msg) =>
{
	let errorMsg = {"error": msg};

	res.status(code).json(errorMsg);
}




//Setup application

let app = express();
app.use(express.static(`${__dirname}/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let server = app.listen(process.env.PORT || 8080, () =>
{
	let port = server.address().port;
	console.log(`App now running on port ${port}`);
});


app.get("/", (req, res) =>
{
	res.sendFile(path.join(__dirname, 'dist/index.html'));
})



app.get("/books", (req, res) =>
{
	let response = (docs) =>
	{
		res.status(HTTP_OK).json(docs);
	}

	let getBooks = (callback) =>
	{
		return (db) =>
		{
			db.collection('bookCollection').find().toArray((err, docs) =>
			{
				callback(docs);
			});
		}
	}

	connection.then(getBooks(response))
		.catch(err => {handleError(err, res, HTTP_INTERNAL_SERVER_ERROR, "Failed to get books!")});
});

app.post("/books", (req, res) =>
{
	let response = (docs) =>
	{
		res.status(HTTP_OK).json(docs);
	}

	let updateBooks = (callback) =>
	{
		return (db) =>
		{
			db.collection('bookCollection').update();
		}
	}

	connection.then(getBooks(response))
		.catch(err => {handleError(err, res, HTTP_INTERNAL_SERVER_ERROR, "Failed to get books!")});
})

app.put("/books", (req, res) =>
{
	let response = (docs) =>
	{
		res.status(HTTP_OK).json(docs);
	}

	let getBooks = (callback) =>
	{
		return (db) =>
		{
			db.collection('bookCollection').find().toArray((err, docs) =>
			{
				callback(docs);
			});
		}
	}

	connection.then(getBooks(response))
		.catch(err => {handleError(err, res, HTTP_INTERNAL_SERVER_ERROR, "Failed to get books!")});
})