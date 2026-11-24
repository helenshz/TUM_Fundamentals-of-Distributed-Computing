const express = require("express");
const bodyParser = require("body-parser");
const {readFile} = require('fs');

const app = express();
const port = 3000;

//tweet objects should be formed as {"sender" : "sendername", "message" : "messagecontent"}

//the tweet array holding a series of tweet objects
let tweets = [];

/*app.get("/", function (req, res) {
  res.send("Welcome to Node Twitter");
});*/

app.get("/", function (req, res) {
  readFile('./mini-twitter-client.html', 'utf8', function (err, html) {
    if (err) {
      res.status(500).send('Sorry, there was an error: ' + err.message);
    } else {
      res.send(html);
    }
  });
});

let jsonParser = bodyParser.json();

// Post for /send endpoint
// we use the bodyParser middleware to get JSON data from the request body
app.post("/send", jsonParser, function (req, res) {
  console.log(req.body);
  if (req.body && req.body.tweet) {
    //add the latest tweet to our tweet array
    tweets.push(req.body.tweet);
    console.log("Tweet added:" + JSON.stringify(req.body.tweet));
    res.send({ status: "ok", message: "Tweet received" });
  } else {
    //no tweet?
    console.log("Tweet not added.");
    res.send({ status: "Not ok.", message: "No tweet received." + JSON.stringify(req.body) });
  }
});

app.get("/tweets", function (req, res) {
  res.send(tweets);
});

console.log("Server running at http://localhost:" + port);
app.listen(port);
