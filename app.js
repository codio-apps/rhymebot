/* jshint node: true, devel: true */
'use strict';

const
  bodyParser = require('body-parser'),
  config = require('config'),
  crypto = require('crypto'),
  express = require('express'),
  https = require('https'),
  request = require('request');



  var app = express();
  app.get('/', function (req, res) {
    res.send('Hello World!');
  });
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
