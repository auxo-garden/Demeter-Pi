const request = require('request');
const config = require('../config/config.js');

const init = function statusChecker() {
  request.get({
    url: config.serverURL+'/status'
  }, (error, response, body)=>{
    console.log(body);
  });
}
module.exports = init;
