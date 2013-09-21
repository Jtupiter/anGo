var express = require('express'),
    mongojs = require('mongojs'),
    app = express(),
    server = require('http').createServer(app);

server.listen(process.env.PORT || 5000);

app.use(express.bodyParser());
app.use(express.static(__dirname + '/web'));

var mongoUrl = process.env.MONGOHQ_URL || 'mongodb://localhost';
var db = mongojs.connect(mongoUrl);

app.get('/', function(req, res){
    res.sendfile(__dirname + '/index.html');
});

app.get('/events/', function(req, res){
	db.events.find({}, function(err, groups){
        res.send(events);
    });
});