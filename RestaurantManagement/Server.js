var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use('/img',express.static(__dirname+'/img'));

app.use(function (req, res, next) {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Headers', '*');
   res.header('Access-Control-Allow-Methods', '*');
   next();


});




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.post('./testJon', function(req,res){
   console.log(req,res);
});

var employer = require('./controller/EmployerController');
app.use('/employer',employer);

var menu = require('./controller/MENU');
app.use('/menu',employer);

var menu_types = require('./controller/MENU_TYPES');
app.use('/menu-types',employer);

var employer = require('./controller/materials');
app.use('/materials',employer);



app.get('/' ,function (req,res) {
  res.send('Hello')
})

app.get('/contact/:id/send/text' ,function (req,res) {
   res.send('Student have id: '+req.params.id + '  content : '+req.params.text)
})


var server = app.listen(8082, function(){
   var host = server.address().address
   var port = server.address.port
   console.log("Server is http://8082"+host + port)
})