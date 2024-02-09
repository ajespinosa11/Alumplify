const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const alumniEvent = new Schema ({
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
    Date_Implement: {
        require: true,
        type: Date
    },
    Content: {
        require: true,
        type: String
    },
    Picture: {
        foldId:{
            type: String
        },
        Images: {
            type: Array
        }
    }
});

module.exports = mongoose.model('Event', alumniEvent);