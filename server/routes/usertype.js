const bcrypt = require('bcrypt');
const { User, validate } = require('../models/user');
const express = require('express');
const router = express.Router();
var mongoo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectId;
var assert = require('assert');
const { mongo } = require('mongoose');

router.get('/', function(req, res, next){
    res.render('/usertype');
});

router.post('/isStudent', async (req, res) => {
    // First Validate The Request
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }})
    router.post('/is_student', function(req, res, next){
        var id = req.body.id;
    
        mongo.connect(CONNECTION_URL, function(err, de){
            assert.equal(null, err);
            db.collection('course_data').find({"_id": objectId(id)}, function(err, result){
                assert.equal(null, err);
                console.log('item deleted');
                db.clode();
            });
        });
    });
    
    