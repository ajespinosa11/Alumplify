const boaModel = require('../model/BOA');
const coordinatorModel = require('../model/Coordinator')

const mongoose = require('mongoose');
const DateOnly = require('mongoose-dateonly')(mongoose)

const allBoa = async (req, res) => {
    const BOA = await boaModel.find();

    res.status(200).json(BOA);
}

const singleBoa = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json("Article not existed")
    }

    const BOA = await boaModel.findById(id);

    if(!BOA){
        res.status(400).json("Article not existed")
    }
    
    res.status(200).json(BOA)
}

const addBOA = async (req, res) => {
    
    const {Title, Date_Publish, Author, Abstract, imgName} = req.body;
    let CoordId;
    try{
        const coordinator = await coordinatorModel.find({})
            .then(getCoord =>{
                if(getCoord.length > 0){
                    CoordId = getCoord[0]._id;
                }
            }).catch(err => {
                console.log(err);
            })
        const getId = await coordinatorModel.findOne({ _id: CoordId })

        const BOA = await boaModel.create({Coordinator_ID: getId._id, Title, 
            Date_Publish, Author, Abstract, Img: imgName})

        res.status(200).json(BOA)
    }catch(err){
        res.status(400).json({error: err.message});
    }
}

const updBoa = async (req, res) => {
    const {id} = req.params
    console.log(req.body.Img)
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json("Article not existed")
    }
    
    const BOA = await boaModel.findOneAndUpdate({ _id: id}, {
        ...req.body
    });

    if(!BOA) {
        res.status(400).json("Article not existed")
    }

    res.status(200).json(BOA);

}

const delBoa = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json("Article not existed")
    }
    
    const BOA = await boaModel.findOneAndDelete({ _id: id});

    if(!BOA) {
        res.status(400).json("Article not existed")
    }

    res.status(200).json(BOA);
}

module.exports = {
    allBoa,
    singleBoa,
    addBOA,
    updBoa,
    delBoa
}