//Requires
var express = require('express');
var mongoose = require('mongoose');

//Initialize variables
var app = express();

//db connection
mongoose.connection.openUri('mongodb://localhost:27017/adminPro', (err, res) => {
    if (err) throw err;
    console.log('BD online');

});

//Routes
app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        message: 'successful'
    });
});

//listen
app.listen(3000, () => {
    console.log('Express server puerto 3000 online');
});