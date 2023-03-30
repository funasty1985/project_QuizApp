var express = require('express');
var router = express.Router();
let indexControllor = require('../controllers/index')
let path = require('path')

/* GET home page. */
// router.get('/', indexControllor.epic);
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './ui/build/index.html'));
})
module.exports = router;
