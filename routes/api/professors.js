const express = require('express');
const router = express.Router();

// Student Model
const Professor = require('../../models/Professor');

// @route  GET api/professor
// @desc   Test to get all professors
// @access Public
router.get('/', (req, res) => {
    Professor.find()
    .then(professor => res.json(professor))
});

// @route  GET api/professor/:profID
// @desc   Get one professor
// @access Public
router.get('/:profID', (req, res) => {
    Professor.find({_id : req.params.profID})
    .then(professor => res.json(professor))
    .catch((err) => (err))
    // .then(console.log(req.params.profID))
});

module.exports = router;