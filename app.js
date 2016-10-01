var express = require('express');
var app = express();
var router = require('./routes/routes.js');

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', router.homeFn);

app.get('/:city', router.cityFn);

app.listen(port, function() {
    console.log('Server started at ' + port);
});