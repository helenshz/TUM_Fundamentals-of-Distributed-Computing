var express = require("express");
var app = express();
var port = 3000;

// Middleware to parse JSON bodies
// use will be called for every request
// express.json() is a built-in middleware function that parses incoming requests with JSON payloads into JavaScript objects
app.use(express.json());

// Middleware to parse URL-encoded bodies into JavaScript objects
app.use(express.urlencoded({ extended: false }));

app.post("/", function (req, res) {
  console.log("Payload received: " + JSON.stringify(req.body));
  res.sendStatus(200);
});

app.get("/api", function (req, res) {
  console.log("Query parameters received: " + JSON.stringify(req.query));
  res.json(req.query);
});

app.listen(port, function () {
  console.log("Server is running on port " + port);
});