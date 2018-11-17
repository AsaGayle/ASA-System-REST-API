const express = require('express');
const router = express.Router();

// Student Model
const Course = require('../../models/Course');

// @route  GET api/student
// @desc   Get all student
// @access Public
router.get('/', (req, res) => {
    Course.find()
    .then(course => res.json(course))
});

router.get('/:courseID', (req, res) =>{
    Course.find({_id : req.params.courseID})
    .then(course => res.json(course))
    //.then(console.log(course[0]))
})

router.get('/:courseID/date', (req, res) =>{
    Course.find({_id : req.params.courseID})
    .then(course => (res.json(course[0].day_Time[0][0])))
})

/*
// @route  GET api/student/:studentID
// @desc   Get one student
// @access Public
router.get('/single/:studentID', (req, res) => {
    Student.find({studentID : req.params.studentID})
    .then(student => res.json(student))
    .then(console.log(req.params.studentID))
});

// @route  POST api/student
// @desc   Create a POST
// @access Public
router.post('/', (req, res) => {
    const newStudent = new Student({
        studentID: req.body.studentID,
        studentName: req.body.studentName
    });

    newStudent.save()
        .then(student => res.json(student));
});

// @route  DELETE api/student
// @desc   Deletes a item
// @access Public
router.delete('/:studentID', (req, res) => {
    Student.find({studentID : req.params.studentID})
        .then(student => Student.deleteOne({_id : student[0]._id}))
        .then(()=> res.json({success: true}))
        .catch(err => res.status(404).json({success: false, id: req.params.stuID}));
})
*/
module.exports = router;