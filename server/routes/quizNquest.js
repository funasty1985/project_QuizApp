let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let qNqController = require('../controllers/quizNquest');


router.get('/quiz',qNqController.displayQuiz);
module.exports = router;