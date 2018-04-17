var express = require("express"); //downloaded
var bodyParser= require("body-parser"); //downloaded
var path = require ("path");  //A core module...no need to instilation required

var app = express();

var PORT= 3000


app.listen(PORT, function(){ //listens on a port 
    console.log("Server is listening on Port " + PORT)
})

