const express = require("express");
const bodyParser = require("body-parser");

const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "mongodb://127.0.0.1:27017/mydb";
const client = new MongoClient(uri);

const app = express();
const port = 3000;

//tweet objects should be formed as { "tweet" : {"sender" : "sendername", "message" : "messagecontent"}}

const database = client.db("twitter-db");
console.log(database);
const tweets_collection = database.collection("tweets");
console.log(tweets_collection);

app.get("/", function (req, res) {
  res.send("Welcome to Node Twitter");
});

let jsonParser = bodyParser.json();

// Post for /send endpoint
// we use the bodyParser middleware to get JSON
//app.post('/send', jsonParser, function(req, res) {
app.post("/send", jsonParser, function (req, res) {
  console.log(req.body);
  if (req.body && req.body.tweet) {
    //add the latest tweet to our tweet database
    tweets_collection.insertOne(req.body.tweet);
    console.log(req.body.tweet);
    res.send({ status: "ok", message: "Tweet received" });
  } else {
    //no tweet?
    res.send({ status: "nok", message: "No tweet received" });
  }
});

app.get("/tweets", async function (req, res) {
  tweets = await tweets_collection.find({}).toArray();

    console.log("Found tweets in DB:" + tweets);
    res.send(tweets);
  });

  /*const myPromise = tweets_collection.find({}).toArray();
  myPromise.then(function (tweets) {
    console.log("Found tweets in DB:" + tweets);
    res.send(tweets);
  });
});*/

console.log("Listening on port " + port);
app.listen(port);
