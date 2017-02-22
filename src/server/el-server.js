'use strict';

// ----------------------------------------------------------------------------------------------------
// config
// ----------------------------------------------------------------------------------------------------
var _ = require('lodash');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var session = require('express-session');
var cors = require('cors');
var app = express();

// ----------------------------------------------------------------------------------------------------
// view engine
// ----------------------------------------------------------------------------------------------------
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '_common/views'));
// ----------------------------------------------------------------------------------------------------

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../../dist')));

// var whitelist = [
//     'https://api.thingplus.net',
// ];
// var corsOptions = {
//     credentials: true,
//     origin: function(origin, callback) {
//         console.log('@origin=', origin);
//         var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
//         callback(null, originIsWhitelisted);
//     }
// };

var corsOptions = {};
app.use(cors(corsOptions));

var api = express.Router();
app.use('/api', api);
require('./router-main')(app, api);
// ----------------------------------------------------------------------------------------------------

var PORT = 8080;
var server = app.listen(PORT, function() {
    console.log('server started to listen : port=' + PORT);
});
