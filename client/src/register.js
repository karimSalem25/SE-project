var express = require('express');
var router = express.Router();
var mongoo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectId;
var assert = require('assert');
const { mongo } = require('mongoose');

var url='mongodb://localhost/auth_demo_app';

router.get('/', function(req, res, next){
    res.render('/insert');
});

router.get('/show', function(req, res, next){
    mmongoo.connect(url, function(err, db){
        var resultArray = [];
        assert.equal(null, err);
        var cursor = db.collection('students').find();
        cursor.forEach(function(doc, array){
            assert.equal(null, err);
            resultArray.push(doc);
        }, function(){
            db.close();
            res.render('login', {item: resultArry});
        });
    });
});


router.post('/insert', function(req, res, next){
    var iterm={
        name: req.body.name,
        password: req.body.password,
        emai: req.body.email,
    };
    mongo.connect(url, function(err, de){
        assert.equal(null, err);
        db.collection('students').insertOne(item, function(err, result){
            assert.equal(null, err);
            console.log('student added!');
            db.clode();
        });
    });
});

