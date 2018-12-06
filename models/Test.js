const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema 
const TestSchema = new Schema({
    _id:{
        type: String,
        default: "potato",
        require: true
    },
    word:{
        type: String,
        default: "potato",
        require: true
    },
    arraytest:{
        type: []
    }
});

module.exports = Student = mongoose.model('test', TestSchema, 'Test');