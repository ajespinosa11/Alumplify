const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const alumniStory = new Schema ({
    Event_ID: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
    },
    Coordinator_ID:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'Coordinator'
    },
    Title: {
        require: true,
        type: String
    },
    Date_Publish: {
        require: true,
        type: Date
    },
    Author:{
        require: true,
        type: String
    },
    Short_Desc:{
        require: true,
        type: String
    },
    Content:{
        Links:{
            default: null,
            type: String
        },
        Self:{
            default: null,
            type: String
        }
    },
    Picture: {
        type: String
    }
});

module.exports = mongoose.model('Story', alumniStory);