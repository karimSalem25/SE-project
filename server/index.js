/*var express = require("express"),
	mongoose = require("mongoose"),
	passport = require("passport"),
	bodyParser = require("body-parser"),
	LocalStrategy = require("passport-local"),
	passportLocalMongoose =
		require("passport-local-mongoose"),
	User = require("./models/user");

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


var app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require("express-session")({
	secret: "Rusty is a dog",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//=====================
// ROUTES
//=====================

// Showing home page
app.get("/", function (req, res) {
	res.render("home");
});

// Showing secret page
app.get("/secret", isLoggedIn, function (req, res) {
	res.render("secret");
});

// Showing register form
app.get("/register", function (req, res) {
	res.render("register");
});

// Handling user signup
app.post("/register", function (req, res) {
	var username = req.body.username
	var password = req.body.password
	User.register(new User({ username: username }),
			password, function (err, user) {
		if (err) {
			console.log(err);
			return res.render("register");
		}

		passport.authenticate("local")(
			req, res, function () {
			res.render("secret");
		});
	});
});

//Showing login form
app.get("/login", function (req, res) {
	res.render("login");
});

//Handling user login
app.post("/login", passport.authenticate("local", {
	successRedirect: "/secret",
	failureRedirect: "/login"
}), function (req, res) {
});

//Handling user logout
app.get("/logout", function (req, res) {
	req.logout();
	res.redirect("/");
});

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect("/login");
}

//reset password
app.get("/reset_password", function (req, res) {
    res.render("reset_password");
});
 

app.post("/reset_password", function (req, res) {
	var username = req.body.username
	var password = req.body.password

	User.register(User({ username: username }),
	password, function (err, user) {
		if (req.isAuthenticated()){
			user.password = password ;
		}
		res.redirect("/login")
		passport.authenticate("local")(
			req, res, function () {
			res.render("secret");
		});
	});
});


app.post("/reset_password", passport.authenticate("local", {
	successRedirect: "/secret",
	failureRedirect: "/login"
}), function (req, res) {
});


const CONNECTION_URL ='mongodb+srv://karimsalem25:ko@25102001@cluster0.e3rym.mongodb.net/database1?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL , {
	    useNewUrlParser:true, useUnifiedTopology:true
	}).then(() => app.listen(PORT, () =>
	console.log('Connection is established and running on port: ' + PORT)
	)).catch((err) => console.log(err.message))
*/
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js'
import gradeRoutes from './routes/grades.js'
import userRoutes from './routes/user.js'
import courseRoutes from './routes/course.js'
import applyRoutes from './routes/apply.js'
import authRoutes from './routes/Auth.js'
const app = express();


app.use(bodyParser.json({limit: "20mb" , extended: "true"}))
app.use(bodyParser.urlencoded({limit: "20mb" , extended: "true"}))

app.use(cors());
app.use('/students' , studentRoutes);
app.use('/grades' , gradeRoutes);
app.use('/users' , userRoutes);
app.use('/course' , courseRoutes);
app.use('/apply' , applyRoutes);
app.use('/Auth', authRoutes);
const CONNECTION_URL = 'mongodb+srv://karimsalem25:ko@25102001@cluster0.e3rym.mongodb.net/database1?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL , {
    useNewUrlParser:true, useUnifiedTopology:true
}).then(() => app.listen(PORT, () =>
console.log('Connection is established and running on port: ' + PORT)
)).catch((err) => console.log(err.message));

mongoose.set('useFindAndModify' , false);

