var express = require('express');
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

var app = express();
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);

app.use(express.static("public"));

app.get('/', function(req, res){
  res.render('home');
});

app.get('/teaching-philosophy', function(req, res){
  res.render('teachingPhilosophy');
});

app.get('/cv', function(req, res){
  res.render('cv');
});

app.get('/diversity-philosophy', function(req, res){
  res.render('diversity');
});

app.get('/teaching-materials', function(req, res){
  res.render('materials');
});

app.get('/student-evaluations', function(req, res){
  res.render('evaluations');
});

app.use(function(req, res){
  res.status(404);
  res.render('404');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
