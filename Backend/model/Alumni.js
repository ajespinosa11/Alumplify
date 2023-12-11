const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const alumni = new Schema ({
    //1-to-1 relationship
    Coordinator_ID: {
        require: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Coordinator'
    },
    FirstName: {
        require: true,
        type: String
    },
    MiddleName: {
        require: true,
        type: String
    },
    LastName: {
        require: true,
        type: String
    },
    TUP_ID: {
        require: true,
        type: String
    },
    Course: {
        require: true,
        type: String
    },
    DOB : {
        require: true,
        type: Date
    },
    Sex: {
        require: true,
        type: String
    },
    Email: {
        require: true,
        type: String
    },
    YearGrad: {
        require: true,
        type: Number
    }
});

module.exports = mongoose.model('Alumni', alumni);