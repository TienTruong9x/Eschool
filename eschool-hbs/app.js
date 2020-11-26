var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var passport = require("passport");
var flash = require("connect-flash");
var logger = require("morgan");
var hbs = require("hbs");
var connectDB = require("./app/config/connect");
var helpers = require("./app/helpers/index");

var app = express();

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// view engine setup
hbs.registerPartials(__dirname + "/views/partials");
//view helper
helpers.setHelper(hbs);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//Method overight
var methodOverride = require("method-override");
app.use(methodOverride("_method"));

hbs.registerHelper();

//authentication
app.use(
  session({
    secret: "adsa897adsa98bs",
    resave: false,
    saveUninitialized: false,
  })
);
app.use((req, res, next) => {
  res.locals.username_sess = req.session.username_sess;
  next();
});

//initRoute
var initRoutes = require("./routes/index");
initRoutes(app);

//connect Database
connectDB.connect();

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
