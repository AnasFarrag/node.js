

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000 ;
    Mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel') //created model loading here
    bodyParser = require('body-parser');

//mongoose instance connection url connection

Mongoose.Promise = global.Promise ;
Mongoose.connect('mongodb://localhost/Tododb' , {useNewUrlParser: true});

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

var routes = require('./api/routes/todoListRoutes');
routes(app); //register the route

app.listen(port);

console.log(`todo list restful api started on ${port}`);

