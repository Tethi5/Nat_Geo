var app = require('../index.js');
var db = app.get('db');

module.exports = {
        getPhoto: function(req, res, next) {
            db.getUser_Photo([], function(err, photo) {
                if (err) {
                    console.log('not working backEnd.js')
                    return res.status(500).send(err)
                } else {
                    res.send(photo)
                }
            })
        },

        findPic: function(req,res,next) {
          db.get_pic([], function(err, pic){
            if (err){
              return res.status(500).send(err)
            } else {
              res.send(pic)
            }
          })
        },

    findTable: function(req, res, next) {
        Db.tables.read_space([req.params.id],
            function(err, results) {
                if (err) {
                    console.log(err);
                    return res.send(err);
                }
                return res.status(200).send(results);
            })
    },
    create: function(req, res, next) {
        db.tables.create_space([req.body.idea],
            function(err, table) {
                if (err) {
                    console.log(err)
                    return res.send(err);
                } else {
                    res.send(results);
                }
            })
    },
    update: function(req, res, next) {
        db.tables.update_space([req.body.idea],
            function(err, results) {
                if (err) {
                    console.error(err);
                    return res.send(err);
                } else {
                    res.send(results);
                }
            });
    },
    delete: function(req, res, next) {
        db.tables.delete_space([req.params.productId], function(err, results) {

        })
    }
}
