const alumniModel = require('../model/Alumni');


const mongoose = require('mongoose') 

//Get all alumni
const getAlumni = async (req,res) => {
    const alumni = await alumniModel.find();

    res.status(200).json(alumni)
}

//Get single alumni
const getSingleAlumni = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "The specific alumnni was not exist" })
    }

    const alumni = await alumniModel.findById(id);

    if(!alumni){
        return res.status(404).json({ error: "The specific alumnni was not exist" })
    }

    res.status(200).json(alumni);
}

//Create Alumni
const postAlumni = async (req, res) => {
    const {FirstName, MiddleName, LastName, TUP_ID, Course,
         DOB, Sex, Email, YearGrad} = req.body;
    
    try {
        const alumnni = await alumniModel.create({FirstName, MiddleName, LastName, 
            TUP_ID, Course, DOB, Sex, Email, YearGrad})
    }catch(error){
        return res.status(400).json({error: error.message})
    }
}

//Delete Alumni
const delAlumni = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "The specific alumnni was not exist" })
    }

    const alumni = await alumniModel.findOneAndDelete({ _id: id });

    if(!alumni){
        return res.status(404).json({ error: "The specific alumnni was not exist" })
    }
    res.status(200).json(alumni)
}

//Uodate Alumni
const updAlumni = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "The specific alumnni was not exist" })
    }

    const alumni = await alumniModel.findOneAndUpdate({ _id: id });

    if(!alumni){
        return res.status(404).json({ error: "The specific alumnni was not exist" })
    };

    res.status(200).json(alumni);
}

module.exports = {
    getAlumni,
    getSingleAlumni,
    postAlumni,
    delAlumni,
    updAlumni
}

