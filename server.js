var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
//var config = require('./config');
// var passport = require('passport');

var app = express();

// mongoose.connect(config.database,function(err){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log("connected to database");
// 	}
// });


var port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// var api = require('./app/route/api')(app, express);
// app.use('/api',api);

app.use(express.static(__dirname + '/twoWayExpenditureTracking'));

app.get('/home',function(req,res){
	res.sendFile(__dirname + '/twoWayExpenditureTracking/static/html_templates/index.html');
});

// app.listen(config.port, function(err){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log("Server is listening on 4000");
// 	}
// });

app.listen(port, function(){
	console.log("listening on port" +port);	

});
