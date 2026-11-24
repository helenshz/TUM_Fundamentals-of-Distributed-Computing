// static-server-middleware.js
// A simple static file server using Express.js middleware
// Serves files from the "html" directory
// Should be start with: node ./static-server-middleware.js to allow it find the subfolder html

var express = require("express");

var app = express();

//define root directory as first parameter
app.use(express.static("html"));
app.listen(3000);
