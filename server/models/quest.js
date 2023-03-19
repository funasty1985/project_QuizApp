
let mongoose = require('mongoose');


// Define the schema for the customers collection
let questSchema = new mongoose.Schema({
    quizId: mongoose.Types.ObjectId,       //  _id of corresponding quiz
    prompt: String,          //  e.g What is your name
    options: [String],         //  e.g ["Peter","John","Bjork","Tom"] 
    answer: Number,
}, {
  collection: 'Question',
});


module.exports = mongoose.model('Questions', questSchema);