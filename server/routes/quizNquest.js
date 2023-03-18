let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let qNqController = require('../controllers/quizNquest');


router.get('/quiz',qNqController.displayQuiz);
module.exports = router;

// define the question model
let question = require('../controllers/quizNquest');

router.get('/question/:quizId',question.displayQuestion);
router.post('/question/:quizId',question.processAddQuestion);
router.post('/question/:quizId',question.processEditQuestion);
router.get('/question/:quizId',question.deleteQuestion);


module.exports = router;