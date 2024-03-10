const ansEmp = require('../../model/formAnsPhase1/AnsEmployee')

const mongoose = require('mongoose')

const singEmp = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Schema.Types.ObjectId.IsValid(id)){
        return res.status(404)
    }

    const response = await ansEmp.findById(id)

    if(!response){
        return res.status(404)
    }
    res.status(200).json(response);
}

const allEmp = async (req, res) => {
    const response = await ansEmp.find();

    res.status(200).json(response)
}

const addEmp = async (req, res) => {

    const {quesAns1, 
        quesAns2chck1, quesAns2chck2, quesAns2chck3,
        quesAns2chck4, quesAns2chck5, quesAns2chck6,
        quesAns2chck7, 
        quesAns3, quesAns4, quesAns5, 
        quesAns6check1, quesAns6check2,
        quesAns6check3, quesAns6check4,
        quesAns6check5, quesAns6check6,
        quesAns6check7, quesAns6check8,
        quesAns6check9, quesAns6check10,
        quesAns6check11, quesAns6check12,
        quesAns6check13, quesAns6check14,
        quesAns6check15, quesAns6check16,
        quesAns6check17, quesAns6check18, 
        quesAns7, quesAns8} = req.body

    try{
        const response = await ansEmp.create({Answer:{
            quesAns1,
            quesAns2:{
                check1: quesAns2chck1,
                check2: quesAns2chck2,
                check3: quesAns2chck3,
                check4: quesAns2chck4,
                check5: quesAns2chck5,
                check6: quesAns2chck6,
                check7: quesAns2chck7,
            },
            quesAns3, quesAns4, quesAns5, quesAns6: {
                check1: quesAns6check1,
                check2: quesAns6check2,
                check3: quesAns6check3,
                check4: quesAns6check4,
                check5: quesAns6check5,
                check6: quesAns6check6,
                check7: quesAns6check7,
                check8: quesAns6check8,
                check9: quesAns6check9,
                check10: quesAns6check10,
                check11: quesAns6check11,
                check12: quesAns6check12,
                check13: quesAns6check13,
                check14: quesAns6check14,
                check15: quesAns6check15,
                check16: quesAns6check16,
                check17: quesAns6check17,
                check18: quesAns6check18,
            },
            quesAns7, quesAns8
        }});
        res.status(200).json(response)

    }catch(err){
        return res.status(404).json({error: err.message})
    }
}

const deleteEmp = async (res, req) => {
    const {id} = req.params;

    if(!mongoose.Schema.Types.ObjectId.IsValid(id)){
        return res.status(404)
    }
    const response = await ansEmp.findOneAndDelete({ _id: id });

    if(!response){
        return res.status(404)
    }

    res.status(200).json(response)
}

const updateEmp = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Schema.Types.ObjectId.IsValid(id)){
        return res.status(404)
    }

    const response = await ansEmp.findOneAndUpdate({ _id: id});


    if(!response){
        res.status(400)
    }

    res.status(200).json(response)
}

module.exports = {
    singEmp,
    allEmp,
    addEmp,
    deleteEmp,
    updateEmp
}