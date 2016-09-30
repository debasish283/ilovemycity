var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('home.ejs', {

    });
});

app.get('/:city',function(req, res){
    res.render('city.ejs',{});
})

app.listen(port, function() {
    console.log('Server started at ' + port);
});