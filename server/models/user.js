/*const express               =  require('express');
const mongoose = require("mongoose");

const passportLocalMongoose = require("passport-local-mongoose");
const UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    phone:Number,
    telephone:Number,
    type:String
}) ;
UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User",UserSchema);*/
import mongoose from 'mongoose'; 
const UserSchema = mongoose.Schema({
    FirstName: String,
    LastName: String, 
    Email: String,
    UserName: String, 
    Password: String, 
    role:{ 
        type:String,
        enum:  ['student','admin','ta'],
    required:true},
    
}); 

const user= mongoose.model('user', UserSchema);
export default user;