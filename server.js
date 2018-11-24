const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const students = require('./routes/api/students')
const courses = require('./routes/api/courses')
const professors = require('./routes/api/professors')
const profiles = require('./routes/api/profiles')
const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;
//const db = require('./config/keys-test').mongoURI;

//connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/students', students);
app.use('/api/courses', courses);
app.use('/api/professors', professors);
app.use('/api/profiles', profiles);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server started on " + port));
 