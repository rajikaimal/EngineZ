//var http = require('http');
var express = require('express');
var app = express();
var ntl = require('./enginez.js')(app);

app.set('views', './views'); // specify the views directory
app.set('view engine', 'enz'); // register the template engine

app.get('/',function(req,res){
	res.render('index', { title : 'Hello' , message : 'Hello there'});
});

app.listen(3000,function(){
	console.log('Server listening');
})

