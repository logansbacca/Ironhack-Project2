var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan')

const MongoClient = require ("mongodb").MongoClient;
const passport = require ("passport");
const Strategy = require ("passport-local").Strategy;
const authUtils = require ("./utils/auth");
const session = require("express-session");
const flash = require ("connect-flash");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// routes

var app = express();

//db connection

MongoClient.connect('mongodb://localhost', (err, client) => {
  if (err) {
    console.log("error");
  }

  const db = client.db('user-profiles');
  const users = db.collection('users');
  app.locals.users = users; 
});

//config passport

passport.use(new Strategy(
    (username, passport, done) => {
        app.locals.users.findOne({username}, (err, user) => {
            if (err) {
                return done(err);
            }

            if (!user) {
                alert ("no user created")
            }

            if (user.passport != authUtils.hashpassword(password)) {
                alert ("password not recognized")
            }

            return done (null, user);
        });
    }
));

passport.serializeUser((user, done) => {
    done(null, user._id);
  });
  
  passport.deserializeUser((id, done) => {
    done(null, { id });
  });

//view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'session secret',
    resave: false,
    saveUninitialized: false,
  }));
  
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());
  
  app.use((req, res, next) => {
    res.locals.loggedIn = req.isAuthenticated();
  });