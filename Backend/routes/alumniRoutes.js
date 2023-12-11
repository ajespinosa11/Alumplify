const express = require('express');

const {
    getAlumni,
    getSingleAlumni,
    postAlumni,
    delAlumni,
    updAlumni
} = require('../controller/alumniController')

const {
    singleResponse,
    addResponse,
    deleteResponse,
    updateResponse,
    allResponse
} = require('../controller/responseController')

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
router.patch('/abstract/:id', updBoa);

//Get all single Abstract
router.delete('/abstract/:id', delBoa);

//Response

//Get all Response
router.get('/response/', allResponse);

//Post single Response
router.post('/response/', addResponse);

//Get single Response
router.get('/response/:id', singleResponse);

//Get all single Response
router.patch('/response/:id', updateResponse);

//Get all single Response
router.delete('/response/:id', deleteResponse);

//Result


module.exports = router