let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let quizModel = require('../models/quiz');

module.exports.displayQuiz = (req, res) => {
    console.log("check1")
    quizModel.find((err, data) => {
      if (err) {
        return res.status(500).json({ error: err });
      }
      else
      {
      console.log(data)
      return res.status(200).json(data);
      }
    });

    
  };