const educSurv = require('../../model/formAnsPhase1/AnsEducation')

const mongoose = require('mongoose')

const singEduc = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Schema.Types.ObjectId.IsValid(id)){
        return res.status(404)
    }

    const personInf = await educSurv.findById(id)

    if(!personInf){
        return res.status(404)
    }
    res.status(200).json(personInf);
}

const allEduc = async (req, res) => {
    const personInf = await educSurv.find();

    res.status(200).json(personInf)
}

const addEduc = async (req, res) => {

    const {quesAns1, quesAns2, quesAns3, 
        quesAns4r1Chk1, quesAns4r1Chk2, quesAns4r2Chk1, quesAns4r2Chk2,
        quesAns4r3Chk1, quesAns4r3Chk2, quesAns4r4Chk1, quesAns4r4Chk2,
        quesAns4r5Chk1, quesAns4r5Chk2, quesAns4r6Chk1, quesAns4r6Chk2,
        quesAns4r7Chk1, quesAns4r7Chk2, quesAns4r8Chk1, quesAns4r8Chk2,
        quesAns4r9Chk1, quesAns4r9Chk2, quesAns4r10Chk1,
        quesAns4r10Chk2, quesAns4r11Chk1, quesAns4r11Chk2, quesAns4r12Chk1,
        quesAns4r12Chk2, quesAns4r13Chk1, quesAns4r13Chk2, quesAns4r14Chk1,
        quesAns4r14Chk2,
        quesAns5, quesAns6, 
        quesAns7Chk1, quesAns7Chk2, quesAns7Chk3 } = req.body

    try{
        const personInf = await educSurv.create({Answer:{
            quesAns1, quesAns2, quesAns3, 
            quesAns4: {
                row1: {
                    check1: quesAns4r1Chk1,
                    check2: quesAns4r1Chk2,
                },
                row2: {
                    check1: quesAns4r2Chk1,
                    check2: quesAns4r2Chk2,
                },
                row3: {
                    check1: quesAns4r3Chk1,
                    check2: quesAns4r3Chk2,
                },
                row4: {
                    check1: quesAns4r4Chk1,
                    check2: quesAns4r4Chk2,
                },
                row5: {
                    check1: quesAns4r5Chk1,
                    check2: quesAns4r5Chk2,
                },
                row6: {
                    check1: quesAns4r6Chk1,
                    check2: quesAns4r6Chk2,
                },
                row7: {
                    check1: quesAns4r7Chk1,
                    check2: quesAns4r7Chk2,
                },
                row8: {
                    check1: quesAns4r8Chk1,
                    check2: quesAns4r8Chk2,
                },
                row9: {
                    check1: quesAns4r9Chk1,
                    check2: quesAns4r9Chk2,
                },
                row10: {
                    check1: quesAns4r10Chk1,
                    check2: quesAns4r10Chk2,
                },
                row11: {
                    check1: quesAns4r11Chk1,
                    check2: quesAns4r11Chk2,
                },
                row12: {
                    check1: quesAns4r12Chk1,
                    check2: quesAns4r12Chk2,
                },
                row13: {
                    check1: quesAns4r13Chk1,
                    check2: quesAns4r13Chk2,
                },
                row14: {
                    check1: quesAns4r14Chk1,
                    check2: quesAns4r14Chk2,
                }
            }, 
            quesAns5, quesAns6, 
            quesAns7: {
                checkBox1: quesAns7Chk1,
                checkBox2: quesAns7Chk2,
                checkBox3: quesAns7Chk3
            }
            
        }});
        res.status(200).json(personInf)

    }catch(err){
        console.log(err)
        return res.status(404).json({error: err.message})
    }
}

const deleteEduc = async (res, req) => {
    const {id} = req.params;

    if(!mongoose.Schema.Types.ObjectId.IsValid(id)){
        return res.status(404)
    }
    const personInf = await educSurv.findOneAndDelete({ _id: id });

    if(!personInf){
        return res.status(404)
    }

    res.status(200).json(personInf)
}

const updateEduc = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Schema.Types.ObjectId.IsValid(id)){
        return res.status(404)
    }

    const personInf = await educSurv.findOneAndUpdate({ _id: id});


    if(!personInf){
        res.status(400)
    }

    res.status(200).json(personInf)
}

module.exports = {
    singEduc,
    allEduc,
    addEduc,
    deleteEduc,
    updateEduc
}