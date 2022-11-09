var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//TODO

//if errors, change all to double quotes

var person=require("./public/data/PersonalData.json");

app.get("/getList", function (req,res){
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(person));
});

app.post("/setProfile", function(req,res){
  //trips[req.body.idx].rating=req.body.rating;
        for(var i = 0; i < person.length; i++){
          if(person[i].id == req.body.userId){
          person[i].username = req.body.username;
        }}
        //person[0].bio = req.body.bio;
    

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(person));
});

//END TODO

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
