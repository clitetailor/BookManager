let express = require('express');
let path = require('path');

let bodyParser = require('body-parser');
let mongodb = require('mongodb');
let ObjectID = mongodb.ObjectID;

let assert = require('assert');

let app = express();
app.use(express.static(__dirname));
app.use(bodyParser.json());



mongodb.MongoClient.connect(process.env.MONGODB_URI, (err, database) =>
{
	assert.equal(null, err, "Failed to connect to database");

	process.exit(1);



	let server = app.listen(process.env.PORT || 8080, () =>
	{
		let port = server.address().port;
		console.log("App now running on port", port);
	});
})


let handleError = (res, errlog, msg, code) =>
{
	assert(null, err, `ERROR: $(log)`);
	res.status(code || 500).json({"err": msg})
}



app.post("/contacts", (req, res) =>
{
	let newContact = req.body
})


app.get("/*", (req, res) =>
{
	res.sendFile(path.join(__dirname, 'index.html'));
})





module.exports = app;