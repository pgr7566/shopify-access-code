'use strict';
const express = require('express');
const router = express.Router();
const ACcontroller =require('../controllers/ACcontroller.js');


router.post('/getAccesscode',ACcontroller.getAccesscode);

module.exports =router;