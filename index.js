// $ = require('jquery');
// require('bootstrap');
// require('bootstrap-loader');
console.log('top')
const express = require('express');
const gsap = require('gsap');
// const bootstrap = require('bootstrap');
const photo = require('nat-geo-api');
const massive = require('massive');
const config = require('./config.js');
const bodyParser = require('body-parser');
const multer = require('multer')
const app = module.exports = express();
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

/////////INITILIZE APP///////////////////////


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
var filename
app.get('/api/photo', tableController.getPhoto);
app.get('/api/photo/:id', tableController.findTable);
app.get('/api/picture', tableController.findPic);

app.post('/api/photo', function(req, res, next) {

    db.post_Photo([req.body.name, req.body.filterName, req.body.extra, filename], function(err, photo) {
        if (err) {

            return res.status(500).send(err)
        } else {
            res.send(photo)
            console.log('sent another row to your database.BOI!!')
        }
    })
});

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      console.log(file)
        cb(null, './picture')
    },
    filename: function (req, file, cb) {
      filename = Date.now() + file.originalname;
        cb(null, Date.now() + file.originalname)
  }
})

app.post('/climate', function(req, res) {
        var upload = multer({
            storage: storage
        }).single('image')
        upload(req, res, function(err) {
          console.log(err)
          alert('Sent your Photo!')
          res.redirect('#!/climate')
        })
    });

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
