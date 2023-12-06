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
    Date_Publish: {
        require: true,
        type: Date
    },
    Picture: {
        require: true,
        type: String
    }
});

module.exports = mongoose.model('Event', alumniEvent);