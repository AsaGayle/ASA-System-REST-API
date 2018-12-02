const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    _id:{
        type: String,
        default: "00000",
        require: true
    },
    course_Name:{
        type: String,
        require: true
    },
    room_Number: {
        type: String,
        default: "000"
    },
    pID: {
        type: String,
        default: "0000"
    },
    time_Window: {
        type: String,
        default: "00"
    },
    duration: {
        type: String,
        default: "60"
    },
    day_Time: {
        type: [],
        required: true
    },
    sID: {
        type: [String],
        required: true
    }
});

module.exports = Course = mongoose.model('course', CourseSchema, 'Courses');