const request = require('request');
const config = require('../config/config.js');

const init = function RouteHandler(app) {
  app.get('/status', (req, res)=>{
    res.send('System Status: OK');
  });
}
module.exports = init;
