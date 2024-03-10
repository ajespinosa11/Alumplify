const jobSurv = require('../../model/formAnsPhase1/AnsJob')

const mongoose = require('mongoose')

const singJob = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Schema.Types.ObjectId.IsValid(id)){
        return res.status(404)
    }

    const response = await jobSurv.findById(id)

    if(!response){
        return res.status(404)
    }
    res.status(200).json(response);
}

const allJob = async (req, res) => {
    const response = await jobSurv.find();

    res.status(200).json(response)
}

const addJob = async (req, res) => {

    const {quesAns1,
    quesAns2chk1, quesAns2chk2, quesAns2chk3, quesAns2chk4,
    quesAns2chk5, quesAns2chk6, quesAns2chk7, quesAns2chk8,
    quesAns3,
    quesAns4chk1, quesAns4chk2, quesAns4chk3, quesAns4chk4,
    quesAns4chk5, quesAns4chk6, 
    quesAns5chk1, quesAns5chk2, quesAns5chk3, quesAns5chk4, 
    quesAns5chk5, quesAns5chk6,
    quesAns6,
    quesAns7,
    quesAns8chk1, quesAns8chk2, quesAns8chk3, quesAns8chk4,
    quesAns8chk5, quesAns8chk6, quesAns8chk7, quesAns8chk8,
    quesAns9row1, quesAns9row2, quesAns9row3, quesAns9row4,
    quesAns10,
    quesAns11,
    quesAns12chk1, quesAns12chk2, quesAns12chk3, quesAns12chk4,
    quesAns12chk5, quesAns12chk6, quesAns12chk7,
    quesAns13} = req.body

    try{
        const response = await jobSurv.create({Answer:{
            quesAns1,
            quesAns2:{
                check1: quesAns2chk1,
                check2: quesAns2chk2,
                check3: quesAns2chk3,
                check4: quesAns2chk4,
                check5: quesAns2chk5,
                check6: quesAns2chk6,
                check7: quesAns2chk7,
                check8: quesAns2chk8,
            },
            quesAns3,
            quesAns4:{
                check1: quesAns4chk1,
                check2: quesAns4chk2,
                check3: quesAns4chk3,
                check4: quesAns4chk4,
                check5: quesAns4chk5,
                check6: quesAns4chk6
            },
            quesAns5:{
                check1: quesAns5chk1,
                check2: quesAns5chk2,
                check3: quesAns5chk3,
                check4: quesAns5chk4,
                check5: quesAns5chk5,
                check6: quesAns5chk6
            },
            quesAns6, quesAns7,
            quesAns8:{
                check1: quesAns8chk1,
                check2: quesAns8chk2,
                check3: quesAns8chk3,
                check4: quesAns8chk4,
                check5: quesAns8chk5,
                check6: quesAns8chk6,
                check7: quesAns8chk7,
                check8: quesAns8chk8
            },
            quesAns9:{
                row1: quesAns9row1,
                row2: quesAns9row2,
                row3: quesAns9row3,
                row4: quesAns9row1
            },
            quesAns10, quesAns11,
            quesAns12:{
                check1: quesAns12chk1,
                check2: quesAns12chk2,
                check3: quesAns12chk3,
                check4: quesAns12chk4,
                check5: quesAns12chk5,
                check6: quesAns12chk6,
                check7: quesAns12chk7
            },
            quesAns13
        }});
        res.status(200).json(response)

    }catch(err){
        console.log(err.message)
        return res.status(404).json({error: err.message})
    }
}

const deleteJob = async (res, req) => {
    const {id} = req.params;

    if(!mongoose.Schema.Types.ObjectId.IsValid(id)){
        return res.status(404)
    }
    const response = await jobSurv.findOneAndDelete({ _id: id });

    if(!response){
        return res.status(404)
    }

    res.status(200).json(response)
}

const updateJob = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Schema.Types.ObjectId.IsValid(id)){
        return res.status(404)
    }

    const response = await jobSurv.findOneAndUpdate({ _id: id});


    if(!response){
        res.status(400)
    }

    res.status(200).json(response)
}

module.exports = {
    singJob,
    allJob,
    addJob,
    deleteJob,
    updateJob
}