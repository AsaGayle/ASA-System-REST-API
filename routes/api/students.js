const express = require('express');
const router = express.Router();

// Student Model
const Student = require('../../models/Student');

// @route  GET api/student
// @desc   Get all students
// @access Public
router.get('/', (req, res) => {
    Student.find()
    .then(students => res.json(students))
});

/*
// @route  GET api/student/:studentID
// @desc   Get one student
// @access Public
router.get('/single/:studentID', (req, res) => {
    Student.find({studentID : req.params.})
    .then(student => res.json(student))
    .then(console.log(req.params.studentID))
});

// @route  POST api/student
// @desc   Create a POST
// @access Public
router.post('/', (req, res) => {
    const newStudent = new Student({
        _id: "01111",
        first_Name: "Asa",
        "last_Name" : "Test",

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
