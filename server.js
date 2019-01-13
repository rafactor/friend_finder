var express = require('express');
var htmlRouter = require('./app/routing/htmlRoutes');
var apiRouter = require('./app/routing/apiRoutes');
var app = express();
var bodyParser = require('body-parser'); //required for POST
var path = require('path');




var PORT = process.env.PORT || 3000;

app.use(express.urlencoded( {extended: true} ));
app.use(express.json());

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/', htmlRouter) 
app.use('/api', apiRouter)

// START THE SERVER
// =============================================================================

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });