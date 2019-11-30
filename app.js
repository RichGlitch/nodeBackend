//Requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//Initialize variables
var app = express();

//body parser

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//import routes
var appRoutes = require('./routes/app');
var userRoutes = require('./routes/user');

//db connection
mongoose.connect //.connection.openUri
    ('mongodb://localhost:27017/AdminPro', (err, res) => {
        if (err) throw err;
        console.log('BD online');

    });

//Routes
app.use('/user', userRoutes);
app.use('/', appRoutes);

//listen
app.listen(3000, () => {
    console.log('Express server puerto 3000 online');
});