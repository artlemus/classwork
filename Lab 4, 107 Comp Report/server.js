var http = require("http");
var express = require("express");
//
// config section
//

var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());

// allow cors policy
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// to serve Html
var ejs = require("ejs");
console.log(__dirname);
app.set("views", __dirname + "/public"); // the folder that contains the html
app.engine("html", ejs.renderFile);
app.set("view engine", ejs);

// to server static files
app.use(express.static(__dirname + "/public")); //serve all files from this location
// Database connection settings

var mongoose = require("mongoose");
mongoose.connect(
  "mongodb://ThiIsAPassword:TheRealPassword@cluster0-shard-00-00-euadh.mongodb.net:27017,cluster0-shard-00-01-euadh.mongodb.net:27017,cluster0-shard-00-02-euadh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin"
);
var db = mongoose.connection;

//
// web server functionality
//

app.get("/", function(req, res) {
  res.render("index.html");
});

app.get("/admin", (req, res) => {
  res.render("admin.html");
});

app.get("/about", function(req, res) {
  res.render("about.html");
});

//
// api functionality
//

//this is the model for DB items
var ItemDB;

app.get("/api/items", function(req, res) {
  ItemDB.find({}, function(error, data) {
    if (error) {
      console.log("error reading items");
      res.status(500);
      res.send(error);
    }
    // no error
    res.status(200);
    res.json(data);
  });
});

app.get("/api/items/:name", function(req, res) {
  var name = req.params.name;
  ItemDB.find({ user: name }, function(error, data) {
    if (error) {
      console.log("Error saving object", error);
      res.status(500); // http status 500:internal server error
      res.send(error);
    }
    //no error
    console.log("Object saved");
    res.status(201); //201: created
    res.json(data);
  });
});

app.get("/api/items/priceLowerThan/:price", function(req, res) {
  var val = req.params.price;
  ItemDB.find({ price: { $lte: val } }, function(error, data) {
    if (error) {
      console.log("Error reading items");
      res.status(500);
      res.send(error);
    }

    // no error
    res.status(200);
    res.json(data);
  });
});

app.post("/api/items", function(req, res) {
  var itemForMongo = ItemDB(req.body);
  itemForMongo.save(function(error, savedItem) {
    if (error) {
      console.log("Error saving object", error);
      res.status(500); // http status 500:internal server error
      res.send(error);
    }
    //no error
    console.log("Object saved");
    res.status(201); //201: created
    res.json(savedItem);
  });
});

// start the server and DB check connection //

db.on("open", function() {
  console.log("yeet yeet,connected");
  var itemSchema = mongoose.Schema({
    code: String,
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    user: String
  });

  // create obj constructor
  ItemDB = mongoose.model("itemsCH7", itemSchema);
});

db.on("error", function(details) {
  console.log("error:DB connection error");
  console.log("error details: " + details);
});

app.listen(8080, function() {
  console.log("server running at localhost:8080");
});
