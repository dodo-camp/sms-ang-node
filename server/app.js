var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var socket = require('socket.io');
var apiRouter = require('./routes/api');

var app = express();
var http = require('http').Server(app);

var io = socket(http);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../dist/sms-kisan')));

app.use('/api', apiRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/sms-kisan/index.html'));
});

http.listen(process.env.PORT || 3000, function () {
    console.log('listening', app.settings.env);
});