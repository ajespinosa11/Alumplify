const responseModel = require('../model/Response');
const resultModel = require('../model/Result');

const mongoose = require('mongoose');

const singleResult = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Schema.Types.ObjectId.IsValid(id)){
        return res.status(404)
    }

    const result = await resultModel.findById(id)

    if(!result){
        return res.status(404)
    }
    res.status(200).json(result);
}

const deleteResult = async (res, req) => {
    const {id} = req.params;

    if(!mongoose.Schema.Types.ObjectId.IsValid(id)){
        return res.status(404)
    }
    const result = await resultModel.findOneAndDelete({ _id: id });

    if(!result){
        return res.status(404)
    }

    res.status(200).json(result)
}

const updateResult = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Schema.Types.ObjectId.IsValid(id)){
        return res.status(404)
    }
    const result = await resultModel.findOneAndUpdate({ _id: id});

    if(!result){
        res.status(400)
    }

    res.status(200).json(result)
}

const singleResponse = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Schema.Types.ObjectId.IsValid(id)){
        return res.status(404)
    }

    const response = await responseModel.findById(id)

    if(!response){
        return res.status(404)
    }
    res.status(200).json(response);
}

const allResponse = async (req, res) => {
    const response = await responseModel.find();

    res.status(200).json(response)
}

const addResponse = async (req, res) => {

    const {Is_Answer, Answer} = req.body

    try{
        const response = await responseModel.create({Is_Answer, Answer});
    }catch(error){
        return res.status(404).json({error: error.message})
    }
}

const deleteResponse = async (res, req) => {
    const {id} = req.params;

    if(!mongoose.Schema.Types.ObjectId.IsValid(id)){
        return res.status(404)
    }
    const response = await responseModel.findOneAndDelete({ _id: id });

    if(!response){
        return res.status(404)
    }

    res.status(200).json(response)
}

const updateResponse = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Schema.Types.ObjectId.IsValid(id)){
        return res.status(404)
    }

    const response = await responsetModel.findOneAndUpdate({ _id: id});


    if(!response){
        res.status(400)
    }

    res.status(200).json(response)
}

module.exports = {
    singleResult,
    deleteResult,
    updateResult,
    singleResponse,
    addResponse,
    deleteResponse,
    updateResponse,
    allResponse
}