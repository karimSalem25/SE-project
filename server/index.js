import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js'

const app = express();


app.use(bodyParser.json({limit: "20mb" , extended: "true"}))
app.use(bodyParser.urlencoded({limit: "20mb" , extended: "true"}))

app.use(cors());
app.use('/students' , studentRoutes);

const CONNECTION_URL ='mongodb+srv://karimsalem25:ko25102001@cluster0.e3rym.mongodb.net/database1?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL , {
    useNewUrlParser:true, useUnifiedTopology:true
}).then(() => app.listen(PORT, () =>
console.log('Connection is established and running on port: ' + PORT)
)).catch((err) => console.log(err.message));

mongoose.set('useFindAndModify' , false);

var passport = require("passport"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose =
        require("passport-local-mongoose"),
    User = require("./models/user");

const app = express()
app.set('view-engine', 'ejs')
var Schema = mongoose.Schema;


var UserSchema = new Schema ({})


UserSchema.methods.authenticate = function(password) {
  //implementation code goes here
}

//mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect("mongodb+srv://Shahenda Magdy:shosho1942001@cluster0.zf4ak.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

app.use(express.urlencoded({extended: false}))
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
app.get('/',(req,res) => {
    res.render('f.ejs')
})
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/login");
}
app.get("/secret", isLoggedIn, function (req, res) {
    res.render("secret");
});
 
app.get('/register',(req,res) => {
    res.render('register.ejs')
})

app.post("/register", function (req, res) {
    var username = req.body.username
    var password = req.body.password
    var email = req.body.email
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
app.get('/login',(req,res) => {
    res.render('login.ejs')
})
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function (req, res) {
});
