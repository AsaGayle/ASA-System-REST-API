const express = require('express');
const router = express.Router();

// Student Model
const Professor = require('../../models/Professor');

// @route  GET api/professor
// @desc   Test to get all professors
// @access Public
router.get('/', (req, res) => {
    Professor.find()
    .sort({date: -1 })
    .then(professor => res.json(professor))
});

// @route  GET api/professor/:profID
// @desc   Get one professor
// @access Public
router.get('/single/:profID', (req, res) => {
    Student.find({_id : req.params._id})
    .then(student => res.json(professor))
    .then(console.log(req.params._id))
});

module.exports = router;