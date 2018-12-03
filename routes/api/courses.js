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
})

// @route   GET api/courselist
// @desc    Get all courses by seperating passed && seperated string
// @access  Public
router.get('/coursename/:courseID', (req, res) =>{
    Course.find({_id : req.params.courseID})
    .then(course => res.json(course[0].course_Name))
})

// @route   GET api/courses/getcourses
// @desc    Get all courses for student/professor by ID
// @access  Public
router.get('/multi/student/:id', (req, res) =>{
    Course.find({sID: req.params.id})
    .then(courses => res.json(courses))

})

// @route   GET api/courses/getcourses
// @desc    Get all courses for student/professor by ID
// @access  Public
router.get('/multi/prof/:id', (req, res) =>{
    Course.find({pID: req.params.id})
    .then(courses => res.json(courses))

})

module.exports = router;