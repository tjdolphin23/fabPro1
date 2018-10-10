
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var methodOverride  = require("method-override");


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));






//========================
// LOCAL PORT
//========================
var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});