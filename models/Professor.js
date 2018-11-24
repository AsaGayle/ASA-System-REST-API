const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema 
const ProfessorSchema = new Schema({
    _id:{
        type: String,
        default: "00000",
        require: true
    },
    first_name:{
        type: String,
        require: true
    },
    last_name:{
        type: String,
        require: true
    },
    professor_email: {
        type: String,
        require: true
    },
    course_list: {
        type: [],
        require: true
    }
});

module.exports = Professor = mongoose.model('professor', ProfessorSchema, 'Professor');