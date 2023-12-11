const alumniModel = require('../model/Alumni');
const coordinatorModel = require('../model/Coordinator')
const resultModel = require('../model/Result');

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
    //Alumni model
    const {Coordinator_ID, FirstName, MiddleName, LastName, TUP_ID, Course,
         DOB, Sex, Email, YearGrad} = req.body; 

    //Rwesult model
    const {Alumni_ID, Is_Phase1, DatePhase1, Is_Phase2, DatePhase2} = req.body
    let coordId
    try {

            //Get Id value from the Coordinator model
            const coordinator = await coordinatorModel.find({})
                .then(getCoord => {
                    if(getCoord.length > 0){
                        coordId = getCoord[0]._id;
                    }
                }).catch(err =>{
                    console.log(err);
                });
            const getId = await coordinatorModel.findOne({ _id: coordId})
            //Create  data with foreign key (Coordinator_ID)
            const alumni = await alumniModel.create({Coordinator_ID: getId._id, FirstName, MiddleName, LastName, 
                TUP_ID, Course, DOB, Sex, Email, YearGrad})

            const result = await resultModel.create({Alumni_ID: alumni._id, Is_Phase1: false, DatePhase1, 
            Is_Phase2: false, DatePhase2})
            
            res.status(200).json(alumni)
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

