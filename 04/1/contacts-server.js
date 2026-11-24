const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

//contact objects should be formed as {"name" : "Carl Smith", "phone" : "08928912345"}

//the contacts array holding a series of contact objects
let contacts = [];

let jsonParser = bodyParser.json();

// Post for /send endpoint
// we use the bodyParser middleware to get JSON
//app.post('/send', jsonParser, function(req, res) {
app.post("/add", jsonParser, function (req, res) {
  console.log(req.body);
  if (req.body && req.body.contact) {
    //add the latest contact to our contact array
    contacts.push(req.body.contact);
    console.log("Contact added: " + req.body.contact.name);
    res.send({ status: "ok", message: "Contact received and added." });
  } else {
    //no contact?
    console.log("Contact not added.");
    res.send({ status: "nok", message: "No proper contact received." });
  }
});

app.get("/contacts", function (req, res) {
  res.send(contacts);
});

console.log("Server listening on port " + port);
app.listen(port);
