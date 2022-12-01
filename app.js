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



//UPDATE


app.get("/getList", function (req,res){
  res.setHeader("Content-Type", "application/json");
 

  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";
  
  MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("PersonalDataDB");
    dbo.collection("PersonalData").find({}).toArray(function(err, result){
      if (err) throw err;
      console.log(result);
      res.end(JSON.stringify(result));
      db.close();
    });
  });

});

app.get("/getTheCart", function (req,res){
  res.setHeader("Content-Type", "application/json");
 

  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";
  
  MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("CartDB");
    dbo.collection("Cart").find({}).toArray(function(err, result){
      if (err) throw err;
      console.log(result);
      res.end(JSON.stringify(result));
      db.close();
    });
  });

});

app.post("/setProfile", function(req,res){

  res.setHeader("Content-Type", "application/json");
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";

  MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("PersonalDataDB");
    var myquery = {id: req.body.userId};
    var newvalues = {$set: {username: req.body.username}};
  dbo.collection("PersonalData").updateOne(myquery, newvalues, function(err, res){
    if (err) throw err;
    console.log("1 document updated");
    //res.end(JSON.stringify(res));
    db.close();
  });
  });
  

});

app.post("/setUserCart", function(req,res){

  res.setHeader("Content-Type", "application/json");
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";

  MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("CartDB");
    var myquery = {id: req.body.userId};
    var newvalues = {$set: {item:req.body.userItem}};
  dbo.collection("Cart").updateOne(myquery, newvalues, function(err, res){
    if (err) throw err;
    console.log("1 document updated");
    //res.end(JSON.stringify(res));
    db.close();
  });
  });
  

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
