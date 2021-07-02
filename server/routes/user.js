/*const bcrypt = require('bcrypt');
const { User, validate } = require('../models/user');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    // First Validate The Request
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    // Check if this user already exisits
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).send('That user already exisits!');
    } else {
        // Insert the new user if they do not exist yet
        user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();
        res.send(user);
    }
});

module.exports = router; 
 
 */
import express from 'express'
import { getUsers, createUser, deleteUser} from '../controllers/user.js';
import user from '../models/user.js'


const router = express.Router();

router.get('/', (req,res)=> {              
user.find()

.then((user)=> res.json(user));



});
router.post('/', (req,res)=>{

    const newUser = new user({
        UserName: req.body.UserName,
        Password : req.body.Password,
        role: req.body.role
      });
      newUser.save().then((user) => res.json(user))
});
router.delete('/:idd', deleteUser);



//
export default router;