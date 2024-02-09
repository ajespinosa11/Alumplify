const mongoose = require('mongoose')

const Schema = mongoose.Schema

const jobSchema = new Schema ({
    Answer:{
        quesAns1:{
            type: Boolean,
            require: true
        },
        quesAns2:{
            check1: {
                type: Boolean
            },
            check2: {
                type: Boolean
            },
            check3: {
                type: Boolean
            },
            check4: {
                type: Boolean
            },
            check5: {
                type: Boolean
            },
            check6: {
                type: Boolean
            },
            check7: {
                type: Boolean
            },
            check8: {
                type: Boolean
            },
        },
        quesAns3:{
            type: Boolean,
            require: true
        },
        quesAns4:{
            check1: {
                type: Boolean
            },
            check2: {
                type: Boolean
            },
            check3: {
                type: Boolean
            },
            check4: {
                type: Boolean
            },
            check5: {
                type: Boolean
            },
            check6: {
                type: Boolean
            }
        },
        quesAns5:{
            check1: {
                type: Boolean
            },
            check2: {
                type: Boolean
            },
            check3: {
                type: Boolean
            },
            check4: {
                type: Boolean
            },
            check5: {
                type: Boolean
            },
            check6: {
                type: Boolean
            }
        },
        quesAns6:{
        type: String
        },
        quesAns7:{
        type: String
        },
        quesAns8:{
            check1: {
                type: Boolean
            },
            check2: {
                type: Boolean
            },
            check3: {
                type: Boolean
            },
            check4: {
                type: Boolean
            },
            check5: {
                type: Boolean
            },
            check6: {
                type: Boolean
            },
            check7: {
                type: Boolean
            }
        },
        quesAns9:{
            row1: {
                type: String,
                require: true
            },
            row2: {
                type: String,
                require: true

            },
            row3: {
                type: String,
                require: true

            },
            row4: {
                type: String,
                require: true
            }
        },
        quesAns10:{
            type: String,
            require: true
        },
        quesAns11:{
            type: Boolean,
            require: true
        },
        quesAns12:{
            check1: {
                type: Boolean
            },
            check2: {
                type: Boolean
            },
            check3: {
                type: Boolean
            },
            check4: {
                type: Boolean
            },
            check5: {
                type: Boolean
            },
            check6: {
                type: Boolean
            },
            check7: {
                type: Boolean
            }
        },
        quesAns13:{
            type: String,
            require: true
        }
    }
})

module.exports = mongoose.model('Job', jobSchema)