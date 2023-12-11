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
} = require('../controller/eventController')

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
router.get('/events/');

//Post single events
router.post('/events/');

//Get all single events
router.get('/events/:id');

//Get all single events
router.patch('/events/:id');

//Get all single events
router.delete('/events/:id');

//Stories

//Get all Stories
router.get('/stories/');

//Post single Stories
router.post('/stories/');

//Get all single Stories
router.get('/stories/:id');

//Get all single Stories
router.patch('/stories/:id');

//Get all single Stories
router.delete('/stories/:id');

//Book of Abstract

//Get all Abstract
router.get('/abstract/');

//Post single Abstract
router.post('/abstract/');

//Get all single Abstract
router.get('/abstract/:id');

//Get all single Abstract
router.patch('/abstract/:id');

//Get all single Abstract
router.delete('/abstract/:id');

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