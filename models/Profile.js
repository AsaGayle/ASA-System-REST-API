const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema 
const ProfileSchema = new Schema({
    _id:{
        type: Number,
        default: 00000,
        require: true
    },
    Password: {
        type: String,
        required: true
    },
    uID: {
        type: String,
        required: true
    },
    Username: {
        type: String,
        required: true
    }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);