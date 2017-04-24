//https://scotch.io/tutorials/node-and-angular-to-do-app-application-organization-and-structure

// set up ======================================================================
var express  = require('express');
var app      = express();
var port		 = 8081;
// load the routes
require('./routes.js')(app);

app.use(express.static(__dirname + '/public'));


// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);