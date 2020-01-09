var express = require('express');
var app = express();

var router = require('./routes/main')(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));


var boardRouter = require('./routes/board');

app.use('/board', boardRouter);


var server = app.listen(8888, function() {
        console.log("Express Server running at http://localhost:8888");
});

