var http = require('http');
var express = require('express');
// 
// config section
// 

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

// allow cors policy
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



//
// web server functionality
// 

app.get('/', function (req, res) {
    console.log("req on root page");
    res.send("<h1>Hello World!</h1>");
})

app.get('/about', function (req, res) {
    res.send("i am arthur")
})

app.listen(8080, function () {
    console.log("server running at localhost:8080");
})

// 
// api functionality
// 
var catalog = [];

app.get('/api/catalog', function (req, res) {
    
    res.json(catalog);
})

app.post('/api/items', function (req, res) {
    console.log('admin wants to save an item');
    var item = req.body;
    console.log(item);
    item.id = catalog.length + 1;
    catalog.push(item);
    res.json(item);
})