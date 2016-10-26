let express = require('express');
let path = require('path');

let bodyParser = require('body-parser');
let mongodb = require('mongodb');
let ObjectID = mongodb.ObjectID;

let assert = require('assert');



/**
 * 
 * @description Connect to database
 * 
 */

let mongodbConnectHandler = (err, database) =>
{
	assert.equal(null, err, "Failed to connect to database");

	let server = app.listen(process.env.PORT || 8080, () =>
	{
		let port = server.address().port;
		console.log("App now running on port", port);
	});
}

let dbConnectURL = "http://localhost:27017/bookstore";

let connection = mongodb.MongoClient.connect(dbConnectURL, mongodbConnectHandler);


/**
 * 
 * @description Setup app
 * 
 */

let app = express();
app.use(express.static(__dirname));
app.use(bodyParser.json());


app.get("/*", (req, res) =>
{
	res.sendFile(path.join(__dirname, 'index.html'));
})





module.exports = app;