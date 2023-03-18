let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let quizModel = require('../models/quiz');

module.exports.displayQuiz = (req, res) => {
    console.log("check1");
    quizModel.find((err, data) => {
      if (err) {
        return res.status(500).json({ error: err });
      }
      else
      {
      console.log(data)
      return res.status(200).json({ data });
      }
    });

    
  };

let questionModel = require('../models/quest');

  
module.exports.displayQuestion = (req, res) => {
    
    let quizId = req.params.quizId;
    console.log(quizId);
    questionModel.find({quizId:quizId} ,(err, question) => {
      if (err) {
        return res.status(500).json({ error: err });
      }
      else if(!question){ 
        return res.status(404).json('No such quiz.');
      }
      {
  
      return res.status(200).json({ question });
      }
    });

  };



module.exports.processAddQuestion = (req, res) => {


    let newQuestion = new questionModel({
      _id: new mongoose.Types.ObjectId(),
      quizId: quizId,
      prompt: req.body.prompt,  
      options: req.body.options,
      answer: req.body.answer,  
    });

    questionModel.create(newQuestion,(err,question) => {
      if (err) {
        return res.status(500).json({ error: err });
      }
      return res.status(200).json(question._id);
    });
  };  
  
module.exports.processEditQuestion = (req, res) => {
  let id = req.params.id; 

  let updatedQuestion = questionModel({
    _id: id,
    quizId: req.params.quizId,
    prompt: req.body.prompt,  
    options: req.body.options,
    answer: req.body.answer, 
  });

  questionModel.updateOne({_id: id},updatedQuestion,(err) => {
  if (err) {
    return res.status(500).json({ error: err });
  }
  return res.status(200).json(updatedQuestion);
});
};  



module.exports.deleteQuestion = (req, res, next) => {
    let id = req.params.id;

    questionModel.remove({_id: id}, (err) => {
        if(err)
        {
          console.log(err);
          return res.status(500).json({ error: err });
        }
        else
        {
          return res.status(200).json('Question deleted successfully');
        }
    });
}