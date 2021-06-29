var express = require("express"),
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
const CONNECTION_URL ='mongodb+srv://karimsalem25:ko@25102001@cluster0.e3rym.mongodb.net/database1?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_URL , {
	    useNewUrlParser:true, useUnifiedTopology:true
	}).then(() => app.listen(PORT, () =>
	console.log('Connection is established and running on port: ' + PORT)
	)).catch((err) => console.log(err.message));

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

    var uname = document.getElementById("name").value;
    var oldP = document.getElementById("old_psw").value;
    var newP = document.getElementById("new_psw").value;

    User.register(User({ username: uname }),
          password, function (err, user) {
        if (user.username == uname && user.password == oldP) {
            user.password = newP
            return res.render("secret");
        }
    });
});


var port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log("Server Has Started!");
});
