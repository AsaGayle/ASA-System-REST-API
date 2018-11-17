const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema 
const StudentSchema = new Schema({
    studentID: {
        type: Number,
        required: true
    },
    studentName: {
        type: String,
        required: true
    },
    date: {
        type: Date
    }
});

module.exports = Student = mongoose.model('student', StudentSchema);