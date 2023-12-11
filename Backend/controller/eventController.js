const eventModel = require('../model/Events');
const coordinatorModel = require('../model/Coordinator');
const storyModel = require("../model/Stories");

const mongoose =require('mongoose');

const getAllEvent = async (req, res) => {
    const event = await eventModel.find()

    res.status(200).json(event);
}

const getSingleEvent = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "The specific event was not exist" })
    }

    const event = await eventModel.findById(id)

    if(!event){
        res.status(404).json({ error: "The specific event was not exist" })
    }
    res.status(200).json(event)
}

const postEvent = async (req, res) => {
    const {Coordinator_ID, Title, Date_Publish, Picture} = req.body;
    let coordId;
    try{
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

        const event = await eventModel.create({Coordinator_ID: getId._id, Title, Date_Publish, Picture})
        
        res.status(200).json(event);
    }catch(error){
        return res.status(400).json(error.message);
    }
}

const updEvent = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({ error: "The specific event was not exist" });
    }
    
    const event = await eventModel.findOneAndUpdate({_id: id});

    if(!event){
        res.status(404).json({ error: "The specific event was not exist" });
    }
    res.status(200).json(event);
}

const delEvent = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({ error: "The specific event was not exist" });
    }
    
    const event = await eventModel.findOneAndDelete({_id: id})

    if(!event){
        res.status(404).json({ error: "The specific event was not exist" });
    }
    res.status(200).json(event);
}

const getAllStory = async (req, res) => {
    const event = await storyModel.find()

    res.status(200).json(event);
}

const getSingleStory = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "The specific story was not exist" })
    }

    const event = await storyModel.findById(id)

    if(!event){
        res.status(404).json({ error: "The specific story was not exist" })
    }
    res.status(200).json(event)
}

const postStory = async (req, res) => {
    const {Coordinator_ID, Title, Date_Publish, Picture} = req.body;
    let coordId;
    try{
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

        const event = await eventModel.create({Coordinator_ID: getId._id, Title, Date_Publish, Picture})
        
        res.status(200).json(event);
    }catch(error){
        return res.status(400).json(error.message);
    }
}

const updStory = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({ error: "The specific story was not exist" });
    }
    
    const event = await storyModel.findOneAndUpdate({_id: id});

    if(!event){
        res.status(404).json({ error: "The specific story was not exist" });
    }
    res.status(200).json(event);
}

const delStory = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({ error: "The specific story was not exist" });
    }
    
    const event = await storyModel.findOneAndDelete({_id: id})

    if(!event){
        res.status(404).json({ error: "The specific story was not exist" });
    }
    res.status(200).json(event);
}

module.exports = {
    getAllEvent,
    getSingleEvent,
    postEvent,
    updEvent,
    delEvent,
    getAllStory,
    getSingleStory,
    postStory,
    updStory,
    delStory
}