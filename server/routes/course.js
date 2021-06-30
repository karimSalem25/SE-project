var express = require('express');
var router = express.Router();
var mongoo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectId;
var assert = require('assert');
const { mongo } = require('mongoose');

const CONNECTION_URL ='mongodb+srv://karimsalem25:ko@25102001@cluster0.e3rym.mongodb.net/database1?retryWrites=true&w=majority';

router.get('/', function(req, res, next){
    res.render('/course');
});

router.get('/get_data', function(req, res, next){
    mmongoo.connect(CONNECTION_URL, function(err, db){
        var resultArray = [];
        assert.equal(null, err);
        var cursor = db.collection('course_data').find();
        cursor.forEach(function(doc, array){
            assert.equal(null, err);
            resultArray.push(doc);
        }, function(){
            db.close();
            res.render('course', {item: resultArry});
        });
    });
});


router.post('/add', function(req, res, next){
    var iterm={
        id: req.body.id,
        course_name: req.body.name,
        credit_hrs: req.body.credit_hrs,
    };
    mongo.connect(CONNECTION_URL, function(err, de){
        assert.equal(null, err);
        db.collection('course_data').insertOne(item, function(err, result){
            assert.equal(null, err);
            console.log('item inseted');
            db.clode();
        });
    });
});

router.post('/update', function(req, res, next){
    var iterm={
        course_name: req.body.name,
        credit_hrs: req.body.credit_hrs,
    };

    id: req.body.id,

    mongo.connect(CONNECTION_URL, function(err, de){
        assert.equal(null, err);
        db.collection('course_data').updateetOne({"_id": objectId(id)}, {$set: item}, function(err, result){
            assert.equal(null, err);
            console.log('item updated');
            db.clode();
        });
    });
});

router.post('/delete', function(req, res, next){
    var id = req.body.id;

    mongo.connect(CONNECTION_URL, function(err, de){
        assert.equal(null, err);
        db.collection('course_data').deleteOne({"_id": objectId(id)}, function(err, result){
            assert.equal(null, err);
            console.log('item deleted');
            db.clode();
        });
    });
});

module.exports = routers;