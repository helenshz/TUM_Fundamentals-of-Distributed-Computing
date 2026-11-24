const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

//tweet objects should be formed as {"sender" : "sendername", "message" : "messagecontent"}

//the tweet array holding a series of tweet objects
let tweets = [];

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
    //add the latest tweet to our tweet array
    tweets.push(req.body.tweet);
    console.log("Tweet added:" + req.body.tweet);
    res.send({ status: "ok", message: "Tweet received" });
  } else {
    //no tweet?
    console.log("Tweet not added.");
    res.send({ status: "nok", message: "No tweet received" });
  }
});

app.get("/tweets", function (req, res) {
  res.send(tweets);
});

app.listen(port);
