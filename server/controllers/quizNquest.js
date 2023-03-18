let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let quizModel = require('../models/quiz');
let questModel = require('../models/quest');

module.exports.displayQuiz = (req, res) => {
   
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

  module.exports.processAddQuiz = (req, res, next) => {
    const newQuiz = quizModel({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        description: req.body.description,
        author: req.body.author,
        
    });
    quizModel.create(newQuiz, (err, quiz) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }

        return res.status(200).json({id: quiz._id});
    });
};

const { ObjectId } = require('mongodb');

module.exports.processEditQuiz = (req, res, next) => {
    let id = req.params.id

    let updatedquizModel = quizModel({
        "_id": ObjectId(id),
        "title":  req.body.title,
        "description": req.body.description,
        "author": req.body.author,
        
    });

    quizModel.updateOne({_id: ObjectId(id)}, updatedquizModel, (err) => {
        if(err)
        {
            console.log(err);
            res.status(500).json({ error: err.message });
        }
        else
        {
            // return the updated contact object
            quizModel.findById(id, (err, updatedQuiz) => {
                if (err) {
                    console.log(err);
                    res.status(500).json({ error: err.message });
                } else {
                    res.status(200).json(updatedQuiz);
                }
            });
        }
    });
}



module.exports.displayQuestByQuizId = (req, res) => {
    let id = req.params.id;
    console.log(req.params.id);
    questModel.find({quizId: ObjectId(id)}, (err,questions) => {
        console.log(questions[0]);
        if (err) {
            console.log(err);
            res.status(500).json({ error: err }); 
        }      
            
        else if (questions && questions.length > 0) {
            console.log(questions.lenght);
            return  res.status(200).json(questions);
        }

        else { 
            return res.status(404).json({message:'No such QuizId.'});
        } 
    });

}

module.exports.processAddQuestion = (req, res, next) => {
    console.log("check quest1");
    const newQuest = questModel({
        _id: new mongoose.Types.ObjectId(),
        quizId: req.body.quizId,
        prompt: req.body.prompt,
        options: req.body.options,
        answer: req.body.answer,     
    });
    questModel.create(newQuest, (err, question) => {        
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }

        return res.status(200).json({id: question._id});
    });
};

module.exports.processEditQuestion = (req, res, next) => {
    let id = req.params.id

    let updatedquestModel = questModel({
        "_id": id,
        "quizId": req.body.quizId,
        "prompt": req.body.prompt,
        "options": req.body.options,
        "answer": req.body.answer,
        
    });

    questModel.updateOne({_id: id}, updatedquestModel, (err) => {
        if(err)
        {
            console.log(err);
            res.status(500).json({ error: err.message });
        }
        else
        {
            // return the updated contact object
            questModel.findById(id, (err, updatedQuest) => {
                if (err) {
                    console.log(err);
                    res.status(500).json({ error: err.message });
                } else {
                    console.log(updatedQuest); //**** */
                    res.status(200).json(updatedQuest);
                }
            });
        }
    });
}



module.exports.deleteQuestion = (req, res) => {
    let id = req.params.id;
    console.log(id);


    questModel.remove({_id: ObjectId(id)}, (err) => {
        console.log("check1");
        if (err) {
            console.log(err);
            res.status(500).json({ error: err });
        } else {
            res.status(200).json({ message: 'Successfully deleted questoin with _id: ' +  id });
        }
    });

}





module.exports.deleteQuiz = (req, res) => {
    let id = req.params.id;
    console.log(id);


    const removeQuestions = questModel.remove({ quizId: ObjectId(id) }).exec();
    const removeQuiz = quizModel.remove({ _id: ObjectId(id) }).exec();

    Promise.all([removeQuestions, removeQuiz])
        .then(() => {
            res.status(200).json({message:"QuizID:"+id+"and its questions deleted successfully!"});
            
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err });
        });

    /*
    questModel.find({quizId: ObjectId(id)}, (err,questions) => {
        console.log("check1");
        if (err) {
            console.log(err);
            res.status(500).json({ error: err });
        } else {
            res.status(200).json(questions);//{ message: 'Successfully deleted all questoins with quizID: ' +  quizID });
        }
    });

    quizModel.find({ _id: ObjectId(id)}, (err,quiz) => {
        console.log("check2");
        if (err) {
            console.log(err);
            res.status(500).json({ error: err });
        } else {
            res.status(200).json(quiz);//{ message: 'Successfully deleted a Quiz with quizID: ' +  quizID });
        }
    });

*/



}
