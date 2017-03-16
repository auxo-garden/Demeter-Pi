const express = require("express");
const routes = require("./main/routes.js");

var app = express();
routes(app);

app.listen(8080);
