const express = require("express");

const app = express();
let port = 3000;

//app.get() is an async function
//we define an anonymous callback which is called when a request arrives
//this is the GET handler
app.get("/test", function (request, response) {
  response.send("This is the response to the GET request");
  console.log("Server received a GET request");
});

//this is the POST handler
app.post("/test", function (request, response) {
  response.send("This is the response to the POST request");
  console.log("Server received a POST request");
});

//the listen function loops endlessly and thus not return
app.listen(port);
