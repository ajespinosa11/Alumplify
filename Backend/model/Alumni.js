const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const alumni = new Schema ({
    Alumni_ID:{
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    Coordinator_ID: {
        require: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Coordinator'
    },
    Result_ID: {
        require: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Result'
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
    Course: {
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