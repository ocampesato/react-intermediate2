var express = require('express');
var app = express();

// handle some routes... 
app.get('/', function(req, res){
  res.send('Hello World');
});

app.get('/hello1', function(req, res){
  res.send('Hello1 ');
});

app.get('/hello2', function(req, res){
  res.send('Hello2 ');
});

app.get('/hello.txt', function(req, res){
  res.send('Hello World Again');
});

app.get('/user/:id', function(req, res){
  var yourid = req.params.id;
  res.send('You send id value: '+yourid);
});

app.get('/user/:id/:role/:dept', function(req, res){
  var userid = req.params.id;
  var deptid = req.params.dept; 
  var role      = req.params.role;
  res.send('id: '+userid+' dept: '+deptid+' role: '+role);
});

app.get('*', function(req, res){
  res.send('Catching everything else');
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

