// load express module
var express = require("express"); 
// invoke express and store in var app
var app = express();

// PUT THIS ABOVE YOU FOOOL TO MAKE IT WORK!!!
//tell server to use static file to handle requests for static content
app.use(express.static(__dirname + "/static"));

// base route & response
app.get('/', function(request, response){
	res.render("index");
})
//sets location for express ot look for EJS views
app.set('views', __dirname + '/views');
//set view engine so express knows we are using EJS
app.set('view engine', 'ejs');



// tell express to listen to port 8000
app.listen(8000, function(){
	console.log("Listening on port 8000");
})
