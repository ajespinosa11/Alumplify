const AnsPersonInfo = require('../../model/formAnsPhase1/AnsPersonalInfo')

const mongoose = require('mongoose');

const singPers = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Schema.Types.ObjectId.IsValid(id)){
        return res.status(404)
    }

    const personInf = await AnsPersonInfo.findById(id)

    if(!personInf){
        return res.status(404)
    }
    res.status(200).json(personInf);
}

const allPers = async (req, res) => {
    const personInf = await AnsPersonInfo.find();

    res.status(200).json(personInf)
}

const addPers = async (req, res) => {

    const {quesAns1, quesAns2, quesAns3, quesAns4, 
        quesAns5, quesAns6, quesAns7, quesAns8, quesAns9} = req.body

    try{
        const personInf = await AnsPersonInfo.create({Answer:{
            quesAns1, quesAns2, quesAns3, quesAns4, quesAns5,
            quesAns6, quesAns7, quesAns8, quesAns9
        }});
        res.status(200).json(personInf)

    }catch(err){
        return res.status(404).json({error: err.message})
    }
}

const deletePers = async (res, req) => {
    const {id} = req.params;

    if(!mongoose.Schema.Types.ObjectId.IsValid(id)){
        return res.status(404)
    }
    const personInf = await AnsPersonInfo.findOneAndDelete({ _id: id });

    if(!personInf){
        return res.status(404)
    }

    res.status(200).json(personInf)
}

const updatePers = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Schema.Types.ObjectId.IsValid(id)){
        return res.status(404)
    }

    const personInf = await AnsPersonInfo.findOneAndUpdate({ _id: id});


    if(!personInf){
        res.status(400)
    }

    res.status(200).json(personInf)
}

module.exports = {
    singPers,
    allPers,
    addPers,
    deletePers,
    updatePers
}