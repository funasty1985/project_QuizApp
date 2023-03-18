let mongoose = require('mongoose');

// Define the schema for the bcontacts collection
let quizSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
   
    author: String,
}, {
  collection: 'Quiz'
});



module.exports = mongoose.model('Quizs', quizSchema);