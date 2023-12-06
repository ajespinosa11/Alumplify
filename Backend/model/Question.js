const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const surveyQuestion = new Schema ({
    Question_ID:{
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    Survey_ID: {
        require: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Survey'
    },
    QuestionText: {
        require: true,
        type: String
    },
    IsOpenEnded: {
        require: true,
        type: Boolean
    },
    IsMultiChoice: {
        require: true,
        type: Boolean
    }
});

module.exports = mongoose.model('Question', surveyQuestion);