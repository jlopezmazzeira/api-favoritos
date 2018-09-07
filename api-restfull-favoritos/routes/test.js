'use strict'

var express = require('express');
var TestController = require('../controllers/test');
var api = express.Router();

api.get('/test', TestController.test);
api.get('/prueba/:nombre', TestController.prueba);
api.get('/opcional/:nombre?', TestController.opcional);

module.exports = api;
