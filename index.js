// $ = require('jquery');
// require('bootstrap');
// require('bootstrap-loader');

const express = require('express');
// const bootstrap = require('bootstrap');
const photo = require('nat-geo-api');
const massive = require('massive');
const config = require('./config.js');
const bodyParser = require('body-parser');
const multer = require('multer')
const app = module.exports = express();
app.use(bodyParser.json());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb'}));
app.use(express.static('./public'));

///////////INITILIZE APP///////////////////////


///////////MASSIVE SETUP //////////////////////
const massiveUri = config.massiveUri;
const massiveServer = massive.connectSync({
    connectionString: massiveUri
});
app.set('db', massiveServer);

var db = app.get('db');

db.build_tables(function(err, res) {
    console.log(err)
});
//////////Controllers /////////////////////////
var tableController = require('./server/backEndCtrl.js')
///////////Products Endpoints//////////////////
app.get('/api/photo', tableController.getPhoto);
app.get('/api/photo/:id', tableController.findTable);
app.post('/api/photo', tableController.postPhoto);
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
  }
})

app.post('/api/picture', function(req, res) {
        var upload = multer({
            storage: storage
        }).single('image')
        upload(req, res, function(err) {
            console.log('saved photo to storage BRUHHH!')
        })
    })
app.post('/api/photo/table', tableController.create);
app.put('/api/photo/:id', tableController.update);
app.delete('/api/photo/:id', tableController.delete);


// LISTEN ///////////////////////////////////
var port = config.PORT;
app.listen(3001, function() {
  console.log('listening on port ', port);
});
// photo.run({
//     port: 3001
//
// });
