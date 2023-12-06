const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const surveyQuestion = new Schema ({
    QuestionChoices_ID:{
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    Question_ID: {
        require: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Survey'
    },
    Answer: {
        require: true,
        type: String
    },
});

module.exports = mongoose.model('QuestionChoices ', surveyQuestion);