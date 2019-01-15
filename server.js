var express = require('express');
var htmlRouter = require('./app/routing/htmlRoutes');
var apiRouter = require('./app/routing/apiRoutes');
var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded( {extended: true} ));
app.use(express.json());

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/', htmlRouter) 
app.use('/api', apiRouter)

// START THE SERVER
// =============================================================================

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });