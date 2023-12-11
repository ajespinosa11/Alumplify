const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const alumniResult = new Schema ({
    Alumni_ID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Alumni'
    },
    Is_Phase1: {
        require: true,
        type: Boolean
    },
    DatePhase1: {
        require: true,
        type: Date
    },
    Is_Phase2: {
        require: true,
        type: Boolean
    },
    DatePhase2: {
        require: true,
        type: Date
    },
});

module.exports = mongoose.model('Result', alumniResult);