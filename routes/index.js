'use strict';

var express = require('express');
var router = express.Router();
var HomeController = require('../controller/home');

var homeController = new HomeController();
router.get('/', homeController.index);
router.post('/', homeController.delete);
module.exports = router;
