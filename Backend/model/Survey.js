const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const alumniSurvey = new Schema ({
    Survey_ID: {
        require: true,
        type: mongoose.Schema.Types.ObjectId
    },
    Phase: {
        require: true,
        type: Number
    },
});

module.exports = mongoose.model('Survey', alumniSurvey);