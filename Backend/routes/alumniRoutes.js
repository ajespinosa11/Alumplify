const express = require('express');

const {
    getAlumni,
    getSingleAlumni,
    postAlumni,
    delAlumni,
    updAlumni
} = require('../controller/alumniController')

const {
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
} = require('../controller/eventController');

const {
    allBoa,
    singleBoa,
    addBOA,
    updBoa,
    delBoa
} = require('../controller/boaController')

const {
    singPers,
    allPers,
    addPers,
    deletePers,
    updatePers
} = require('../controller/surveyController/persInfoCont')

const {
    singEmp,
    allEmp,
    addEmp,
    deleteEmp,
    updateEmp
} = require('../controller/surveyController/empCont')

const {
    singEduc,
    allEduc,
    addEduc,
    deleteEduc,
    updateEduc
} = require('../controller/surveyController/educCont')

const {
    singJob,
    allJob,
    addJob,
    deleteJob,
    updateJob
} = require('../controller/surveyController/jobCont')

const router = express.Router();

//Alumni

//Get all alumni
router.get('/alumni/', getAlumni);

//Get all single alumni profile
router.get('/alumni/:id', getSingleAlumni);

//Post all alumni
router.post('/alumni/', postAlumni);

//Get editg alumni
router.patch('/alumni/:id', updAlumni);

//delete alumni
router.delete('/alumni/id', delAlumni)


//Events

//Get all events
router.get('/events/', getAllEvent);

//Post single events
router.post('/events/', postEvent);

//Get all single events
router.get('/events/:id', getSingleEvent);

//Get all single events
router.patch('/events/:id', updEvent);

//Get all single events
router.delete('/events/:id', delEvent);

//Stories

//Get all Stories
router.get('/stories/', getAllStory);

//Post single Stories
router.post('/stories/', postStory);

//Get all single Stories
router.get('/stories/:id', getSingleStory);

//Get all single Stories
router.patch('/stories/:id', updStory);

//Get all single Stories
router.delete('/stories/:id', delStory);

//Book of Abstract

//Get all Abstract
router.get('/abstract/', allBoa);

//Post single Abstract
router.post('/abstract/', addBOA);

//Get all single Abstract
router.get('/abstract/:id', singleBoa);

//Get all single Abstract
router.put('/abstract/:id', updBoa);

//Get all single Abstract
router.delete('/abstract/:id', delBoa);

//Response----------------------------------------------------
//Personal Information
//Get all Response
router.get('/response/persInf', allPers);

//Post single Response
router.post('/response/persInf', addPers);

//Get single Response
router.get('/response/persInf/:id', singPers);

//Get all single Response
router.patch('/response/persInf/:id', updatePers);

//Get all single Response
router.delete('/response/persInf/:id', deletePers);

//Education
//Get all Response
router.get('/response/Educ', allEduc);

//Post single Response
router.post('/response/Educ', addEduc);

//Get single Response
router.get('/response/Educ/:id', singEduc);

//Get all single Response
router.patch('/response/Educ/:id', updateEduc);

//Get all single Response
router.delete('/response/Educ/:id', deleteEduc);

//Employe
//Get all Response
router.get('/response/Employee', allEmp);

//Post single Response
router.post('/response/Employee', addEmp);


router.get('/response/Employee/:id', singEmp);

//Get all single Response
router.patch('/response/Employee/:id', updateEmp);

//Get all single Response
router.delete('/response/Employee/:id', deleteEmp);

//Job
//Get all Response
router.get('/response/Job', allJob);

//Post single Response
router.post('/response/Job', addJob);

//Get single Response
router.get('/response/Job/:id', singJob);

//Get all single Response
router.patch('/response/Job/:id', updateJob);

//Get all single Response
router.delete('/response/Job/:id', deleteJob);

//Response----------------------------------------------------


//Result


module.exports = router