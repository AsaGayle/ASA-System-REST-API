const express = require('express');
const router = express.Router();

// Student Model
const Student = require('../../models/Student');

const delete_recepient = (arr, index) => {
    arr.splice(index, 1);
    console.log(arr);
    return arr;
}

const add_recepient = (arr, name, email) => {
    arr.push([name, email]);
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

// @route  GET api/students/deleterec/:index/:studentID
// @desc   Delete one recepient from one student
// @access Private
router.patch('/addrec/:studentID/:recipName/:recipEmail', (req, res) => {
    Student.find({_id : req.params.studentID})
    .then(student => arr = student[0].recepient)
    .then(arr => (add_recepient(arr, req.params.recipName, req.params.recipEmail)))
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

module.exports = router;
