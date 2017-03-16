const request = require('request');
const config = require('../config/config.js');

const init = function RouteHandler(app) {
  app.get('/status', (req, res)=>{
    console.log('Request Received from: %s', req.ip);
    res.send("System Status: OK");
  });
}
module.exports = init;
