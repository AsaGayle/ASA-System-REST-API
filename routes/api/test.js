const express = require('express');
const router = express.Router();

// Student Model
const Test = require('../../models/Test');

// @route  GET api/students
// @desc   Get all students
// @access Public
router.get('/', (req, res) => {
    Test.find()
    .then(test => res.json(test))
});

// @route  POST api/student
// @desc   Create a POST
// @access Public
router.post('/', (req, res) => {
    const newTest = new Test({
            "_id": "1122345",
            "word":"New test",
            "arraytest": [[1,2,3,4], [5,6,7,8]]
    });

    newTest.save()
        .then(test => res.json(test));
});

router.put('/:id/:index', (req, res) => {
    Test.update({_id : req.params.id}, req.body)
    .then(success => res.json(success))
    .catch(err => console.log(err))
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

const givespliced = (arr, index) => {
    arr.splice(index,1);
    return arr;
}

module.exports = router;
