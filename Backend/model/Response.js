const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const alumniResponse = new Schema ({
    Response_ID:{
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    Question_ID: {
        require: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    },
    Result_ID: {
        require: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Result'
    },
    Is_Answer: {
        require: true,
        type: Boolean
    },
    Answer: {
        require: true,
        type: String
    },
    
});

module.exports = mongoose.model('Response', alumniResponse);