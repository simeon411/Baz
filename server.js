// dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

// starts the express app
var app = express();
var port = process.env.PORT || 8080;

// serves static content for the app from the "public" directory 
app.use(express.static("public"));

// sets up the express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// sets up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// imports routes and give the server access to them
// var routes = require("./controllers/barter_controller.js");
// app.use("/", routes);

app.listen(port, function() {
  console.log("App listening on PORT: " + port);
});