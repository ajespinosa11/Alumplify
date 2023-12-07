const express = require('express');

const router = express.Router();

//Alumni

//Get all alumni
router.get('/alumni/');

//Get all single alumni profile
router.get('/alumni/:id');

//Post all alumni
router.post('/alumni/');

//Get all single Abstract
router.patch('/alumni/:id');


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