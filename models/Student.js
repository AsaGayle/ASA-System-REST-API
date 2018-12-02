const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema 
const StudentSchema = new Schema({
    _id:{
        type: String,
        default: "00000",
        require: true
    },
    first_Name:{
        type: String,
        require: true
    },
    last_Name:{
        type: String,
        require: true
    },
    student_email:{
        type: String,
        required: true
    },
    cID_Attendence:{
        type: Object,
        required: true
    },
    cID:{
        type: [],
        required: true
    },
    recepient: {
        type: [],
        required: true
    }
});

module.exports = Student = mongoose.model('student', StudentSchema, 'Student');