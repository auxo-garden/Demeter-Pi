const express = require('express');
const routes = require('./main/routes.js');
const statusCheck = require('./main/statuscheck.js');

var app = express();
statusCheck();
routes(app);

app.listen(8080);
