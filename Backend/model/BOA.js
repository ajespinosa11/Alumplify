const mongoose = require('mongoose')
const DateOnly = require('mongoose-dateonly')(mongoose)

const Schema = mongoose.Schema;

const alumniBoa = new Schema ({
    Coordinator_ID:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Coordinator'
    },
    Title: {
        required: true,
        type: String
    },
    Date_Publish: {
        required: true,
        type: DateOnly
    },
    Author: {
        required: true,
        type: String
    },
    Abstract: {
        required: true,
        type: String
    },
    Img:{
        type: String
    }
});

module.exports = mongoose.model('BOA', alumniBoa);