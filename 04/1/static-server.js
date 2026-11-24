// static-server.js
// A simple static file server using Express.js
// Serves the home.html file on the root path
// Should be start with: node ./static-server.js to allow it find the subfolder html

const express = require("express");
const { readFile } = require("fs");

const app = express();

//request = user's incoming data, response = outgoing data
app.get("/", function (request, response) {
  readFile("./html/home.html", "utf8", function (err, html) {
    if (err) {
      response.status(500).send("Sorry, there was an error: " + err.message);
    }

    response.send(html);
  });
});

app.listen(3000, () => console.log("App available on http://localhost:3000"));
