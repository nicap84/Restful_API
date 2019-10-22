var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//var contacts = require('./modules/contacts');
//var contacts = require ('./models/contacs');
var url = require ('url');
//TODO: read cors documentation
var cors = require('cors');

var app = express();
app.config = require('./config.js');
var dataService = require ('./modules/contactdataservice');
var mongoose = require('mongoose');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
//////////////////////////////////////////////////////////////////////////////////////////

mongoose.connect(app.config.MONGO_CONNSTRING);

const contactSchema = new mongoose.Schema ({
  primarycontactnumber: {type: String, index:{unique: true}},
  firstname: String,
  lastname: String,
  title: String,
  company: String,
  jobtitle: String,
  othercontactnumbers: [String],
  primarymailadress: String,
  emailadresses: [String],
  groups: [String]
});

const Contact = mongoose.model('Contact', contactSchema);

app.get('/contacts/:number', function (request, response){
  console.log(request.url + ' : querying for ' + request.params.number);
  dataService.findByNumber (Contact , request.params.number, response);
});

/*app.post('/contacts', function (request, response){
  dataService.update(contact, request.body, repsonse);
});

app.put('/contacts', function (request, response){
  dataService.create(contact, request.body, response);
});

app.delete('/contacts/:primarycontactnumber', function (request, response){
  dataService.remove(contact, request.param.primarycontactnumber, response);
});*/

app.get('/contacts', function (request, response){
  console.log ('listing all contacts with ' + request.params.key + '=' + request.params.value);
  dataService.list(Contact, response);
});

//////////////////////////////////////////////////////////////////////////////////////////

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
