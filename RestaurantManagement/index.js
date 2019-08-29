const express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Method", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    
});



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const { MENU_TYPES, MENU , custemer } = require('./model/db');
//menu type
const menuTypeCtrl = require('./controller/MENU_TYPES');
app.use('/menu-type', menuTypeCtrl);
//menu
const menuCtrl = require('./controller/MENU');
app.use('/menu', menuCtrl);


app.use((req, res) => {
    res.status(404).send('Not found!');
});



var server = app.listen(8081, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Server is running at http://${host}:${port}`);
});