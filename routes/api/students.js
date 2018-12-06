const express = require('express');
const router = express.Router();

// Student Model
const Student = require('../../models/Student');

const delete_recepient = (arr, index) => {
    arr.splice(index, 1);
    console.log(arr);
    return arr;
}

// @route  GET api/students
// @desc   Get all students
// @access Public
router.get('/', (req, res) => {
    Student.find()
    .then(students => res.json(students))
});

// @route  GET api/students/:studentID
// @desc   Get one student
// @access Public
router.get('/single/:studentID', (req, res) => {
    Student.find({_id : req.params.studentID})
    .then(student => res.json(student))
});

// @route  GET api/students/:studentID
// @desc   Get one student
// @access Public
router.put('/single/array/:index/:studentID', (req, res) => { 
    Student.update({_id : req.params.studentID}, req.body)
    .then(success => res.json())
    .catch(err => console.log(err))
});

// @route  GET api/students/deleterec/:index/:studentID
// @desc   Delete one recepient from one student
// @access Private
router.patch('/deleterec/:index/:studentID', (req, res) => {
    Student.find({_id : req.params.studentID})
    .then(student => arr = student[0].recepient)
    .then(array => (delete_recepient(array, req.params.index)))
    .then(results => 
        Student.update({'_id':req.params.studentID},{'$set':{'recepient':results}})).catch(err => console.log(err))
        .then(end => res.json(end))
        }
    )

// @route  GET api/students/multi/:courseID
// @desc   Get one student
// @access Public
router.get('/multi/:courseID', (req, res) => {
    Student.find({cID : req.params.courseID})
    .then(students => res.json(students))
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

module.exports = router;
