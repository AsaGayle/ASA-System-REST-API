const express = require('express');
const router = express.Router();

// Student Model
const Profile = require('../../models/Profile');

// @route  GET api/profile
// @desc   Get all profiles
// @access Public
router.get('/', (req, res) => {
    Profile.find()
    .then(profile => res.json(profile))
});

// @route  GET api/profile
// @desc   Get all profiles
// @access Public
router.get('/:username/:password', (req, res) => {
    Profile.find({Username: req.params.username, Password: req.params.password})
    .then(profile => res.json(profile[0]["uID"]))
    .catch(err => res.json(err))
});


module.exports = router;