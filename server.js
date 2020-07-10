const express = require('express');
const app = express();

const router = require('./routes/main')(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

const server = app.listen(8888, function() {
        console.log("Express Server running at http://localhost:8888");
});

