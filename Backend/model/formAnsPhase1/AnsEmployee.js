const mongoose = require('mongoose')

const Schema = mongoose.Schema

const empSchemaAns = new Schema ({
    Answer: {
        quesAns1:{
            type: String,
            require: true
        },
        quesAns2:{
            check1:{
                type: Boolean
            },
            check2:{
                type: Boolean
            },
            check3:{
                type: Boolean
            },
            check4:{
                type: Boolean
            },
            check5:{
                type: Boolean
            },
            check6:{
                type: Boolean
            },
            check7:{
                type: Boolean
            },
        },
        quesAns3: {
            type: String,
            default: ''
        },
        quesAns4: {
            type: String,
            default: ''
        },
        quesAns5: {
            type: String,
            require: true
        },
        quesAns6: {
            check1:{
                type: Boolean
            },
            check2:{
                type: Boolean
            },
            check3:{
                type: Boolean
            },
            check4:{
                type: Boolean
            },
            check5:{
                type: Boolean
            },
            check6:{
                type: Boolean
            },
            check7:{
                type: Boolean
            },
            check8:{
                type: Boolean
            },
            check9:{
                type: Boolean
            },
            check10:{
                type: Boolean
            },
            check11:{
                type: Boolean
            },
            check12:{
                type: Boolean
            },
            check13:{
                type: Boolean
            },
            check14:{
                type: Boolean
            },
            check15:{
                type: Boolean
            },
            check16:{
                type: Boolean
            },
            check17:{
                type: Boolean
            },
            check18:{
                type: Boolean
            },
        },
        quesAns7: {
            type: String,
            requre: true
        },
        quesAns8: {
            type: String,
            requre: true
        }
    }
    
})

module.exports = mongoose.model('Employee', empSchemaAns)