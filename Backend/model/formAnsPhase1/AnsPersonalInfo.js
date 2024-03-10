const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PersonalInfoAns = new Schema ({

    Answer: {
        quesAns1: {
            type: String,
            require: true
        },
        quesAns2: {
            type: String,
            require: true
        },
        quesAns3: {
            type: String,
            require: true
        },
        quesAns4: {
            type: Number,
            require: true
        },
        quesAns5: {
            type: String,
            require: true
        },
        quesAns6: {
            type: String,
            require: true
        },
        quesAns7: {
            type: Date,
            require: true
        },
        quesAns8: {
            type: String,
            require: true
        },
        quesAns9: {
            type: String,
            require: true
        }
    }
    
}, { timestamps: true })

module.exports = mongoose.model('PersonalInfo', PersonalInfoAns)