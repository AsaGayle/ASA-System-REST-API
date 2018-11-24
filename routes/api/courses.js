const express = require('express');
const router = express.Router();

// Student Model
const Course = require('../../models/Course');

// @route  GET api/courses
// @desc   Get all courses
// @access Public
router.get('/', (req, res) => {
    Course.find()
    .then(course => res.json(course))
});

// @route   GET api/courselist
// @desc    Get all courses by seperating passed && seperated string
// @access  Public
router.get('/:courseID', (req, res) =>{
    Course.find({_id : req.params.courseID})
    .then(course => res.json(course))
    //.then(console.log(course[0]))
})


router.get('/:courseID/date', (req, res) =>{
    Course.find({_id : req.params.courseID})
    .then(course => (res.json(course[0].day_Time[0][0])))
})

module.exports = router;