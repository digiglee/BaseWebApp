var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname));
// app.use(express.static(path.join(__dirname, 'public')));


// views is directory for all template files
app.set('views', __dirname + '/html');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/about', function(request, response) {
  response.render('pages/about');
});
app.get('/projects', function(request, response) {
  response.render('pages/projects');
});
app.get('/contact', function(request, response) {
  response.render('pages/contact');
});
app.get('*', function(request, response) {
  response.render('index.html');
});



app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});



// This file is what handles incoming requests and
// serves files to the browser, or executes server-side code
