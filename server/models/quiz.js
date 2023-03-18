let mongoose = require('mongoose');

// Define the schema for the bcontacts collection
let quizSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    title: String,
    description: String,
    author: String,
}, {
  collection: 'Quiz'
});



module.exports = mongoose.model('Quizs', quizSchema);