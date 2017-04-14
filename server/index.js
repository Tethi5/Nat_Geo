const express = require('express');
const bootstrap = require('bootstrap');
const photo = require('nat-geo-api');
const massive = require('massive');
const config = require('./config.js');
const bodyParser = require('body-parser');
const app = module.exports = express();


///////////Products Endpoints//////////////////
app.get('/api/photo', mainCtrl.getPhoto);



photo.run({
	port:8080

});
