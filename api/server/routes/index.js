var express = require('express');
var router = express.Router();
let indexControllor = require('../controllers/index')

/* GET home page. */
router.get('/', indexControllor.epic);

module.exports = router;
